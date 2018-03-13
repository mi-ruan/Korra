class Api::TopicsController < ApplicationController
  def index
    @topics = Topic.includes(:questions).all
    render :index
  end

  def create
    @topic = Topic.new(topic_params)
    if @topic.save
      @tagging = Tagging.create({topic_id: @topic.id, question_id: params[:question_id]})
      render :show
    else
      render 'api/users/show'
    end
  end

  def show
    @topic = Topic.find(params[:id])
    render :show
  end

  def destroy
    @topic = Topic.find(params[:id])
    if @topic
      Topic.delete(@topic)
      render json: {}
    else
      render json: {}, status: 404
    end
  end



  private

  def topic_params
    params.require(:topic).permit(:tag)
  end
end
