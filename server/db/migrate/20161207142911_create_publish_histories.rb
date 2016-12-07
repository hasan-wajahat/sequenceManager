class CreatePublishHistories < ActiveRecord::Migration[5.0]
  def change
    create_table :publish_histories do |t|
      t.references :short
      t.integer :tasktype
      t.string :publisher
      t.string :image
      t.string :comment

      t.timestamps
    end
  end
end
