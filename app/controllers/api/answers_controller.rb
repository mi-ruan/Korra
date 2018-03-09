class Api::AnswersController < ApplicationController

  def create
    @answer = Answer.new(answer_params)
    @answer.user_id = current_user.id
    @answer.question_id = params[:question_id]
    if @answer.save
      render :show
    else
      render 'api/users/show'
    end
  end

  def show
    @answer = Answer.find(params[:id])
  end

  def update
    @answer = current.user.answers.find(params[:id])
    if @answer.update(answer_params)
      render :show
    else
      render 'api/users/show'
    end
  end

  def destroy
    @answer = current_user.answers.find(params[:id])
    if @answer
      Answer.delete(@answer)
      render json: {}
    else
      render json: {}, status: 404
  end

  private

  def answer_params
    params.require(:answer).permit(:body)
  end

end
