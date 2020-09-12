import React from 'react';
import PropTypes from 'prop-types';

function KombuchaCard (props) {

  
  return(
    <React.Fragment>
      <div className="flip-card" onClick = {() => props.whenKombuchaClicked(props.id)}>
        <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{props.name}</h3>
          <img src={props.imgURL} alt="Kombucha" style={{width:300, height:300}} />
        </div>
          <div className="flip-card-back">
            <h3>{props.name}</h3>
            <p>By: {props.brewery}</p>
            <p>${props.price}</p>
            <p>Remaining: {props.quantity}</p>
            <p>Number Ordered: {props.numberOrdered}</p>
            <button onClick={() => props.order(props.id)}>Order</button>
          </div>
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
  numberOrdered: PropTypes.number,
  order: PropTypes.func,
  whenKombuchaClicked: PropTypes.func
}

export default KombuchaCard;