class Perfume < ApplicationRecord
  # Image attachement for the perfume
  has_attached_file :image, styles: { medium: "500x500>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  # Text validations
  validates :name, presence: true
  validates :characteristics, presence: true
  validates :body, presence: true
end
