import {RECEIVE_QUESTIONS, RECEIVE_QUESTION} from '../actions/question_actions';
import {RECEIVE_ANSWER, REMOVE_ANSWER} from '../actions/answer_actions';
import {RECEIVE_TOPIC} from '../actions/topic_actions';
import {merge} from 'lodash';

const answersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return merge({}, state, action.answers);
    case RECEIVE_QUESTION:
      return merge({}, state, action.answers);
    case RECEIVE_ANSWER:
      return merge({}, state, {[action.answer.id]: action.answer});
    case REMOVE_ANSWER:
      const newState = merge({}, state);
      delete newState[action.answerId];
      return newState;
    case RECEIVE_TOPIC:
      return merge({}, state, action.answers);
    default:
      return state;
  }
};

export default answersReducer;
