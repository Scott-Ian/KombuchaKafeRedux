import kombuchaListReducer from '../../reducers/form-visible-reducer';
import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe ('KombuchaListReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kombuchaListReducer({}, {type: null})).toEqual({});
  });


})