# Eat it! Self checkout app

#### App Walkthrough

- if Loom link is not available download video <a id="raw-url" href="https://github.com/tiagoapolo/self-checkout/blob/main/github_media/walkthrough.mp4">here!</a>


<a href="https://www.loom.com/share/7f1d4c1d9e55443487b36df8172586c6"> <p>Eat it! - Watch Video</p> <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/7f1d4c1d9e55443487b36df8172586c6-1614613650521-with-play.gif"> </a>


## Installation

- Make sure you have Node installed
- Both Yarn and NPM can be used as package managers

1. Clone the repo

2. go to self-checkout folder: `cd self-checkout/`

3. First install the required packages: 

`npm install` or `yarn`

4. To run both client and server applications use:

`npm run dev` or `yarn dev`

5. Configure API base URL:
    - You can either use `src/config.json` or `.env`
    - Also there's a `.env_example` file if you want to use as template

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
  - Updates items and/or status of a single order

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
