# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(first_name:"Test", last_name: "User", user_name: "testuser1", password: "testuser", image: '/assets/meshi.jpg')


component = Component.create(
  title: "Button", 
  description: "This is a button", 
  image: "/assets/login-button.png", 
  code_block: "   
    .btn-small {
      background-color: hsl(211, 82, 40);
      display: block;
      margin: 0 auto 1vh auto;
    }", 
  language: "JavaScript",
  tags: ["button", "form button", "login"], 
  public: true, 
  user: user)

