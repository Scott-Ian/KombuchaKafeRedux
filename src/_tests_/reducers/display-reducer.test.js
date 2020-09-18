import displayReducer from './../../reducers/display-reducer';
import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('displayReducer', () => {

  test('Should return current display state string when no action type is called', () => {
    const currentDisplayStateString = 'KombuchaList';
    expect(displayReducer('KombuchaList', { type: null})).toEqual('KombuchaList');
  })

});
