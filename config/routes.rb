Rails.application.routes.draw do
  root 'welcome#index'

  devise_for :users, controllers: { sessions: 'admins/sessions' }, path: '', path_names: { sign_in: 'login', sign_out: 'logout', password: 'password', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: '' }
end
