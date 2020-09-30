class Kanban < ApplicationRecord
  has_many :kanban_columns
  has_many :cards, through: :kanban_columns
end
