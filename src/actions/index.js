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

export const orderKombucha = (id) => ({
  type: c.ORDER_KOMBUCHA,
  id
});

export const restockKombucha = (id) => ({
  type: c.RESTOCK_KOMBUCHA,
  id
});

export const listDisplay = () => ({
  type: c.KOMBUCHA_LIST,
})

export const createDisplay = () => ({
  type: c.CREATE_KOMBUCHA,
})

export const detailDisplay = (kombuchaId) => ({
  type: c.KOMBUCHA_DETAIL,
  kombuchaId
});

export const editKombucha = (kombuchaId) => ({
  type: c.EDIT_KOMBUCHA,
  kombuchaId
})