Rails.application.routes.draw do

  #index route
  get '/', to: 'home#index'
  #API 
  # component routes
  get '/component', to: 'component#index'
  get'/component/:id', to: 'component#show'
  post '/component/', to: 'component#new'
  put '/component/:id', to: 'component#update'
  delete '/component/:id', to: 'component#destroy'

  # user routes
  get '/user', to: 'user#index'
  get '/user/:username', to: 'user#show'
  post '/user', to: 'user#new'
  delete '/user/:id', to: 'user#destroy'
  put '/user/:id', to: 'user#update'
end
