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
    default:
      return state;
  }
};