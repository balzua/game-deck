import React from 'react';
import './styles/library-item.css';

import Game from './game';

export default class RecommendationItem extends React.Component {
  render() {
    return (
      <div className="library-item">
          <Game {...this.props.game} />
          <div className="user-info">
            <div className="game-controls">
              <button>Add to Wishlist</button>
              <button>Add to Library</button>
              <button>Not Interested</button>
            </div>
          </div>
      </div>
    );
  }
};