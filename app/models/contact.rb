class Contact < MailForm::Base
  # Validations
  attribute :name,     validate: true
  attribute :email,    validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,  validate: true
  attribute :nickname, captcha: true

  # Define the parameters for the email to be sent
  def headers
    {
      subject: "Inquiry about Love Sylvie",
      to: "cameron.cabo@outlook.com",
      from: %("#{name}" <#{email}>)
    }
  end
end
