json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! 'question', question: question
    end
  end
end

json.users do
  @questions.map(&:user).each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end
end

json.answers do
  @questions.each do |question|
    next if question.answers.length < 1
    json.set! question.answers.last.id do
      json.partial! 'api/answers/answer', answer: question.answers.last
    end
  end
end
