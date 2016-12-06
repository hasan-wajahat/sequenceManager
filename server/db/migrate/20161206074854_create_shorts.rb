class CreateShorts < ActiveRecord::Migration[5.0]
  def change
    create_table :shorts do |t|
      t.integer :sequenceSequence
      t.integer :seq
      t.string :shotID
      t.string :name

      t.timestamps
    end
  end
end
