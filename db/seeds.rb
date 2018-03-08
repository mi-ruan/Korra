# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

questions = Question.create([
  { title: 'How is Korra made?', user_id: 2 },
  { title: 'Why is faker so good?', user_id: 1},
  { title: 'Why is CSS so difficult?', user_id: 2}
  ])
