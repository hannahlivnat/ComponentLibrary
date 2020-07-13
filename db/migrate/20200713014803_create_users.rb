class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :user_name
      t.string :password
      t.string :image

      t.timestamps
    end
  end
end

#NOTE : NEVER CHANGE A MIGRATION AFTER YOU'VE MIGRATED. 