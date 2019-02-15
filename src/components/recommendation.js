import React from 'react';
import './styles/library-item.css';

import Game from './game';
import DeleteButton from './delete-button';

export default class Recommendation extends React.Component {
  render() {
    return (
      <div className="library-item">
          <Game {...this.props.game} />
          <div className="user-info">
            <div className="game-controls">
              Recommendation Controls
            </div>
            <DeleteButton />
          </div>
      </div>
    );
  }
};