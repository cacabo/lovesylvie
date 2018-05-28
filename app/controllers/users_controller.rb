class UsersController < ApplicationController
  # Render a user's information
  def show
    @user = User.find(params[:id])

    # If the user is not logged in, they cannot see their profile page
    # Flash an error and redirect them to home
    if (not current_user) or (current_user != @user) or (not current_user.isAdmin)
      flash[:alert] = "You do not have permissions to view this user's info"
      redirect_to root_path
    else
      @url = request.url[0, request.url.index("/users")] + '/register/' + current_user.id.to_s
      @text = URI.escape("Sign up for Love, Sylvie with my unique link:", Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
      @encoded = URI.escape(@url, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
    end
  end

  def refer
    @user = User.find(params[:id])
    ReferralNotifierMailer.send_referral_email(@user, 'ccabo@seas.upenn.edu').deliver
    flash[:notice] = "Referrals sent successfully"
    redirect_to @user
  end
end
