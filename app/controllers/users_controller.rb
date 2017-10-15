class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    if (not current_user) or (current_user != @user)
      flash[:alert] = "You do not have permissions to view this user's info"
      redirect_to root_path
    end
  end
end
