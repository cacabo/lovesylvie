source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.4'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'loofah',  '~> 2.2.1'

# For the mailer
gem 'mail_form', '~> 1.7'

# For user models
gem 'devise', '~> 4.2'

# For WYSIWYG article forms
gem 'ckeditor', '~> 4.2'

# For image uploading
gem 'paperclip', '~> 5.2', '>= 5.2.1'

# For saving images to aws
gem 'aws-sdk', '~> 2.3.0'

# Development DB
group :development, :test do
    gem 'sqlite3', '~> 1.3', '>= 1.3.11'
end

# Deployment DB
group :production do
    gem 'pg', '~> 0.21.0'
end

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring', '~> 2.0', '>= 2.0.2'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
