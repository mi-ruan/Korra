json.question do
  json.partial! 'api/questions/question', question: @question
end
json.answers do
  @question.answers.each do |answer|
    json.set! answer.id do
      json.partial! 'api/answers/answer', answer: answer
    end
  end
end

json.users do
  @question.answerers.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user:user
    end
  end
end

json.topics do
  @question.topics.each do |topic|
    json.set! topic.id do
      json.partial! 'api/topics/topic', topic: topic
    end
  end
end  
