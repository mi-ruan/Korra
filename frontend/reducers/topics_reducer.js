import {merge} from 'lodash';
import {RECEIVE_QUESTIONS, RECEIVE_QUESTION} from '../actions/question_actions';
import {
  RECEIVE_TOPICS,
  RECEIVE_TOPIC,
  REMOVE_TOPIC
} from '../actions/topic_actions';

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
    default:
      return state;
  }
};

export default topicsReducer;
