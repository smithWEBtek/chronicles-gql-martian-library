module Types
  class ItemType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: true
    field :image_url, String, null: true
    field :user, Types::UserType, null: false
    field :category, String, null: true
    field :year, Integer, null: true
  end
end
