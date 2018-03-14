class AddCompoundIndex < ActiveRecord::Migration[5.1]
  def change
    add_index :taggings, [:question_id, :topic_id], unique: true
  end
end
