class UserController < ApplicationController
  def index
    render json: User.all
  end
  def show
    render json: User.find_by(user_name: params["username"])
  end
  def new
    render json: User.create(
      first_name: params["first_name"], 
      last_name: params["last_name"], 
      image: params["image"], 
      user_name: params["user_name"], 
      password: params["password"], 
    )
  end
  def delete
    render json: User.find(params["id"])
  end
end