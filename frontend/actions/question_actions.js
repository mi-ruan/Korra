import * as QuestionApiUtil from '../util/question_api_utils';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const receiveQuestions = payload => {
  return {
    type: RECEIVE_QUESTIONS,
    questions: payload.questions,
    users: payload.users
  };
};

export const receiveQuestion = question => {
  return {
    type: RECEIVE_QUESTION,
    question
  };
};

export const removeQuestion = questionId => {
  return {
    type: REMOVE_QUESTION,
    questionId
  };
};

export const fetchQuestions = () => {
  return (
    dispatch => {
      return (QuestionApiUtil.fetchQuestions()
      .then(questions => dispatch(receiveQuestions(questions)))
    );
  });
};
export const fetchQuestion = (id) => {
  return (
    dispatch => {
      return (QuestionApiUtil.fetchQuestion(id)
      .then(question => dispatch(receiveQuestion(question)))
    );
  });
};
export const createQuestion = (question) => {
  return (
    dispatch => {
      return (QuestionApiUtil.createQuestion(question)
      .then(question => dispatch(receiveQuestion(question)))
    );
  });
};
export const updateQuestion = (question) => {
  return (
    dispatch => {
      return (QuestionApiUtil.updateQuestion(question)
      .then(question => dispatch(receiveQuestions(question)))
    );
  });
};
export const deleteQuestion = (id) => {
  return (
    dispatch => {
      return (QuestionApiUtil.deleteQuestion(id)
      .then( () => dispatch(removeQuestion(id)))
    );
  });
};
