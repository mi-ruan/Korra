json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! 'question', question: question
    end
  end
end

json.users do
  working_users = @questions.map(&:user)
  @questions.each do |question|
    working_users.concat(question.answerers)
  end
  working_users.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end
end

json.answers do
  @questions.each do |question|
    question.answers.each do |answer|
      json.set! answer.id do
        json.partial! '/api/answers/answer', answer: answer
      end
    end
  end
end

json.topics do
  @questions.each do |question|
    question.topics.each do |topic|
      json.set! topic.id do
        json.partial! 'api/topics/topic', topic:topic
      end
    end
  end
end 
