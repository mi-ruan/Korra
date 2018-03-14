class Api::TaggingsController < ApplicationController
  def create
    @topic = Topic.find_or_create_by({tag: params[:topic]})
    @tagging = @topic.taggings.new(
      {question_id: params[:question_id]})
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages
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
