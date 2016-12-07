class Short < ApplicationRecord
  belongs_to :sequence
  has_many :publish_histories
end
