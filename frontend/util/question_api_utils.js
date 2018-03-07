export const fetchQuestions = () => {
  return $.ajax({
    url: 'api/questions'
  });
};

export const fetchQuestion = (id) => {
  return $.ajax({
    url: `api/questions/${id}`,
  });
};

export const createQuestion = (question) => {
  return $.ajax({
    url: 'api/questions',
    method: 'POST',
    data: { question }
  });
};

export const updateQuestion = (question) => {
  return $.ajax({
    url: `api/questions/${question.id}`,
    method: 'PATCH',
    data: { question }
  });
};

export const deleteQuestion = (id) => {
  return $.ajax({
    url: `api/questions/${id}`,
    method: 'DELETE'
  });
};
