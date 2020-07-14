Rails.application.routes.draw do
  get '/', to: 'component#index'
  get'/component/:id', to: 'component#show'
end
