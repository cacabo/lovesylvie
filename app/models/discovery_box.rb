class DiscoveryBox < ApplicationRecord
  belongs_to :user

  # Set up relationship with perfumes
  has_many :box_perfume_relationships, dependent: :destroy
  has_many :perfumes, through: :box_perfume_relationships
end
