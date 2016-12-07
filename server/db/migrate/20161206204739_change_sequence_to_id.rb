class ChangeSequenceToId < ActiveRecord::Migration[5.0]
  def change
    change_table :shorts do |t|
      t.rename :sequenceSequence, :sequence_id
    end
  end
end
