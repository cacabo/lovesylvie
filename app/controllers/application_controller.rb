class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  protected

  # After the user signs in, redirect them to their account
  def after_sign_in_path_for(resource)
    current_user
  end

  # After the user regsiters, redirect them to their account
  def after_sign_in_path_for(resource)
    current_user
  end
end
