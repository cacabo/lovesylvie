Rails.application.routes.draw do
  root 'welcome#index'

  # get '/register/:id', to: 'registrations#new', as: 'referral'
  get '/users/:id', to: 'users#show', as: 'user'

  devise_for :users, controllers: {registrations: 'registrations'}, path: '', path_names: { sign_in: 'login', sign_out: 'logout', password: 'password', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: '' }

  devise_scope :user do
    get 'register/:id', to: 'registrations#new', as: 'new_referral'
    post 'register/:id', to: 'registrations#create', as: 'create_referral'
  end
end
