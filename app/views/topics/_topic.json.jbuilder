json.extract! topic, :id, :tag
json.questionIds do
  json.array! topic.questions.pluck(:id)
end 
