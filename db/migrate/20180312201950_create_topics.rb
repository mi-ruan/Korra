class CreateTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :topics do |t|
      t.string :tag, null: false

      t.timestamps
    end
  end
end
