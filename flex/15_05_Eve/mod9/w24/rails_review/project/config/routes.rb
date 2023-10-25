Rails.application.routes.draw do
  resources :publishers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :authors

  resources :authors, only: [:show, :index]
  resources :authors, except: [:edit, :update, :show]

  resources :books

  get 'profile', to: 'users#show'

  # get 'profile', action: show, controller: 'users'
end
