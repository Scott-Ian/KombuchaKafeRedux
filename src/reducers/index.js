import { combineReducers } from 'redux';
import kombuchaListReducer from './kombucha-list-reducer';

const rootReducer = combineReducers({
  masterKombuchaList:  kombuchaListReducer
});

export default rootReducer;