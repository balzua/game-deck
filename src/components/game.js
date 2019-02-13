import React from 'react';
import './game.css';

export default class Game extends React.Component {
  render() {
    return (
      <div class="library-item">
          <img src="https://www.giantbomb.com/api/image/scale_medium/3049558-box_re2.png" class="game-img" />
          <div class="game-info">
            <h3>{this.props.title}</h3>
            <p>
              {this.props.description}
            </p>
            <b>Rating:</b>{this.props.rating}<b>Platform(s):</b> PS4 PC X1 <br />
            <b>Genre:</b> Action/Adventure, Horror<br />
            <b>Released:</b> January 25, 2019
          </div>
          <div class="user-info">
            <form name="library-controls">
              Rating: <input type="text" placeholder="1-5" />
              Favorite?: <input type="checkbox" />
              <select>
                <option value="wishlist">On Wishlist</option>
                <option value="not-started">Not Started</option>
                <option value="playing">Playing</option>
                <option value="completed">Completed</option>
              </select>
              <button value="delete">Remove Game</button>
            </form>
          </div>
      </div>
    );
  }
};