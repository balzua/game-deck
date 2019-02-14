import React from 'react';
import './styles/game.css';

import GameStatus from './game-status';
import DeleteButton from './delete-button';
import Platform from './platform';

export default class Game extends React.Component {
  render() {
    const genres = this.props.genres.join(', ');
    const platforms = this.props.platforms.map((platform, index) => 
      <Platform name={platform} index={index} />
    );
    return (
      <div className="library-item">
          <div className="game-title">
            <h3>{this.props.title}</h3>
          </div>
          <div className="game-img">
            <img src={this.props.image} alt="Game Box Art" />
          </div>
          <div className="game-info">
            <p>
              {this.props.description}
            </p>
            <ul>
              <li><b>Rating:</b> {this.props.rating}</li>
              <li><b>Platform(s): {platforms}</b> </li>
              <li><b>Genre:</b> {genres}</li>
              <li><b>Released:</b> {this.props.releaseDate}</li>
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