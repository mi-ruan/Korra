# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.delete_all
  Question.delete_all
  Answer.delete_all
  Topic.delete_all
  Tagging.delete_all

  user1 = User.create!(username: 'demo', password: '123456', email: 'demo')
  user2 = User.create!(username: 'Aang', password: 'starwars', email: 'aang@avatar.com')
  user3 = User.create!(username: 'Luke', password: 'starwars', email: 'luke@skywalker.com')
  user4 = User.create!(username: 'Frodo', password: 'starwars', email: 'frogo@baggins.com')
  user5 = User.create!(username: 'Mike', password: 'starwars', email: 'michael@gmail.com')

  q1 = Question.create!(title: 'What is an Endurance?', user: user2)
  q2 = Question.create!(title: 'What is the Corusca Circus?', user: user4)
  q3 = Question.create!(title: 'Who is Chantu Solk from Star Wars?', user: user2)
  q4 = Question.create!(title: 'What is React', user: user3)
  q5 = Question.create!(title: 'What is JSX?', user: user4)
  q6 = Question.create!(title: 'What is the significance of Store in Redux?', user: user4)
  q7 = Question.create!(title: 'Where is Mount Shadbolt?', user: user3)
  q8 = Question.create!(title: 'What is a coral disease?', user: user2)
  q9 = Question.create!(title: 'What is a Pullman automobile?', user: user2)
  q10 = Question.create!(title: 'Who is the last airbender?', user: user3)
  q11 = Question.create!(title: 'Why is CSS so fun?', user: user4)
  q12 = Question.create!(title: 'How to make a clone of Korra?', user: user1)
  q13 = Question.create!(title: 'What is the Misty Mountain', user: user3)
  q14 = Question.create!(title: 'Where is Ithilien in Lord of the Rings?', user: user5)
  q15 = Question.create!(title: 'Who is Landroval in Lord of the Rings?', user: user2)


  a1 = Answer.create!(user: user3, question: q1, body:'The Endurance was a Venator-class Star Destroyer and the flagship of Republic Admiral Kilian during the Clone Wars. It later crashed on Vanqor following crippling sabotage perpetrated by the young Boba Fett, in an attempt to kill the on-board Jedi Mace Windu. Windu and Anakin Skywalker were trapped in its wreckage until R2-D2 returned to Coruscant and requested aid.' )
  a2 = Answer.create!(user: user3, question: q2, body: 'The Corusca Circus was an accumulation of public buildings located at the heart of the city of Coruscant.')
  a3 = Answer.create!(user: user3, question: q3, body: 'Chantu Solk was an old acquaintance of Lando Calrissian. He was a shrewd starship broker who made his fortune during the Galactic Civil War, playing both sides when necessary, but favoring the Rebel Alliance.')
  a4 = Answer.create!(user: user5, question: q4, body: 'React is a front end JavaScript library developed by Facebook in 2011. It uses the component based approach which allows the reusabililty of UI components. It allows for the development of complex and interactive web and mobile UI. It was open-sourced in 2015 and it has one of the largest communities supporting it.')
  a5 = Answer.create!(user: user5, question: q5, body: 'JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML-like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance.')
  a6 = Answer.create!(user: user5, question: q6, body: 'A store is a JavaScript object which can hold the application’s state and provide a few helper methods to access the state, dispatch actions and register listeners like middleware. The entire state of an application is saved in a single store. As a result, Redux is very simple and predictable. We can pass middleware to the store to handle processing of data as well as to keep a log of various actions that change the state of stores. All the actions return a new state via reducers.')
  a7 = Answer.create!(user: user2, question: q7, body: 'It is a mountain in New Zealand.')
  a8 = Answer.create!(user: user4, question: q8, body: 'Corals live within a precise range of environmental conditions including water temperature, salinity and water quality. Variations outside the normal range of these parameters may make the corals less able to grow and reproduce successfully. Of themselves these variations may be insufficient to kill the corals, but they make them more susceptible to disease organisms. The main factor that causes stress to the corals is climate change, with an increase in sea temperatures, particularly affecting shallow-water corals in the tropics. One of the consequences of heat stress is that the coral expels its zooxanthellaeand becomes bleached. The rise in sea temperature is also expected to increase the frequency and severity of tropical storms; these adversely affect corals through mechanical damage to reefs, through increased wave action, and through the stirring up and re-deposition of sediment.')
  a9 = Answer.create!(user: user2, question: q9, body: 'The Pullman was an American automobile manufactured in York, Pennsylvania by the York Motor Car Company from 1905 to 1917. Total production is estimated at anywhere from 12,000 to 23,000 cars. The Pullman automobile was named by industrialist A. P. Broomell to reflect the quality and luxury of rail cars and coaches made by the Pullman Company, but the two organizations were not related.')
  a10 = Answer.create!(user: user4, question: q13, body: 'The Misty Mountains was a mountain range that ran 1280 kilometres (795.35 miles) from north to south between Eriador and the valley of the Great River, Anduin, and from Mount Gundabad in the far north to Methedras in the south.')
  a11 = Answer.create!(user: user4, question: q14, body: 'Ithilien was a region and fiefdom of Gondor bordering Mordor in eastern Middle-earth.Ithilien, or Moon-land, was the easternmost province of Gondor, the only part of Gondor across the Great River Anduin lying between the river and the Ephel Dúath, subdivided by the stream of Morgulduin into North and South Ithilien.')
  a12 = Answer.create!(user: user4, question: q15, body: 'Landroval was one of the Great Eagles of Middle-earth and the brother of Gwaihir the Windlord.')

  t1 = Topic.create!(tag: 'Star Wars')
  t2 = Topic.create!(tag: 'movies')
  t3 = Topic.create!(tag: 'coding')
  t4 = Topic.create!(tag: 'programing')
  t5 = Topic.create!(tag: 'JavaScript')
  t6 = Topic.create!(tag: 'React')
  t7 = Topic.create!(tag: 'Redux')
  t8 = Topic.create!(tag: 'frontend')
  t9 = Topic.create!(tag: 'store')
  t10 = Topic.create!(tag: 'geography')
  t11 = Topic.create!(tag: 'history')
  t12 = Topic.create!(tag: 'automobile')
  t13 = Topic.create!(tag: 'cars')
  t14 = Topic.create!(tag: 'nature')
  t15 = Topic.create!(tag: 'coral')
  t16 = Topic.create!(tag: 'science')
  t17 = Topic.create!(tag: 'Avatar')
  t18 = Topic.create!(tag: 'cartoon')
  t19 = Topic.create!(tag: 'CSS')
  t20 = Topic.create!(tag: 'clone')
  t21 = Topic.create!(tag: 'Fullstack')
  t22 = Topic.create!(tag: 'Lord of the Rings')

  tagging1 = Tagging.create!(question: q1, topic: t1)
  tagging2 = Tagging.create!(question: q1, topic: t2)
  tagging3 = Tagging.create!(question: q2, topic: t1)
  tagging4 = Tagging.create!(question: q2, topic: t2)
  tagging5 = Tagging.create!(question: q3, topic: t1)
  tagging6 = Tagging.create!(question: q3, topic: t2)
  tagging7 = Tagging.create!(question: q4, topic: t3)
  tagging8 = Tagging.create!(question: q4, topic: t4)
  tagging10 = Tagging.create!(question: q4, topic: t5)
  tagging11 = Tagging.create!(question: q4, topic: t6)
  tagging12 = Tagging.create!(question: q4, topic: t8)
  tagging13 = Tagging.create!(question: q5, topic: t3)
  tagging14 = Tagging.create!(question: q5, topic: t4)
  tagging15 = Tagging.create!(question: q5, topic: t5)
  tagging16 = Tagging.create!(question: q5, topic: t6)
  tagging17 = Tagging.create!(question: q5, topic: t8)
  tagging18 = Tagging.create!(question: q6, topic: t3)
  tagging19 = Tagging.create!(question: q6, topic: t4)
  tagging20 = Tagging.create!(question: q6, topic: t5)
  tagging21 = Tagging.create!(question: q6, topic: t6)
  tagging22 = Tagging.create!(question: q6, topic: t7)
  tagging23 = Tagging.create!(question: q6, topic: t8)
  tagging24 = Tagging.create!(question: q6, topic: t9)
  tagging25 = Tagging.create!(question: q7, topic: t10)
  tagging26 = Tagging.create!(question: q8, topic: t14)
  tagging27 = Tagging.create!(question: q8, topic: t15)
  tagging28 = Tagging.create!(question: q8, topic: t16)
  tagging29 = Tagging.create!(question: q9, topic: t11)
  tagging30 = Tagging.create!(question: q9, topic: t12)
  tagging31 = Tagging.create!(question: q9, topic: t13)
  tagging32 = Tagging.create!(question: q10, topic: t17)
  tagging33 = Tagging.create!(question: q10, topic: t18)
  tagging34 = Tagging.create!(question: q11, topic: t19)
  tagging35 = Tagging.create!(question: q12, topic: t20)
  tagging36 = Tagging.create!(question: q12, topic: t21)
  tagging37 = Tagging.create!(question: q13, topic: t22)
  tagging38 = Tagging.create!(question: q13, topic: t2)
  tagging39 = Tagging.create!(question: q14, topic: t22)
  tagging40 = Tagging.create!(question: q14, topic: t2)
  tagging41 = Tagging.create!(question: q15, topic: t22)
  tagging42 = Tagging.create!(question: q15, topic: t2)
end
