class RegistrationsController < Devise::RegistrationsController
  def new
    if params[:id]
      if User.exists?(params[:id])
        @user = User.find(params[:id])
        super
      else
        redirect_to new_user_registration_path
      end
    else
      super
    end
  end

  def create
    if params[:id]
      if User.exists?(params[:id])
        @user = User.find(params[:id])
        @user = User.find(params[:id])
        @user.referrals += 1
        @user.save
        super
      else
        redirect_to new_user_registration_path
      end
    else
      super
    end
  end

  def update
    super
  end
end
