class CreateSequences < ActiveRecord::Migration[5.0]
  def change
    create_table :sequences do |t|
      t.integer :seq
      t.string :seqID
      t.string :name

      t.timestamps
    end
  end
end
12