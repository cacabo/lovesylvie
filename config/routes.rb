Rails.application.routes.draw do
  # general page routes
  root 'welcome#index'
  get '/terms', to: 'welcome#terms_and_conditions', as: 'terms'
  get '/privacy', to: 'welcome#privacy_policy', as: 'privacy'
  get '/perfume', to: 'welcome#perfume', as: 'perfume_overview'

  # routes for posts
  resources :posts

  # routes for discovery boxes
  resources :discovery_boxes, path: '/discovery-box'
  post '/discovery-box/:id/perfumes/:perfume_id', to: 'discovery_boxes#add_perfume', as: 'add_perfume'
  delete '/discovery-box/:id/perfumes/:perfume_id', to: 'discovery_boxes#remove_perfume', as: 'remove_perfume'

  # resources for perfumes
  scope '/admin' do
    resources :perfumes
  end

  # other admin routes
  get '/admin', to: 'admin#panel_home', as: 'panel'
  get '/admin/posts', to: 'admin#manage_posts', as: 'manage_posts'
  get '/admin/users', to: 'admin#manage_users', as: 'manage_users'

  # user show page
  get '/users/:id', to: 'users#show', as: 'user'

  # devise links for users
  devise_for :users, controllers: {registrations: 'registrations'}, path: '', path_names: { sign_in: 'login', sign_out: 'logout', password: 'password', confirmation: 'verification', unlock: 'unblock', registration: 'register', sign_up: '' }

  # contact form
  resources :contacts, only: [:new, :create]

  # unique registration links
  devise_scope :user do
    get 'register/:id', to: 'registrations#new', as: 'new_referral'
    post 'register/:id', to: 'registrations#create', as: 'create_referral'
  end

  # 404 error
  get '*unmatched_route', to: 'welcome#not_found', as: 'not_found'
end
