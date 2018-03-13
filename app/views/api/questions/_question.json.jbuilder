json.extract! question, :id, :title, :user_id, :updated_at
json.answerIds do
  json.array! question.answers.pluck(:id)
end
json.topicIds do
  json.array! question.topics.pluck(:id)
end 
