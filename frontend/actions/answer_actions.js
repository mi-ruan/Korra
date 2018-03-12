import * as AnswerApiUtil from '../util/answer_api_utils';

export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";

export const receiveAnswer = answer => {
  return {
    type: RECEIVE_ANSWER,
    answer
  };
};

export const removeAnswer = (answerId, questionId) => {
  return {
    type: REMOVE_ANSWER,
    answerId,
    questionId
  };
};

export const fetchAnswer = (id) => {
  return (
    dispatch => {
      return AnswerApiUtil.fetchAnswer(id)
      .then(answer => dispatch(receiveAnswer(answer)));
    }
  );
};

export const createAnswer = (answer, questionId) => {
  return (
    dispatch => {
      return AnswerApiUtil.createAnswer(answer, questionId)
      .then(answer => dispatch(receiveAnswer(answer)));
    }
  );
};

export const updateAnswer = (answer) => {
  return (
    dispatch => {
      return AnswerApiUtil.updateAnswer(answer)
      .then(answer => dispatch(receiveAnswer(answer)));
    }
  );
};

export const deleteAnswer = (id) => {
  return (
    dispatch => {
      return AnswerApiUtil.deleteAnswer(id)
      .then(({questionId}) => dispatch(removeAnswer(id, questionId)));
    }
  );
};
