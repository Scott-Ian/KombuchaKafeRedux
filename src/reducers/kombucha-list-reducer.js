import * as c from './../actions/ActionTypes';

export default (state ={}, action) => {
  const {name, brewery, price, description, imgURL, quantity, numberOrdered, id } = action;

  switch(action.type) {
    case c.ADD_KOMBUCHA:
      return Object.assign ({}, state, { 
        [id]: {
          name: name,
          brewery: brewery,
          price: price,
          description: description,
          imgURL: imgURL,
          quantity: quantity,
          numberOrdered: numberOrdered,
          id: id
        }
      });
    case c.DELETE_KOMBUCHA:
      const newState = {...state };
      delete newState[id];
      return newState;
    case c.ORDER_KOMBUCHA:
      const newStateOrder = {... state };
      const newQuantity = newStateOrder[id].quantity - 1;
      newStateOrder[id].quantity = newQuantity;
    return newStateOrder;
    case c.RESTOCK_KOMBUCHA:
      return state[id];
    default:
      return state;
  }
};