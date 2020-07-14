#rails prefers plural for the controller
class ComponentController < ApplicationController
  def index
    render json: Component.all
  end
  def show
    render json: Component.find(params["id"])
  end
end
