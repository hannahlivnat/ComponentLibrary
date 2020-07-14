class UserController < ApplicationController
  skip_before_action :verify_authenticity_token
  # ROUTES
  def index
    render json: User.all
  end
  def show
    render json: User.find_by(user_name: params["username"])
  end
  #new does not work
  def new
    #test whether user is valid first with .valid?
    render json: User.create(
      first_name: params["first_name"], 
      last_name: params["last_name"], 
      image: params["image"], 
      user_name: params["user_name"], 
      password: params["password"], 
    )
  end

  #need to create logout and login route with authentication to 
  #assign current_user to state
  #def login
  #  logging_in_user = User.find_by(user_name: params["user_name"])
  #  logging_in_user.authenticate

  #  #would true work if it returns an object
  #  if(true)
  #    current_user = logging_in_user
  #  else 
  #    puts "Your username or password is not correct"
  #end

  #def logout  
  #  current_user = nil
  #end
end