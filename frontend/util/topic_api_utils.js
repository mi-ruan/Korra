export const fetchTopics = () => {
  return $.ajax({
    url: 'api/topics'
  });
};

export const fetchTopic = (id) => {
  return $.ajax({
    url: `api/topics/${id}`
  });
};

export const createTopic = (tag, questionId) => {
  return $.ajax({
    url: `api/questions/${questionId}/topics`,
    method: 'POST',
    data: {topic: {tag}}
  });
};

export const deleteTopic = (id) => {
  return $.ajax({
    url: `api/topics/${id}`,
    method: 'DELETE'
  });
};
