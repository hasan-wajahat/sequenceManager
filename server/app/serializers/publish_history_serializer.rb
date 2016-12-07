class PublishHistorySerializer < ActiveModel::Serializer
  attributes :id, :tasktype, :publisher, :image, :comment
end
