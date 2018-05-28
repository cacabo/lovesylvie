class ReferralNotifierMailer < ApplicationMailer
  default from: 'info@lovesylvie.com'

  def send_referral_email(user, email)
    @user = user
    mail(to: email, subject: 'Thanks for signing up for our amazing app')
  end
end
