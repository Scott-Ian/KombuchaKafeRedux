import * as c from './ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKombucha = (kombucha) => {
  const {name, brewery, price, description, imgURL, quantity, numberOrdered, id} = kombucha;
  return {
    type: c.ADD_KOMBUCHA,
    name: name,
    brewery: brewery,
    price: price,
    description: description,
    imgURL: imgURL,
    quantity: quantity,
    numberOrdered,
    id: id
  }
}

export const deleteKombucha = (id) => ({
  type: c.DELETE_KOMBUCHA,
  id
});