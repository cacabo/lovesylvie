Rails.application.routes.draw do
  root 'welcome#index'

  get '/users/:id', to: 'users#show', as: 'user'

  get '/users/:id/register', to: 'registrations#new', as: 'referral'

  devise_for :users, controllers: {registrations: 'registrations'}, path: '', path_names: { sign_in: 'login', sign_out: 'logout', password: 'password', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: '' }
end
