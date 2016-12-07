class ShortSerializer < ActiveModel::Serializer
  attributes :shotID, :shotName
  belongs_to :sequence
end
