class Api::TaggingsController < ApplicationController
  def create
    @taggings = Tagging.new(
      {topic_id: params[:topicId],
      question_id: params[:question_id]})
    if @tagging.save
      render :show
    end
  end

  def destroy
    @tagging = Tagging.find_by({topic_id: params[:id],
    question_id: params[:question_id]})
    if @tagging
      Tagging.delete(@tagging)
    end
  end
end
