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
      masterKombuchaList: [],
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
    const newMasterKombuchaList = this.state.masterKombuchaList.filter(kombucha => kombucha.id != id);
    this.setState ({
      masterKombuchaList: newMasterKombuchaList
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditKombuchaForm kombucha={this.state.selectedKombucha} onEditKombucha= {this.handleEditingKombuchaInList} />
      buttonText = "Return to Kombucha List";
    } else if (this.state.selectedKombucha) {
      currentlyVisibleState = <KombuchaDetail kombucha={this.state.selectedKombucha} onClickingDelete = {this.handleDeletingKombucha} onClickingEdit={this.handleEditClick} />
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
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}


export default KombuchaControl;