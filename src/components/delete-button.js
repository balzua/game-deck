import React from 'react';
//import './delete-button.css';

export default class DeleteButton extends React.Component {
  render() {
    return (
      <div className="delete-button">
        <button value="delete">Delete</button>
      </div>
    );
  }
};