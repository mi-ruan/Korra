import {merge} from 'lodash';
import {
   RECEIVE_QUESTIONS,
   RECEIVE_QUESTION,
   REMOVE_QUESTION
 } from '../actions/question_actions';

 import {
   REMOVE_ANSWER
 } from '../actions/answer_actions';

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return merge({}, state, {[action.question.id]: action.question});
    case REMOVE_QUESTION:
      const newState = merge({}, state);
      delete newState[action.questionId];
      return newState;
    case REMOVE_ANSWER:
      const newState2 = merge({}, state);
      const arr = newState2[action.questionId].answerIds;
      const index = arr.indexOf(action.answerId);
      arr.splice(index,1);
      return newState2;
    default:
      return state;
  }
};

export default questionsReducer;
