class ChangeNameForShortsColumn < ActiveRecord::Migration[5.0]
  def change
    change_table :shorts do |t|
      t.rename :name , :shotName
    end
  end
end
