json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! 'question' question: question
    end
  end
end

json.users do
  @users.map(&:user).each do |user|
    json.set! user_id do
      json.partial! '/api/users/user' user: user
    end
  end
end 
