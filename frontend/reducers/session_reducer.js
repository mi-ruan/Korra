import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const _nullSession = {
  currentUser: null,
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.user});
    default:
      return state;
  }
};

export default sessionReducer;
