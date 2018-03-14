json.tagging do
  json.question_id @tagging.question_id
  json.topic_id @tagging.topic_id
end

json.topic do
  json.partial! 'api/topics/topic', topic: @topic
end
