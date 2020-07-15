class AddTagsToComponents < ActiveRecord::Migration[6.0]
  def change
    add_column :components, :tags, :text, array: true, default: []
  end
end
