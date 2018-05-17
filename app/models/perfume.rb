class Perfume < ApplicationRecord
  # Image attachement for the perfume
  has_attached_file :image, styles: { medium: "500x500>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  # Text validations
  validates :name, presence: true
  validates :characteristics, presence: true
  validates :body, presence: true

  # Relationship to users
  has_many :box_perfume_relationships, dependent: :destroy
  has_many :users, through: :box_perfume_relationships
end
