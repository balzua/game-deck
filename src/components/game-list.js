import React from 'react';
import {connect} from 'react-redux';

import './styles/game-list.css';
import LibraryItem from './library-item';

export function GameList(props) {
  const games = props.games.map((game, index) => 
    <LibraryItem game={game} key={index} />
  );
  return (
    <div className="items">
      {games}
    </div>
  );
};

export const mapStateToProps = state => ({
  games: state.games
});

export default connect(mapStateToProps)(GameList);