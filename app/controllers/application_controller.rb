class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
<<<<<<< HEAD
=======

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    current_user = user
    session[:session_token] = current_user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

>>>>>>> a6281fa52fc102f3d932dfe9a2acb10af201e194
end
