class Api::QuestionsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    @questions = Question.includes(:answers, :answerers).all.order(updated_at: :desc)
    render :index
  end

  def create
    @question = Question.new(question_params)
    @question.user_id = current_user.id
    if @question.save
      render :show
    else
      render json: {errors: @question.errors.full_messages}, status: 401
    end
  end

  def show
    @question = Question.find(params[:id])
    render :show
  end

  def update
    @question = current_user.questions.find(params[:id])
    if @question.update(question_params)
      render :show
    else
      render json: {errors: @question.errors.full_messages}, status: 401
    end
  end

  def destroy
    @question = current_user.questions.find(params[:id])
    if @question
      Question.delete(@question)
      render json: {}
    else
      render json: {}, status: 404
    end
  end

  private

  def question_params
    params.require(:question).permit(:title)
  end
end
