class Question < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :answers

  has_many :answerers,
    through: :answers,
    source: :user


end
