import {merge} from 'lodash';
import {RECEIVE_QUESTIONS, RECEIVE_QUESTION} from '../actions/question_actions';
import {
  RECEIVE_TOPICS,
  RECEIVE_TOPIC,
  REMOVE_TOPIC
} from '../actions/topic_actions';
import {
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from '../actions/tagging_actions';

const topicsReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return merge({}, state, action.topics);
    case RECEIVE_QUESTION:
      return merge({}, state, action.topics);
    case RECEIVE_TOPICS:
      return action.topics;
    case RECEIVE_TOPIC:
      return merge({}, state, {[action.topic.id]: action.topic});
    case REMOVE_TOPIC:
      const newState = merge({}, state);
      delete newState[action.topicId];
      return newState;
    case RECEIVE_TAGGING:
      const newStateTag = merge({}, state);
      const arr = newStateTag[action.topicId].questionIds;
      arr.push(action.questionId);
      return newStateTag;
    case REMOVE_TAGGING:
      const newStateRT = merge({}, state);
      const arrRT = newStateRT[action.TopicId].questionIds;
      const indexRT = arrRT.indexOf(action.questionId);
      arrRT.splice(index,1);
      return newStateRT;
    default:
      return state;
  }
};

export default topicsReducer;
