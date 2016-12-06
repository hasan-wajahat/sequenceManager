class RemoveSeqColumnInSequence < ActiveRecord::Migration[5.0]
  def change
    change_table :sequences do |t|
      t.remove :seq
    end
  end
end
