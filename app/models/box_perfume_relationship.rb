class BoxPerfumeRelationship < ApplicationRecord
  belongs_to :perfume
  belongs_to :discovery_box
end
