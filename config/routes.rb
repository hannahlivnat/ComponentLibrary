Rails.application.routes.draw do
  get '/', to: 'component#index'
  get'/component/:id', to: 'component#show'
  post '/component/', to: 
'component#create'
  put '/component/:id', to: 'component#update'
  delete '/component/:id', to: 'component#destroy'

  get '/user', to: 'user#index'
  get '/user/:username', to: 'user#show'
end
