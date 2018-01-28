class Post < ApplicationRecord
    validates :title, presence: true, length: { minimum: 5 }
    validates :text, presence: true, length: { minimum: 10 }
    belongs_to :user

    has_attached_file :image, styles: { large: "1200x1200>", medium: "300x300>" }, default_url: "/images/:style/missing.png"
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
