Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :create, :show, :update, :destroy] do
      resources :answers, only: :create
      resources :topics, only: :create
      resources :taggings, only: [:create, :destroy]
    end
    resources :answers, only: [:show, :update, :destroy]
    resources :topics, only: [:show, :index, :destroy]
  end

end
