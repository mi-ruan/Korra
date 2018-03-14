class Tagging < ApplicationRecord
  validates :question, uniqueness: {scope: :topic}

  belongs_to :question
  belongs_to :topic

end
