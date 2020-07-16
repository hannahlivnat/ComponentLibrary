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
  def new
    user = User.find_by(user_name: 'testuser')
    Component.create(
      image: params["image"], 
      title: params["title"], 
      description: params["description"], 
      code_block: params["code_block"], 
      tags: params["tags"], 
      public: params["public"], 
      user: params["user"]
    )
    render json: Component.all
  end
  def destroy
    component = Component.find(params["id"]);
    component.destroy
    render json: Component.all
  end
  def update
    component_to_update = Component.find(params["id"])
    component_to_update.update(
      image: params["image"], 
      title: params["title"], 
      description: params["description"], 
      code_block: params["code_block"], 
      tags: params["tags"], 
      public: params["public"], 
      user: component_to_update.user
    )

    render json: Component.all
  end
end
