import React from 'react';
import KombuchaCard from './KombuchaCard';
import TopSellers from './TopSellers';
import PropTypes from 'prop-types';

function KombuchaList(props) {
  
  const gridContainerStyle = {
    display: "grid"
  }

  const menuStyle = {
    gridArea: "menu"
  }

  return(
    <React.Fragment>
      <hr/>
      <div className="grid-container" style={gridContainerStyle}>
        <div className="grid-item menu" style={menuStyle}>
        <TopSellers topSellers={props.topSellers}/>
        </div>
        {props.kombuchaList.map((kombucha) =>
          <div className="grid-item">
            <KombuchaCard
              whenKombuchaClicked = {props.onKombuchaSelection}
              onOrderingKombucha = {props.onOrderingKombucha}
              name={kombucha.name}
              brewery={kombucha.brewery}
              price={kombucha.price}
              description={kombucha.description}
              imgURL={kombucha.imgURL}
              quantity={kombucha.quantity}
              numberOrdered={kombucha.numberOrdered}
              id={kombucha.id}
              key={kombucha.id} />
          </div>
          )}
      </div>
    </React.Fragment>
  );
}

KombuchaList.propTypes = {
  onKombuchaSelection: PropTypes.func,
  onOrderingKombucha: PropTypes.func,
  kombuchaList: PropTypes.array,
  topSellers: PropTypes.array,
};

export default KombuchaList;