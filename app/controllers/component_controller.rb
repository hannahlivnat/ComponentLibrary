#rails prefers plural for the controller
class ComponentController < ApplicationController
  def index
    render json: Component.all
  end
end
