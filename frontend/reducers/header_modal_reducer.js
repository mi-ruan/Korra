import { OPEN_HEADER_MODAL, CLOSE_HEADER_MODAL } from '../actions/header_modal_actions';

const defaultState = {
  type: null,
  id: null
};

export default function modalReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_HEADER_MODAL:
      return Object.assign({}, {type: action.headerModal, id: action.id});
    case CLOSE_HEADER_MODAL:
      return defaultState;
    default:
      return state;
  }
}
