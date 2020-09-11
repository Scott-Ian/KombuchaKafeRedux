import React from 'react';
import KombuchaCard from './KombuchaCard';

function KombuchaList(props) {
  return(
    <React.Fragment>
      <hr/>
      {props.kombuchaList.map((kombucha) =>
        <KombuchaCard
          whenKombuchaClicked = {props.onKombuchaSelection}
          order={props.placeOrder}
          name={kombucha.name}
          brewery={kombucha.brewery}
          price={kombucha.price}
          description={kombucha.description}
          imgURL={kombucha.imgURL}
          quantity={kombucha.quantity}
          id={kombucha.id}
          key={kombucha.id} />
      )}
    </React.Fragment>
  );
}

export default KombuchaList;