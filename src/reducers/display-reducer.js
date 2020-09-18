import CreateKombuchaForm from '../components/CreateKombuchaForm';
import * as c from './../actions/ActionTypes';

// Strings in these switch cases correspond to names of components to be rendered
export default (state = {display:'KombuchaList'}, action) => {
  const { id } = action;
  switch(action.type) {
    case c.EDIT_KOMBUCHA:
      return ({
        display: 'EditKombuchaForm',
        id
      });
    case c.KOMBUCHA_DETAIL:
      return ({
        display: 'KombuchaDetail',
        id
      });
    case c.CREATE_KOMBUCHA:
      return ({
        display: 'CreateKombuchaForm',
        id
      });
    case c.KOMBUCHA_LIST:
      return ({
        display: 'KombuchaList',
        id
      });
    default:
      return state;
  }
}