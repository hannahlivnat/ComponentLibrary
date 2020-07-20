class Component < ApplicationRecord
  has_one :likes
  belongs_to :user
end
