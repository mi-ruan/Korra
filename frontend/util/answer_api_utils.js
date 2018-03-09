export const fetchAnswer = (id) => {
  return $.ajax({
    url: `api/answers/${id}`,
  });
};

export const createAnswer = (answer, question_id) => {
  return $.ajax({
    url: `api/questions/${question_id}/answers`,
    method: 'POST',
    data: {answer}
  });
};
export const updateAnswer = (answer) => {
  return $.ajax({
    url: `api/answers/${answer.id}`,
    method: 'PATCH',
    data: {answer}
  });
};

export const deleteAnswer = (id) => {
  return $.ajax({
    url: `api/answers/${id}`,
    method: 'DELETE',
  });
};
