class CreateBoxPerfumeRelationships < ActiveRecord::Migration[5.1]
  def change
    create_table :box_perfume_relationships do |t|
      t.references :perfume, foreign_key: true
      t.references :discovery_box, foreign_key: true

      t.timestamps
    end
  end
end
