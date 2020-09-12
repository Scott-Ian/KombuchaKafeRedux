import React from 'react';
import KombuchaCard from './KombuchaCard';
import TopSellers from './TopSellers';
import PropTypes from 'prop-types';

function KombuchaList(props) {

  return(
    <React.Fragment>
      <hr/>
      <TopSellers topSellers={props.topSellers}/>
      {props.kombuchaList.map((kombucha) =>
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
      )}
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