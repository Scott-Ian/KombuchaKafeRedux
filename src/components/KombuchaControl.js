import React from 'react';
import KombuchaList from './KombuchaList';
import KombuchaDetail from './KombuchaDetail';
import CreateKombuchaForm from './CreateKombuchaForm';
import EditKombuchaForm from './EditKombuchaForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';


//function KombuchaControl() {

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    const { dispatch } = this.props;

    if (this.props.displayState.display === 'KombuchaList') {
      const action = a.createDisplay();
      dispatch(action);
    } else {
      const action = a.listDisplay();
      dispatch(action);
    }
  }

  handleChangingSelectedKombucha=(id) => {
    const { dispatch } = this.props;
    const action = a.detailDisplay(id);
    dispatch(action);
    };

  handleAddingNewKombuchaToList = (newKombucha) => {
    const {dispatch } = this.props;
    const action = a.addKombucha(newKombucha);
    dispatch(action);
    this.resetDisplay();
  }

  handleDeletingKombucha = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKombucha(id);
    dispatch(action);
    this.resetDisplay();
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.editKombucha();
    dispatch(action);
  }

  handleRestockingKombucha = (id) => {
    const { dispatch } = this.props;
    const action = a.restockKombucha(id);
    dispatch(action);
  }

  handleOrderingKombucha = (id) => {
    const { dispatch } = this.props;
    const action = a.orderKombucha(id);
    dispatch(action);
  }

  resetDisplay = () => {
    const {dispatch} = this.props;
    const action = a.listDisplay();
    dispatch(action);
  }


  render() {
    let buttonText = null;
    let pageToDisplay = null;
    const selectedKombuchaId = this.props.displayState.kombuchaId

    if (this.props.displayState.display === 'EditKombuchaForm') {
      pageToDisplay = <EditKombuchaForm kombucha={this.props.masterKombuchaList[selectedKombuchaId]} onEditKombucha={this.handleAddingNewKombuchaToList}/>
      buttonText = "Return to Kombucha List";
    } else if (this.props.displayState.display === 'KombuchaDetail') {
      pageToDisplay = <KombuchaDetail kombucha = {this.props.masterKombuchaList[selectedKombuchaId]} onClickingDelete = {this.handleDeletingKombucha} onClickingEdit={this.handleEditClick} onClickingRestock={this.handleRestockingKombucha} onOrderingKombucha={this.handleOrderingKombucha}/>
      buttonText="Return to Kombucha List";
    } else if (this.props.displayState.display === 'CreateKombuchaForm') {
      pageToDisplay = <CreateKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />
      buttonText = "Return to Kombucha List";
    } else {
      pageToDisplay = <KombuchaList kombuchaList={this.props.masterKombuchaList} onKombuchaSelection = {this.handleChangingSelectedKombucha}/>
      buttonText = "Add Kombucha";
    }

    return (
      <React.Fragment>
        {pageToDisplay}
        <hr/>
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}


KombuchaControl.propTypes = {
  masterKombuchaList: PropTypes.object,
  displayState: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterKombuchaList: state.masterKombuchaList,
    displayState: state.displayState
  }
}

KombuchaControl = connect(mapStateToProps)(KombuchaControl);

export default KombuchaControl;

/*
  // changes editing-flag to update virtual DOM/Display

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

*/