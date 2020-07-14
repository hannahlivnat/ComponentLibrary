class UserController < ApplicationController
  def index
    render json: User.all
  end
  def show
    render json: User.find_by(user_name: params["username"])
  end
end