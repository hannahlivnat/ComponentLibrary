#rails prefers plural for the controller
class ComponentController < ApplicationController
  skip_before_action :verify_authenticity_token

  # ROUTES
  def index
    render json: Component.all
  end
  def show
    render json: Component.find(params["id"])
  end
  # new does not work
  def new
    user = User.find_by(user_name: 'testuser')
    render json: Component.create(
      image: params["image"], 
      title: params["title"], 
      description: params["description"], 
      code_block: params["code_block"], 
      tags: params["tags"], 
      public: params["public"], 
      user: user
    )
  end
  def update
  end
end
