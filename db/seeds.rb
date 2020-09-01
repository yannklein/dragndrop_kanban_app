# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Kanban.destroy_all

my_cards = {
  columns: [
    {
      name: "Backlog",
      items: [
          "Build engine",
          "Purchase the tires",
          "Code the cockpit software"
        ]
    },
    {
      name: "To Do",
      items:[
          "Design the car"
        ]
    },
    {
      name: "Completed",
      items: [
          "Build the engineer team",
          "Find fundings"
        ]
    }
  ]
}

Kanban.create(
  name: "New Lamborgucci project",
  description: "Project to build the most esthetically car ever made.",
  cards: my_cards
);










