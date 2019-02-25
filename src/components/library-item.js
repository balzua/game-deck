import React from 'react';
import {connect} from 'react-redux';
import './styles/library-item.css';

import Game from './game';
import Rating from './rating';
import GameForm from './game-form';
import DeleteButton from './delete-button';

//Helper function, returns true if at least one of the game's platforms is in the list of filters.
//Returns false if none of the game's platforms are in the list of filters (game should not be displayed).
function filterGames(game, filters) {
  for (let i = 0; i < game.platforms.length; i++) {
    if (filters.find(item => item === game.platforms[i])) {
      return true;
    }
  }
  return false;
}


export class LibraryItem extends React.Component {
  render() {
    let error;
    if (this.props.game.error) {
      error = <span className="error">{this.props.game.error}</span>;
    }
    if (filterGames(this.props.game, this.props.filters)) {
      return (
        <div className="library-item">
            <Game {...this.props.game} />
            <div className="user-info">
              <div className="game-controls">
                <Rating id={this.props.game.id} />
                <GameForm id={this.props.game.id} />
              </div>
              <DeleteButton id={this.props.game.id} />
            </div>
            {error}
        </div>
      );
    } else {
      return null;
    }
  }
};

const mapStateToProps = state => ({
  filters: state.app.library.filters
});

export default connect(mapStateToProps)(LibraryItem);