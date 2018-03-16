import {RECEIVE_QUESTIONS, RECEIVE_QUESTION} from '../actions/question_actions';
import {RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_TOPIC} from '../actions/topic_actions';
import { merge } from 'lodash';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return merge({}, state, action.users);
    case RECEIVE_QUESTION:
      return merge({}, state, action.users);
    case RECEIVE_TOPIC:
      return merge({}, state, action.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
