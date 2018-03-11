import {RECEIVE_QUESTIONS} from '../actions/question_actions';
import {RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';


const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return merge({}, oldState, action.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    default:
      return oldState;
  }
};

export default usersReducer;
