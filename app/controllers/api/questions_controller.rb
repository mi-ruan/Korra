class Api::QuestionsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    @questions = Question.all
    render :index
  end

  def create
    @question = Question.new(question_params)
    @question.user_id = current_user.id
    if @question.save
      render :show
    else
      render 'api/users/show'
    end
  end

  def show
    @question = Question.find(params[:id])
  end

  def update
    @question = current_user.questions.find(params[:id])
    if @question.update(question_params)
      render :show
    else
      render 'api/users/show'
    end
  end

  def destroy
    @question = current_user.questions.find(params[:id])
    if @question
      Question.delete(@question)
      render 'api/users/show'
    else
      render :show
    end
  end

  private

  def question_params
    params.require(:question).permit(:title)
  end
end