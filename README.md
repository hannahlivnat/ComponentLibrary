# COMPONENT LIBRARY - Pinterest for Component Code Snippets

## PREVIEW
Login / Sign Up Page
![](../assets/image/ComponentLibrary.gif)

Home Page
![](../assets/image/componentlibraryhomepage.gif)

Profile
![](../assets/image/componentlibrary_profile.gif)

## VIEW LIVE APP 
https://fathomless-retreat-78559.herokuapp.com/

## PROJECT DESCRIPTION
Component Library gives developers a way to save commonly used components and share them with other developers, inspired by Pinterest. 

## APPROACH TAKEN

## INSTALLATION INSTRUCTIONS

## FEATURES / TECHNOLOGY USED
__Technology__:

__Languages:__ Ruby, JavaScript, Sass (SCSS)
__UI Library:__ Bootstrap
__Framework:__ Ruby on Rails
__Libraries:__ React
__Database:__ PostgreSQL
__Tools:__ Github Projects, Git

__Features:__
* User authentication with password encryption using bcrypt
* Full CRUD for components model and partial CRUD for user model
* Users are able to mark posts as public or private. They can view private posts in their user profile
* Ruby back-end filters through and counts tags and returns the five most-frequently used tags
* Users are able to filter through cards using tags and search bar
* Model relationships are set up between three models : users, components, and likes.
* Users are able to "like" each card to increase the number of hearts. 
* Users can click on each card image to flip the card and reveal the code for the component. They can copy the code. 
* Users can click "copy" on each card to copy the component to their own profile


## UNSOLVED PROBLEMS
* The language property of the component model is not working. 
* Bootcamp responsiveness can be improved
* Add in update and delete routes on user route.