# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(first_name:"Jeremy", last_name: "Baker", user_name: "jeremybaker", password: "jeremybaker", image: 'https://images.unsplash.com/photo-1594814028668-9b44cea6a5ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=50')


#component = Component.create(
#  title: "Button", 
#  description: "This is a button", 
#  image: "/assets/login-button.png", 
#  code_block: "   
#    .btn-small {
#      background-color: hsl(211, 82, 40);
#      display: block;
#      margin: 0 auto 1vh auto;
#    }", 
#  language: "JavaScript",
#  tags: ["button", "form button", "login"], 
#  public: true, 
#  user: user)


Component.create(
  title: "Card Layout", 
  description: "Layout of image card for blog. Image by Pankaj Patel on Unsplash", 
  image: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80", 
  code_block: "   
    .card-layout {
      background-color: #ccc;
      display: grid;
      margin: 0 auto 1vh auto;
      grid-template-rows: 100%;
      grid-template-columns: 2fr 1fr;
      grid-template-area: 'image body';

      img {
        grid-area: image
      }
      .text-body {
        grid-area: body
      }
    }", 
  language: "JavaScript",
  tags: ["blog", "image", "image card"], 
  public: true, 
  user: user)

Component.create(
  title: "Product Details Section", 
  description: "Product details section with arrow dropdown. Image by Charles Deluvio on Unsplash", 
  image: "https://images.unsplash.com/photo-1539278670307-a69d04dc8a75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80", 
  code_block: "   
    .product-details {
      background-color: #fff;
      display: grid;
      color: color-here;

      .h2 {
        font-size: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: font-family here;
      }

      p {
        lorem ipsum: lorem ipsum;
      }
    }", 
  language: "JavaScript",
  tags: ["ecommerce", "product description", "text layout"], 
  public: false, 
  user: user)

Component.create(
  title: "Hero Image", 
  description: "Hero Image for Product Page", 
  image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80", 
  code_block: "   
    .hero-image-div {
      height: 100vh;
      width: 100%;
      position: relative;

      image {
        position: absolute;
        height: 100%;
        width: 100%;
      }

      .text-section {
        
        h2 {
          lorem-ipsum: lorem-ipsum;
          font-size: 2rem;
        }
        p {
          lorem-ipsum: lorem-ipsum;
        }
      }
    }
    }", 
  language: "JavaScript",
  tags: ["hero image", "product page", "image"], 
  public: true, 
  user: user)

Component.create(
  title: "Navigation Bar", 
  description: "Navigation Bar, Image by Lewis Keegan on Unsplash", 
  image: "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80", 
  code_block: "   
    nav {
      height: 100px;
      width: 100%;
      ul {
        lorem-ipsum: lorem-ipsum
      }
    }", 
  language: "JavaScript",
  tags: ["navigation bar", "udemy", "educational page"], 
  public: true, 
  user: user)