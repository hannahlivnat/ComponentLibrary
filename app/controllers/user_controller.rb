class UserController < ApplicationController
  skip_before_action :verify_authenticity_token

  # ROUTES
  def index
    render json: User.all
  end
  def show
    render json: User.find_by(user_name: params[:user]["username"])
  end
  def new
    @user = User.new(
      first_name: params["first_name"],
      last_name: params["last_name"],
      user_name: params["user_name"],
      password: params["password"],
      password_confirmation: params["password_confirmation"]

    )

    if @user.save
      render json: @user
    else 
      render json: { :errors => @user.errors.full_messages }, :status => 422
    end

  end

  def validate
    @logging_in_user = User.find_by(user_name: params["user_name"])
      if @logging_in_user.authenticate(params[:user]["password_digest"])
        render json: @logging_in_user
      else    
        render json: { messages: ["Username or Password is Incorrect"]}, :status => 422
    end
  end

  def destroy
    user_to_destroy = User.find(params["id"])
    user_to_destroy.destroy
    render json: "User Deleted"
  end

  def update 
    user_to_update = User.find(params["id"])
    user_to_update.update(
      first_name: params["first_name"], 
      last_name: params["last_name"], 
      user_name: params["user_name"], 
      password: params["password"], 
    )

    render json: User.find_by(user_name: params["user_name"] )
  end

  private 

  def get_user
    @user = User.find(params[:id])
  end

end