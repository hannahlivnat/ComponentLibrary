Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  #index route
  get '/', to: 'home#index'
  #API 
  # component routes
  get '/component', to: 'component#index'
  get '/component/tags', to: 'component#frequenttags'
  get'/component/:id', to: 'component#show'
  post '/component/', to: 'component#new'
  put '/component/:id', to: 'component#update'
  delete '/component/:id', to: 'component#destroy'

  # like routes
  get '/tag', to: 'tag#index'
  post '/tag', to: 'tag#new'
  put '/put/:id', to: 'component#update'
 

  # user routes
  get '/user', to: 'user#index'
  get '/user/:username', to: 'user#show'
  post '/user/validate', to: 'user#validate'
  post '/user', to: 'user#new'
  delete '/user/:id', to: 'user#destroy'
  put '/user/:id', to: 'user#update'

  get "*path" => redirect("/")

end
