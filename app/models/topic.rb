class Topic < ApplicationRecord
  validates :tag, presence: true, uniqueness: true 

  has_many :taggings, dependent: :destroy
  has_many :questions, through: :taggings

  has_many :answers,
    through: :questions,
    source: :answers

  has_many :answerers,
    through: :questions,
    source: :answerers

end
