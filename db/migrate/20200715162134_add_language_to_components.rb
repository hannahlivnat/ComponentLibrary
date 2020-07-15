class AddLanguageToComponents < ActiveRecord::Migration[6.0]
  def change
    add_column :components, :language, :string
  end
end
