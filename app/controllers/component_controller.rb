#rails prefers plural for the controller
class ComponentController < ApplicationController
  def index
    render json: Component.all
  end
  def show
    render json: Component.find(params["id"])
  end
  def create
    render json: Component.create(
      image: params["image"], 
      title: params["title"], 
      description: params["description"], 
      code_bock: params["code_block"], 
      tags: params["tags"], 
      public: params["public"], 
      user: params["user_id"]
    )
  end
  def update
    render json: Component.upd
end
