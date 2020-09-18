import kombuchaListReducer from '../../reducers/kombucha-list-reducer';
import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe ('KombuchaListReducer', () => {

  const kombuchaData = {
    name: "Cherry Garcia",
    brewery: "Greatful Bucha",
    price: 9,
    description: 'A cherry brew for the ages',
    imgURL: '#',
    quantity: 39,
    numberOrdered: 18,
    id: 66
  }

  const currentState = {
    66: {
      name: "Cherry Garcia",
      brewery: "Greatful Bucha",
      price: 9,
      description: 'A cherry brew for the ages',
      imgURL: '#',
      quantity: 39,
      numberOrdered: 18,
      id: 66
    },
    2: {
      name: "Billy's Bucha",
      brewery: "Bucha Boy",
      price: 7,
      description: 'The IPA of Kombucha',
      imgURL: '#',
      quantity: 27,
      numberOrdered: 4,
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kombuchaListReducer({}, {type: null})).toEqual({});
  });

  test('Should add a new Kombucha to the kombucha list', () => {
    const action = a.addKombucha(kombuchaData);
    const response = kombuchaListReducer({}, action);
    expect(kombuchaListReducer({}, action)).toEqual({[kombuchaData.id]: kombuchaData});
  });

  test('Should delete a kombucha', () => {
    const action = a.deleteKombucha(66)
    expect(kombuchaListReducer(currentState, action)).toEqual({
      2: {
        name: "Billy's Bucha",
        brewery: "Bucha Boy",
        price: 7,
        description: 'The IPA of Kombucha',
        imgURL: '#',
        quantity: 27,
        numberOrdered: 4,
        id: 2
      }
    })
  });

  test('Should reduce quantity by 1 when a kombucha is ordered', () => {
    const action = a.orderKombucha(66);
    const newQuantity = currentState[66].quantity -1;
    expect(kombuchaListReducer(currentState, action)[66].quantity).toEqual(newQuantity);
  });

  test('Should increment numberOrdered by 1 when a kombucha is ordered', () => {
    const action = a.orderKombucha(66);
    const newNumberOrdered = currentState[66].numberOrdered + 1;
    expect(kombuchaListReducer(currentState, action)[66].numberOrdered).toEqual(newNumberOrdered);
  });

})