import {combineReducers} from 'redux';
import modal from './modal_reducer';
import dropDownForm from './drop_down_form_reducer';
import headerModal from './header_modal_reducer';


export default combineReducers({
  modal,
  dropDownForm,
  headerModal,
});
