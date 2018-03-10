import {combineReducers} from 'redux';
import modal from './modal_reducer';
import dropDownForm from './drop_down_form_reducer';

export default combineReducers({
  modal,
  dropDownForm
});
