import React from 'react';

export default function GameForm(props) {
  return (
    <div className="game-form">
      <form name="game-status">
          <label htmlFor="status">Game Status </label>
          <select defaultValue={props.status} name="status">
            <option value="wishlist">On Wishlist</option>
            <option value="not-started">Not Started</option>
            <option value="playing">Playing</option>
            <option value="completed">Completed</option>
          </select>
      </form>
    </div>
  );
};