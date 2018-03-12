export const getSelectedUser = ({entities}, userId) => {
  const nullUser = {
    id: null,
    username: '',
    email: ''
  };
  return entities.users[userId] || nullUser;
};

export const getAnswersByQuestionId = state => {
  const answers = {};
  const questions = Object.values(state.entities.questions);
  questions.forEach((question) => {
    answers[question.id] = question.answerIds.map((id) => {
      return state.entities.answers[id];
    });
  });
  return answers;
};
