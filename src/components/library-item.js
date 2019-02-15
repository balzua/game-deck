import React from 'react';
import './styles/library-item.css';

import Game from './game';
import Rating from './rating';
import GameForm from './game-form';
import DeleteButton from './delete-button';

export default class LibraryItem extends React.Component {
  render() {
    return (
      <div className="library-item">
          <Game {...this.props.game} />
          <div className="user-info">
            <div className="game-controls">
              <Rating rating={this.props.game.userRating} />
              <GameForm status={this.props.game.status} />
            </div>
            <DeleteButton />
          </div>
      </div>
    );
  }
};