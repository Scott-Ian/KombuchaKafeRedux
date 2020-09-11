import React from 'react';
import PropTypes from 'prop-types';

function KombuchaCard (props) {
  return(
    <React.Fragment>
      <div className="flipCard" onClick = {() => props.whenKombuchaClicked(props.id)}>
        <div className="flipCardFront">
          <h3>{props.name}</h3>
          <img src={props.imgURL} alt="Kombucha Picture" style={{width:"300px", height:"300px"}} />
        </div>
        <div className="flipCardBack">
          <h3>{props.name}</h3>
          <p>{props.brewery}</p>
          <p>${props.price}</p>
          <p>Remaining: {props.quantity}</p>
          <button onClick={() => props.order(props.id)}>Order</button>
        </div>
      </div>
    </React.Fragment>
  );
}

KombuchaCard.propTypes = {
  id: PropTypes.string, 
  name: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  imgURL: PropTypes.string,
  quantity: PropTypes.number,
  order: PropTypes.func,
  whenKombuchaClicked: PropTypes.func
}

export default KombuchaCard;