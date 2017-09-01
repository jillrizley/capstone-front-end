# Link Keeper #

## SCREENSHOT ##


## Explanations of the technologies used ##
- HTML 5 / CSS / SASS
- Javascript
- Jquery
- AJAX
- Handlebars
- Bootstrap

## Links ##
[Front End Deployed] (https://jillrizley.github.io/capstone-front-end/

[Back End Repo] (https://github.com/jillrizley/capstone-back-end)

[This Repo] (https://github.com/jillrizley/capstone-front-end)

## A couple paragraphs about the general approach you took ##
I started this project thinking of it as a way to display a slideshow of images, but after some research into making that possible, I realized it was a bit out of the scope of possibility. I have instead created something that I think could be used in many ways. My app gives you the ability to make lists where you can name and save URLs, and when you access them it opens to a new window. This could be great for saving images, websites, recipes, studying tools, or even memes! Kind of like a bookmarks bar but you can sign-in and access your data from anywhere!

I began setting up the back end using Express and built out the user authorization followed by creating the controller and model for the albums that would hold the urls. I moved over to the front end and built out a sleek, easy to use site. I added the ability to add, delete and update both the albums and the links so that if any plans changed for the user, they could stay orgainzed accordingly. I think the usibilty of being able to open a window to a saved URL that you can orgaize youreself is much higher than my original plan to just be able to see a slideshow of images.

## Installation instructions for any dependencies ##
`npm install`

## User Stories ##
- I want to be able to add an album
- I want to be able to update the name of my album if I choose to
- I want to be able to delete my album if I no longer need it
- I want to be able to add a URL to my album and access it through the app
- I want to be able to name my URL within the album
- I want to be able to access my URL at the click of a button
- I want a new window to open upon clicking the link I've added

## Wireframes ##
https://wireframe.cc/UOODS8 - original wireframe
https://wireframe.cc/KWXpIA-updated - updated wireframe

## Descriptions of any unsolved problems or major hurdles you had to overcome ##
I would really like for my app to be able to tell the difference between an image and a link to a website so that I could get a lightbox to open when images were clicked on, and a new browser window to open for links.
