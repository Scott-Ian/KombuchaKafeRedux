import displayReducer from './../../reducers/display-reducer';
import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('displayReducer', () => {

  const displayState = 'KombuchaList';


  test('Should return current display state string when no action type is called', () => {
    expect(displayReducer(displayState, { type: null})).toEqual(displayState);
  })

  test('Should update display state to KombuchaDetail when detailDisplay action is dispatched', () => {
    const action = a.detailDisplay();

    expect(displayReducer(displayState, action)).toEqual('KombuchaDetail');
  })

});
