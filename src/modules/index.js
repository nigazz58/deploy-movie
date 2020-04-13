import { combineReducers } from 'redux';
import loading from './loading';
import data from './data';
import search from './search';
import around from './around';
import menu from './menu';

export default combineReducers({
  loading,
  data,
  search,
  around,
  menu,
});
