json.extract! question, :id, :title, :user_id, :updated_at
json.answers question.answers do |answer|
  json.id answer.id
end
