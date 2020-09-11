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
        selectedTicket: null,
        editing: false
      });
    } else {
      this.setState (prevState => ({
        formVisibleONPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKombuchaToList = (newKombucha) => {
    const newMasterKombuchaList = this.state.masterKombuchaList.concat(newKombucha);
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    return (

      <React.Fragment>
      
      <KombuchaList /> *
      </React.Fragment>
    )
  }
}


export default KombuchaControl;