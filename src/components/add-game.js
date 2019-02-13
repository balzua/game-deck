import React from 'react';

export default class AddGame extends React.Component {
  render() {
    return (
      <div className="add-games">
          <form>
            <label htmlFor="add-games-field">
              Add Games
            </label>
            <input type="text" name="add-games-field" />
            <input type="submit" />
          </form>
      </div>
    );
  }
}