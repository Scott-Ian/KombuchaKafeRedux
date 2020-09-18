import CreateKombuchaForm from '../components/CreateKombuchaForm';
import * as c from './../actions/ActionTypes';

// Strings in these switch cases correspond to names of components to be rendered
export default (state = {display:'KombuchaList', kombuchaId: null}, action) => {
  const { kombuchaId } = action;
  switch(action.type) {
    case c.EDIT_KOMBUCHA:
      return ({
        display: 'EditKombuchaForm',
        kombuchaId
      });
    case c.KOMBUCHA_DETAIL:
      return ({
        display: 'KombuchaDetail',
        kombuchaId
      });
    case c.CREATE_KOMBUCHA:
      return ({
        display: 'CreateKombuchaForm',
        kombuchaId
      });
    case c.KOMBUCHA_LIST:
      return ({
        display: 'KombuchaList',
        kombuchaId
      });
    default:
      return state;
  }
}