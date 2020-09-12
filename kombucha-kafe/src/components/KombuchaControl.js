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
        imgURL: "#",
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
        imgURL: "#",
        id: "2"
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
    const restockedKombucha = this.state.masterKombuchaList
      .filter(kombucha => kombucha.id === id)
      .quantity = 124;
    const newMasterKombuchaList = this.state.masterKombuchaList
      .filter(kombucha => kombucha.id !== id)
      .concat(restockedKombucha);
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      selectedKombucha: null
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditKombuchaForm kombucha={this.state.selectedKombucha} onEditKombucha= {this.handleEditingKombuchaInList} />
      buttonText = "Return to Kombucha List";
    } else if (this.state.selectedKombucha) {
      currentlyVisibleState = <KombuchaDetail kombucha={this.state.selectedKombucha} onClickingDelete = {this.handleDeletingKombucha} onClickingEdit={this.handleEditClick} onClickingRestock={this.handleRestockingKombucha}/>
      buttonText = "Return to Kombucha List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <CreateKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />
      buttonText = "Return to Kombucha List";
    } else {
      currentlyVisibleState = <KombuchaList kombuchaList={this.state.masterKombuchaList} onKombuchaSelection={this.handleChangingSelectedKombucha} />
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