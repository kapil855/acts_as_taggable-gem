Rails.application.routes.draw do
  root 'developers#new'
  resources :developers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
