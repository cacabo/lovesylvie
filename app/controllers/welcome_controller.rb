class WelcomeController < ApplicationController
  def index
    if (current_user.present?)
      @url = request.original_url + 'register/' + current_user.id.to_s
      @encoded = URI.escape(@url, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
    end
  end
end
