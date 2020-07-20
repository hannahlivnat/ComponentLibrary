class LikeController < ApplicationController
  skip_before_action :verify_authenticity_token

  # ROUTES
  def index
    render json: Like.all
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
  end
end