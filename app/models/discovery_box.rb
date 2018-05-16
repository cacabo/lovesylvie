class DiscoveryBox < ApplicationRecord
  belongs_to :user
  has_many :perfumes, as: :perfumes
end
