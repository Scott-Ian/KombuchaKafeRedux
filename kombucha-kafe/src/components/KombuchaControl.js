import React from 'react';
import KombuchaList from './KombuchaList';
import KombuchaDetail from './KombuchaDetail';
import CreateKombuchaForm from './CreateKombuchaForm';
import EditKombuchaForm from './EditKombuchaForm';


class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisibleOnPage: false,
      masterKombuchaList: [{
        name: "Ginger Peach",
        brewery: "Dave's Killer Kool-Aide",
        price: 8,
        quantity: 120,
        description: "A tantalizing tase of ginger and peach awash the tongue in this beautiful concotion",
        imgURL: "https://post.greatist.com/wp-content/uploads/2020/08/kombucha-alcohol-content-732x549-thumbnail.jpg",
        numberOrdered: 31,
        id: "1"
      },
      {
        name: "Honey Hibiscus",
        brewery: "Margaret's Manse",
        price: 10,
        quantity: 92,
        description: "Your tastebuds will be blown away by this sweet drink with a floral aroma",
        numberOrdered: 82,
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvTxYuLYKhs9h-yQW0MFTcS1hIIVFYsE0o_w&usqp=CAU",
        id: "2"
      },
      {
        name: "Lu-Lu-Lucy",
        brewery: "Lucy's Liquids",
        price: 12,
        quantity: 27,
        description: "I love Lucy in a drink!",
        numberOrdered: 12,
        imgURL: "https://www.straight.com/files/v3/styles/gs_feature/public/images/16/08/o5_tea.jpg?itok=RvJ8b5Jo",
        id: "3"
      },
      {
        name: "Wolfe Cola",
        brewery: "Franks Fluids",
        price: 12,
        quantity: 27,
        description: "I love Lucy in a drink!",
        numberOrdered: 12,
        imgURL: "https://res.cloudinary.com/teepublic/image/private/s--Mdsbqva8--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_36538b,e_outline:48/co_36538b,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1512069827/production/designs/2123423_1.jpg",
        id: "4"
      }],
      topSellers: [],
      selectedKombucha: null,
      editing: false
    }
  }

  // switches formVisibleOnPage state
  handleClick = () => {
    if(this.state.selectedKombucha != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKombucha: null,
        editing: false
      });
    } else {
      this.setState (prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
  // changes editing-flag to update virtual DOM/Display
  handleEditClick = () => {
    this.setState({
      editing: true
    });
  }

  handleAddingNewKombuchaToList = (newKombucha) => {
    const newMasterKombuchaList = this.state.masterKombuchaList.concat(newKombucha);
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      formVisibleOnPage: false
    });
  }

  handleEditingKombuchaInList = (kombuchaToEdit) => {
    const editedKombuchaMasterList = this.state.masterKombuchaList
      .filter(kombucha => kombucha.id !== this.state.selectedKombucha.id)
      .concat(kombuchaToEdit);
    this.setState({
      masterKombuchaList: editedKombuchaMasterList,
      editing: false,
      selectedKombucha: null
    });
  }

  handleChangingSelectedKombucha=(id) => {
    const selectedKombucha = this.state.masterKombuchaList
      .filter(kombucha => kombucha.id === id)[0];
    this.setState({
      selectedKombucha: selectedKombucha
    });
  }

  handleDeletingKombucha = (id) => {
    const newMasterKombuchaList = this.state.masterKombuchaList.filter(kombucha => kombucha.id !== id);
    this.setState ({
      masterKombuchaList: newMasterKombuchaList,
      selectedKombucha: null
    });
  }

  handleRestockingKombucha = (id) => {
    const kombuchaToRestock = this.state.masterKombuchaList
      .filter(kombucha => kombucha.id === id)[0];
    const restockedKombucha = {...kombuchaToRestock, quantity:124};
    const newMasterKombuchaList = this.state.masterKombuchaList
      .filter(kombucha => kombucha.id !== id)
      .concat(restockedKombucha);
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      selectedKombucha: null
    })
  }

  handleOrderingKombucha = (id) => {
    const kombuchaToOrder = this.state.masterKombuchaList
      .filter(kombucha => kombucha.id === id)[0];
    
    if(kombuchaToOrder.quantity > 0) {
      const newTotal = kombuchaToOrder.quantity -1;
      const newNumberOrderedTotal = kombuchaToOrder.numberOrdered +1;
      const orderedKombucha = {...kombuchaToOrder, quantity:newTotal, numberOrdered: newNumberOrderedTotal};

      const newMasterKombuchaList = this.state.masterKombuchaList
      .filter(kombucha => kombucha.id !== id)
      .concat(orderedKombucha);

      this.setState({
        masterKombuchaList: newMasterKombuchaList,
        selectedKombucha: null,
      });

      const newTopSellers = this.state.masterKombuchaList.sort( (a,b) => a.numOrdered + b.numOrdered).slice(0,3);

      this.setState({
        topSellers: newTopSellers
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditKombuchaForm kombucha={this.state.selectedKombucha} onEditKombucha= {this.handleEditingKombuchaInList} />
      buttonText = "Return to Kombucha List";
    } else if (this.state.selectedKombucha) {
      currentlyVisibleState = <KombuchaDetail kombucha={this.state.selectedKombucha} onClickingDelete = {this.handleDeletingKombucha} onClickingEdit={this.handleEditClick} onClickingRestock={this.handleRestockingKombucha} onOrderingKombucha={this.handleOrderingKombucha}/>
      buttonText = "Return to Kombucha List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <CreateKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />
      buttonText = "Return to Kombucha List";
    } else {
      currentlyVisibleState = <KombuchaList kombuchaList={this.state.masterKombuchaList} topSellers = {this.state.topSellers} onKombuchaSelection={this.handleChangingSelectedKombucha}/>
      buttonText="Add Kombucha"
    }

    return (

      <React.Fragment>
        {currentlyVisibleState}
        <hr/>
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}


export default KombuchaControl;