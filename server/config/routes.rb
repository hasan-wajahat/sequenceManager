Rails.application.routes.draw do
  devise_for :users
  post 'auth_user' => 'authentication#authenticate_user'
  resources :sequences do
    resources :shorts
  end

  resources :shorts do
    resources :publish_histories
  end
  resources :publish_histories
end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html