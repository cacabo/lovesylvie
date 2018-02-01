class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if not @contact.deliver
      flash[:error] = "Failed to send message"
      render :new
    end
  end
end
