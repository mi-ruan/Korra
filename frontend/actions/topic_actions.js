import * as TopicApiUtil from '../util/topic_api_utils';

export const RECEIVE_TOPICS = "RECEIVE_TOPICS";
export const RECEIVE_TOPIC = "RECEIVE_TOPIC";
export const REMOVE_TOPIC = "REMOVE_TOPIC";


export const receiveTopics = topics => {
  return {
    type: RECEIVE_TOPICS,
    topics
  };
};

export const receiveTopic = payload => {
  return {
    type: RECEIVE_TOPIC,
    topics: payload.topics,
    questions: payload.questions,
    answers: payload.answers,
    users: payload.users
  };
};

export const removeTopic = topicId => {
  return {
    type: REMOVE_TOPIC,
    topicId
  };
};


export const fetchTopics = () => {
  return (
    dispatch => {
      return (TopicApiUtil.fetchTopics()
      .then(topics => dispatch(receiveTopics(topics)))
    );
  });
};
export const fetchTopic = (id) => {
  return (
    dispatch => {
      return (TopicApiUtil.fetchTopic(id)
      .then(topic => dispatch(receiveTopic(topic)))
    );
  });
};
export const createTopic = (topic, questionId) => {
  return (
    dispatch => {
      return (TopicApiUtil.createTopic(topic, questionId)
      .then(topic => dispatch(receiveTopic(topic)))
    );
  });
};
export const deleteTopic = (id) => {
  return (
    dispatch => {
      return (TopicApiUtil.deleteTopic(id)
      .then( () => dispatch(removeTopic(id)))
    );
  });
};
