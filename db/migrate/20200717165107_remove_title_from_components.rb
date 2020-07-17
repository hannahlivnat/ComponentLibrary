class RemoveTitleFromComponents < ActiveRecord::Migration[6.0]
  def change
    remove_column :components, :title
  end
end
