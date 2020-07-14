class ComponentSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :description, :code_block, :tags, :public, :user_id
end
