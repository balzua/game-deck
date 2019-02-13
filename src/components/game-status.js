import React from 'react';

export default class GameStatus extends React.Component {
  render() {
    return (
      <form name="game-status">
        Rating: <input type="text" placeholder="1-5" />
        Favorite?: <input type="checkbox" />
        <select>
          <option value="wishlist">On Wishlist</option>
          <option value="not-started">Not Started</option>
          <option value="playing">Playing</option>
          <option value="completed">Completed</option>
        </select>
      </form>
    );
  }
};