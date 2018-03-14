export const createTagging = (topic, questionId) => {
  return $.ajax({
    url: `api/questions/${questionId}/taggings`,
    method: 'POST',
    data: {topic}
  });
};

export const deleteTagging = (topicId, questionId) => {
  return $.ajax({
    url: `api/questions/${questionId}/taggings/${topicId}`,
    method: 'DELETE'
  });
};
