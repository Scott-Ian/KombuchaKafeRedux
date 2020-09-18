import CreateKombuchaForm from '../components/CreateKombuchaForm';
import * as c from './../actions/ActionTypes';

// Strings in these switch cases correspond to names of components to be rendered
export default (state = 'KombuchaList', action) => {
  switch(action.type) {
    case c.EDIT_KOMBUCHA:
      return 'EditKombuchaForm';
    case c.KOMBUCHA_DETAIL:
      return 'KombuchaDetail';
    case c.CREATE_KOMBUCHA:
      return 'CreateKombuchaForm';
    case c.KOMBUCHA_LIST:
      return 'KombuchaList'
    default:
      return state;
  }
}