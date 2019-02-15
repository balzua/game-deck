import React, { Component } from 'react';
import GameList from './game-list';

export default class Recommendations extends Component {
  render() {
    return (
      <div className="container">
        <GameList type="recommendations" />
      </div>
    );
  }
};