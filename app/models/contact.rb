class Contact < ApplicationRecord
  validates :name, :phone, :email, :comment, presence: true
end
