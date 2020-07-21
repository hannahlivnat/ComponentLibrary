class LikeController < ApplicationController
  skip_before_action :verify_authenticity_token

  # ROUTES
  def index
    render json: Like.all
  end

  def show
    render json: Like.find_by(component_id: params["component_id"])
  end

  def new
    @component = Component.find(params["component_id"])
    Like.create(
      count: params["count"],
      component: @component
    )
    render json: Like.all
  end

  def update 
    @like_to_update = Like.find(params["id"])
    @like_to_update.update(
      count: params["count"],
      component: @like_to_update.component
    )
    render json: Like.all
  end

  def destroy
    @like = Like.find(params["id"]);
    @like.destroy
    render json: Like.all
  end
end