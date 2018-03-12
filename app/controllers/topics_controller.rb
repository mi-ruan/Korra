class TopicsController < ApplicationController
  def index
    @topics = Topic.includes(:questions).all
    render :index
  end

  def create
    @topic = Topic.new(topic_params)
    if @topic.save
      render :show
    else
      render 'api/users/show'
    end
  end

  def show
    @topic = topic.find(params[:id])
    render :show
  end

  def destroy
    @topic = topic.find(params[:id])
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
