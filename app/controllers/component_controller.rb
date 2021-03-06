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
    user = User.find(params["user_id"])
    Component.create(
      image: params["image"], 
      description: params["description"], 
      code_block: params["code_block"], 
      language: params["language"],
      tags: params["tags"], 
      public: params["public"], 
      user: user
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
      description: params["description"], 
      code_block: params["code_block"], 
      language: params["language"],
      tags: params["tags"], 
      public: params["public"], 
      user: component_to_update.user
    )

    render json: Component.all
  end
  def frequenttags
    tags_hash = {};
    components = Component.all
    components.map { |component|
      component.tags.map { |tag|
        #if tag is not in array, add tag and count 1
        if tags_hash.has_key? :"#{tag}" 
          tags_hash[:"#{tag}"] = tags_hash[:"#{tag}"] + 1
        #if tag is already in, add to count
        else
          tags_hash[:"#{tag}"] = 1
        end
      }
    }
  render json: tags_hash
  end

end
