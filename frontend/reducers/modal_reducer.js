import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const defaultState = {
  type: null,
  id: null
};

export default function modalReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, {type: action.modal, id: action.id});
    case CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
}
