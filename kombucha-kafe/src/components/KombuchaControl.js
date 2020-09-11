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