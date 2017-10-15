class RegistrationsController < Devise::RegistrationsController
  def new
    if params[:id]
      puts "ID: " + params[:id]
      @user = User.find(params[:id])
    end
    super
  end

  def create
    if params[:id]
      @user = User.find(params(:id))
      @user.referrals ++
      @user.save
    end
    super
  end

  def update
    super
  end
end
