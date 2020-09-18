import * as c from './../actions/ActionTypes';
import * as i from './../initialEntries';


export default (state = i.initialEntries, action) => {
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
      if(state[id].quantity > 0) {

        const newStateOrder = {... state };
        const newQuantity = newStateOrder[id].quantity - 1;
        const newNumberOrdered = newStateOrder[id].numberOrdered + 1;
        newStateOrder[id].quantity = newQuantity;
        newStateOrder[id].numberOrdered = newNumberOrdered;
        return newStateOrder;
      } else {
        return state;
      }
    case c.RESTOCK_KOMBUCHA:
      const newStateRestock = {... state };
      const restockedQuantity = 124;
      newStateRestock[id].quantity = restockedQuantity;
      return newStateRestock;
    default:
      return state;
  }
};