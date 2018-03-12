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

export const createTopic = (topic) => {
  return $.ajax({
    url: 'api/topics',
    method: 'POST',
    data: {topic}
  });
};

export const deleteTopic = (id) => {
  return $.ajax({
    url: `api/topics/${id}`,
    method: 'DELETE'
  });
};
