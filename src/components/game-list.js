import React from 'react';
import './styles/game-list.css';

import Game from './game';

export default class GameList extends React.Component {
  render() {
    return (
      <div className="items">
        <Game title="Resident Evil 2" rating="M" description="Description" />
        <Game title="Halo 3" rating="M" />
      </div>
    );
  }
};