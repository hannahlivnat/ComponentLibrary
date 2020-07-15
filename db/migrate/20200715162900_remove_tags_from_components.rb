class RemoveTagsFromComponents < ActiveRecord::Migration[6.0]
  def change
    remove_column :components, :tags, :text
  end
end
