json.topic do
  json.partial! 'api/topics/topic', topic: @topic
end

json.questions do
  @topic.questions.each do |question|
    json.set! question.id do
      json.partial! 'api/questions/question', question: question
    end
  end
end

json.answers do
  @topic.answers.each do |answer|
    json.set! answer.id do
      json.partial! 'api/answers/answer', answer: answer
    end
  end
end

json.users do
  @topic.answerers.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
  @topic.questions.each do |question|
    json.set! question.user_id do
      json.partial! 'api/users/user', user: question.user
    end
  end
end
