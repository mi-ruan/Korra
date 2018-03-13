class Question < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :answers, dependent: :destroy
  has_many :taggings

  has_many :topics, through: :taggings
  has_many :answerers,
    through: :answers,
    source: :user

end
