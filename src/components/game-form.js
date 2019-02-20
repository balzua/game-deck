import React from 'react';
import {connect} from 'react-redux';
import {updateStatus} from '../actions';

export function GameForm(props) {
  return (
    <div className="game-form">
      <form name="game-status">
          <label htmlFor="status">Game Status </label>
          <select defaultValue={props.status} 
            onChange={e => props.dispatch(updateStatus(e.target.value, props.id))} 
            name="status">
            <option value="wishlist">On Wishlist</option>
            <option value="not-started">Not Started</option>
            <option value="playing">Playing</option>
            <option value="completed">Completed</option>
          </select>
      </form>
    </div>
  );
};

export const mapStateToProps = (state, ownProps) => ({
  status: state.app.games.find(game => game.id === ownProps.id).status
});

export default connect(mapStateToProps)(GameForm);