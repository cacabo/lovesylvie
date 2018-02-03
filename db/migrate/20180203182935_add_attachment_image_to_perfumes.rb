class AddAttachmentImageToPerfumes < ActiveRecord::Migration[4.2]
  def self.up
    add_attachment :perfumes, :image
  end

  def self.down
    remove_attachment :perfumes, :image
  end
end
