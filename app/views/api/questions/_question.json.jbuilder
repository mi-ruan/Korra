json.extract! question, :id, :title, :user_id, :updated_at
json.answerIds do
  json.array! question.answers.pluck(:id)
end
