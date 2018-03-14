export const createTagging = (topicId, questionId) => {
  return $.ajax({
    url: `api/questions/${questionId}/taggings`,
    method: 'POST',
    data: {topicId}
  });
};

export const deleteTagging = (topicId, questionId) => {
  return $.ajax({
    url: `api/questions/${questionId}/taggings/${topicId}`,
    method: 'DELETE'
  });
};
