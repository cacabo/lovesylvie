class Contact < MailForm::Base
  # Validations
  attribute :name,     validate: true
  attribute :email,    validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,  validate: true
  attribute :nickname, captcha: true

  def headers
    {
      subject: "Contact form",
      to: "cameroncabo@outlook.com",
      from: %("#{name}" <#{email}>)
    }
  end
end
