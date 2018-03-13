class Topic < ApplicationRecord
  validates :tags, presence: true

  has_many :questions, through: :taggings
  has_many :taggings

  has_many :answers,
    through: :questions,
    source: :answers

  has_many :answerers,
    through: :questions,
    source: :answerers

end
