class ComponentSerializer < ActiveModel::Serializer
  attributes :id, :image, :description, :code_block, :tags, :public, :user_id
end
