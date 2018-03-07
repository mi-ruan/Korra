Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

<<<<<<< HEAD
=======
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
>>>>>>> a6281fa52fc102f3d932dfe9a2acb10af201e194
end
