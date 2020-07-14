# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(first_name:"Hannah", last_name: "Livnat", user_name: "testing-user", password: "testing-password", image: '../app/assets/images/meshi.jpg')
user1 = User.create(first_name:"Daniel", last_name: "Livnat", user_name: "daniellivnat", password: "daniellivnat", image: '../app/assets/images/meshi.jpg')

component = Component.create(
  title: "Button", 
  description: "This is a button", 
  image: "../app/assets/images/login-button.png", 
  code_block: "   
    .btn-small {
      background-color: hsl(211, 82, 40);
      display: block;
      margin: 0 auto 1vh auto;
    }", 
  tags: ["button", "form button", "login"], 
  public: true, 
  user: user)

component2 = Component.create(
  title: "Button", 
  description: "This is a button", 
  image: "../app/assets/images/login-button.png", 
  code_block: "   
    .btn-small {
      background-color: hsl(211, 82, 40);
      display: block;
      margin: 0 auto 1vh auto;
    }", 
  tags: ["button", "form button", "login"], 
  public: true, 
  user: user1)

component3 = Component.create(
  title: "Login Form", 
  description: "This is a button for a login form", 
  image: "../app/assets/images/login-button.png", 
  code_block: "   
    .btn-small {
      background-color: hsl(211, 82, 40);
      display: block;
      margin: 0 auto 1vh auto;
    }", 
  tags: ["button", "form button", "login"], 
  public: true, 
  user: user1)