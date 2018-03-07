class Api::SessionsController < ApplicationController
  

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: { errors:['Invalid Credentials']}, status: 403
    end
  end

  def destroy
    logout
    render json: {}
  end


end
