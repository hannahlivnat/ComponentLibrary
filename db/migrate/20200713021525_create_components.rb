class CreateComponents < ActiveRecord::Migration[6.0]
  def change
    create_table :components do |t|
      t.string :title
      t.text :description
      t.string :image
      t.string :code_block
      t.text :tags, array: true, default: []
      t.boolean :public
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
