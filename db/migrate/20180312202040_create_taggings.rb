class CreateTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :taggings do |t|
      t.integer :question_id, null: false
      t.integer :topic_id, null: false

      t.timestamps
    end
    add_index :taggings, :question_id
    add_index :taggings, :topic_id
  end
end
