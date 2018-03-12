class Topic < ApplicationRecord
  validates :tags, presence: true

  has_many :questions,
    foreign_key: :question_id,
    primary_key: :id,
    class_name: :taggings

  has_many :answers,
    through: :questions,
    source: :answers

  has_many :answerers,
    though: :questions,
    source: :answerers

end
