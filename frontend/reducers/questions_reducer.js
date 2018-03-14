import {merge} from 'lodash';
import {REMOVE_ANSWER} from '../actions/answer_actions';
import {
   RECEIVE_QUESTIONS,
   RECEIVE_QUESTION,
   REMOVE_QUESTION
 } from '../actions/question_actions';
 import {
   RECEIVE_TAGGING,
   REMOVE_TAGGING
 } from '../actions/tagging_actions';

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
      const newStateAnswer = merge({}, state);
      const arr = newStateAnswer[action.questionId].answerIds;
      const index = arr.indexOf(action.answerId);
      arr.splice(index,1);
      return newStateAnswer;
    case RECEIVE_TAGGING:
      const newStateTag = merge({}, state);
      const arrTag = newStateTag[action.questionId].topicIds;
      arrTag.push(action.topicId);
      return newStateTag;
    case REMOVE_TAGGING:
      const newStateRT = merge({}, state);
      const arrRT = newStateRT[action.questionId].topicIds;
      const indexRT = arrRT.indexOf(action.topicId);
      arrRT.splice(index,1);
      return newStateRT;
    default:
      return state;
  }
};

export default questionsReducer;
