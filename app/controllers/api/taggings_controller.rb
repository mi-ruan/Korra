class Api::TaggingsController < ApplicationController
  def create
    @taggings = Tagging.create(
      topic_id: params[:topic][:id],
      question_id: params[:question_id])
  end

  def destroy
    Tagging.destroy(topic_id: params[:id],
    question_id: params[:question_id])
  end

end
