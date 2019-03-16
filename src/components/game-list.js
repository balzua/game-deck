import React from 'react';
import {connect} from 'react-redux';

import './styles/game-list.css';
import LibraryItem from './library-item';

export function GameList(props) {
  let games;
  if (props.type === "library") {
    games = props.games.map((game, index) => 
      <LibraryItem game={game} key={index} id={index} />
    );
  }
  return (
    <div className="items">
      {games}
    </div>
  );
};

export const mapStateToProps = state => ({
  test: state.app,
  games: state.app.games || []
});

export default connect(mapStateToProps)(GameList);