class Question < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :answers
  has_many :topics,
    foreign_key: :topic_id,
    primary_key: :id,
    class_name: :taggings

  has_many :answerers,
    through: :answers,
    source: :user

end
