# Eat it! Self checkout app

#### App Walkthrough
<a href="https://www.loom.com/share/7f1d4c1d9e55443487b36df8172586c6"> <p>Eat it! - Watch Video</p> <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/7f1d4c1d9e55443487b36df8172586c6-1614613650521-with-play.gif"> </a>


## Installation

- Make sure you have Node installed
- Both Yarn and NPM can be used as package managers

1. First install the required packages: 

`npm install` or `yarn`

2. To run both client and server applications use:

`npm run dev` or `yarn dev`

- If you want to run the client app separately use:

`npm start` or `yarn start`

- If you want to run the server separately use:

`npm run server` or `yarn server`

## API Routes

- GET `/order`:
  - Returns all orders with 

- GET `/order/<ID>`:
  - Returns a single order

- POST `/order`:
  - Create a order and returns the created order with the total amount and generated order id

- PUT `/order/<ID>`:
  - Updates a single order

- GET `/menu/categories>`:
  - Returns all categories

- GET `/menu`:
  - Returns all categories

- GET `/menu?name=`:
  - Queries for all menu items with matching name

- GET `/menu?category=`:
  - Queries for all menu items with matching category

- GET `/menu/<ID>`:
  - Returns a single menu item