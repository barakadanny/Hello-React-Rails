Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'greetings/random', to: 'greetings#random'
    end
  end
  root "root#index"
end
