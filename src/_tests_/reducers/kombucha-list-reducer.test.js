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

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kombuchaListReducer({}, {type: null})).toEqual({});
  });

  test('Should add a new Kombucha to the kombucha list', () => {
    const action = a.addKombucha(kombuchaData);
    const response = kombuchaListReducer({}, action);
    expect(kombuchaListReducer({}, action)).toEqual({[kombuchaData.id]: kombuchaData});
  });

})