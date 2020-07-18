class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :user_name, :password_digest

  has_many :components
end
