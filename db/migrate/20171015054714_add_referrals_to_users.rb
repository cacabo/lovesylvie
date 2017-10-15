class AddReferralsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :referrals, :integer, default: 0
  end
end
