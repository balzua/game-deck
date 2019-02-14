import React from 'react';
import './styles/delete-button.css';

export default class DeleteButton extends React.Component {
  render() {
    return (
      <div className="delete-button">
        <button value="delete">Remove Game</button>
      </div>
    );
  }
};