import { combineReducers } from 'redux';
import kombuchaListReducer from './kombucha-list-reducer';
import displayReducer from './display-reducer';

const rootReducer = combineReducers({
  masterKombuchaList:  kombuchaListReducer,
  displayState: displayReducer
});

export default rootReducer;