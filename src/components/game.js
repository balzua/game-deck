import React from 'react';
import './game.css';

import GameStatus from './game-status';
import DeleteButton from './delete-button';

export default class Game extends React.Component {
  render() {
    return (
      <div className="library-item">
          <div className="game-title">
            <h3>{this.props.title}</h3>
          </div>
          <div className="game-img">
            <img src="https://www.giantbomb.com/api/image/scale_small/2920687-the%20legend%20of%20zelda%20-%20breath%20of%20the%20wild%20v7.jpg" />
          </div>
          <div className="game-info">
            <ul>
              <li><p>
                Here is a description of the game which might be kind of long.
                In fact it might even be 2 or 3 sentences long. This isn't uncommon.
                </p></li>
              <li><b>Rating:</b> {this.props.rating}</li>
              <li><b>Platform(s):</b> NS WiiU</li>
              <li><b>Genre:</b> Action/Adventure</li>
              <li><b>Released:</b> March 3, 2017</li>
            </ul>
          </div>
          <div className="user-info">
            <GameStatus />
            <DeleteButton />
          </div>
      </div>
    );
  }
};