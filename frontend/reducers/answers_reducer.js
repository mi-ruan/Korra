import {RECEIVE_ANSWER, REMOVE_ANSWER} from '../actions/answer_actions';
import {merge} from 'lodash';

const answersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWER:
      return merge({}, state, {[action.answer.id]: action.answer});
    case REMOVE_ANSWER:
      const newState = merge({}, state);
      delete newState[action.answerId];
      return newState;
    default:
      return state;
  }
};

export default answersReducer;
