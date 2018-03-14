import * as TaggingApiUtil from '../util/tagging_api_utils';

export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const REMOVE_TAGGING = "REMOVE_TAGGING";

export const receiveTagging = (payload) => {
  return{
    type: RECEIVE_TAGGING,
    questionId: payload.tagging.question_id,
    topicId: payload.tagging.topic_id,
    topic: payload.topic
  };
};

export const removeTagging = (topicId, questionId) => {
  return {
    type: REMOVE_TAGGING,
    topicId,
    questionId
  };
};

export const createTagging = (topic, questionId) => {
  return (
    dispatch => {
      return (TaggingApiUtil.createTagging(topic, questionId)
      .then(tagging => dispatch(receiveTagging(tagging)))
    );
  });
};
export const deleteTagging = (topicId, questionId) => {
  return (
    dispatch => {
      return (TaggingApiUtil.deleteTagging(topicId, questionId)
      .then( () => dispatch(removeTagging(topicId, questionId)))
    );
  });
};
