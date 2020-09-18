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
    const action2 = a.listDisplay();
    dispatch(action2);
  }

  handleDeletingKombucha = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKombucha(id);
    const action2 = a.listDisplay();
    dispatch(action);
    dispatch(action2);
  }


  render() {
    let buttonText = null;
    let pageToDisplay = null;
    const selectedKombuchaId = this.props.displayState.kombuchaId

    if (this.props.displayState.display === 'EditKombuchaForm') {
      pageToDisplay = <EditKombuchaForm />
      buttonText = "Return to Kombucha List";
    } else if (this.props.displayState.display === 'KombuchaDetail') {
      pageToDisplay = <KombuchaDetail kombucha = {this.props.masterKombuchaList[selectedKombuchaId]} onClickingDelete = {this.handleDeletingKombucha} onClickingEdit={this.handleEditClick} onClickingRestock={this.handlerestockingKombucha} onOrderingKombucha={this.handleOrderingKombucha}/>
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
  handleEditClick = () => {
    this.setState({
      editing: true
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
*/