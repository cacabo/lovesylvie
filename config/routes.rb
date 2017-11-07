Rails.application.routes.draw do
  # general page routes
  root 'welcome#index'
  get '/terms', to: 'welcome#terms_and_conditions', as: 'terms'
  get '/privacy', to: 'welcome#privacy_policy', as: 'privacy'
  get '/perfume', to: 'welcome#perfume', as: 'perfume'

  # routes for posts
  resources :posts

  # user show page
  get '/users/:id', to: 'users#show', as: 'user'

  # devise links for users
  devise_for :users, controllers: {registrations: 'registrations'}, path: '', path_names: { sign_in: 'login', sign_out: 'logout', password: 'password', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: '' }

  # unique registration links
  devise_scope :user do
    get 'register/:id', to: 'registrations#new', as: 'new_referral'
    post 'register/:id', to: 'registrations#create', as: 'create_referral'
  end
end
