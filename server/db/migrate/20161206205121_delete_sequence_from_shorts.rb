class DeleteSequenceFromShorts < ActiveRecord::Migration[5.0]
  def change
    change_table :shorts do |t|
      t.remove :seq
    end
  end
end
