# GameDeck
A React app to track your game library and get recommendations based on your tastes and preferences

## Demo Account
Live Demo Link: https://vast-shore-71046.herokuapp.com/

Username: demo
Password: demo

## How to Use
A user can sign up for an account to maintain their video game library and get an idea of their taste preferences and easily track their collection. Add games typing one or more titles into the search bar. All game data is sourced from the Giant Bomb API. 

After adding games, users can assign their games a star rating between 1 and 5. They can also set the status of a game, to denote whether they're currently playing it, haven't started yet, have completed it, or don't own the game yet but want it on their wishlist. Games can also be removed from the library by clicking the delete button in the lower left hand corner. 

Finally, users can view stats about their library such as their favorite genres or the average raring that a game has. They can also filter visibility of games based on some of the more popular consoles and game platforms from the top right. Users may sort their library by name, release date, and date of addition to the library from the top right as well.

## API Documentation
The REST API can be found at the following repository: https://github.com/balzua/game-deck-server/
Requests to all endpoints other than POST /users must have a valid Bearer JWT from a logged-in user.

### /users
- POST / - creates a new user given a request containing a username and password. Verifies that the username is not taken and that the password meets the requirements. 

### /games
- GET /games/search - used for the autocompletion form; accepts a request containing a search term for a video game. Sends a search request to a third-party API to retrieve results. Returns an array of results, each containing the game's name and ID linking it to the corresponding third-party API resource.
- POST / - used to add a game to a user's account. Accepts a request containing an array of game IDs. Searches the third-party API for detailed information about each ID's corresponding game, inserts them into the database with the user's name attached.
- PUT /:id - used to update a game's rating or status. Accepts a request containing the game's ID and one or more editable terms (userRating or libraryStatus). All other fields will be ignored.
- DELETE /:id - used to remove a game from a user's library.
### /library
- GET /:user - fetches a given user's entire library. The request must contain a valid JWT from the same user as the URL path. Response will contain all of the user's library stats as well as the games contained in the library.

## Technologies Used
- React
- Redux
- Redux Thunk
- Redux Form
- React Selaect
- Enzyme
- Fetch Mock
- NodeJS / Express
- MongoDB / Mongoose
- HTML5 / CSS3
- ChartJS
- TravisCI
- Heroku


