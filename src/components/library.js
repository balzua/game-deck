import React, { Component } from 'react';
import GameList from './game-list';
import LibraryOptions from './library-options';
import './styles/library.css';

export default class Library extends Component {
  render() {
    return (
      <div className="container">
        <LibraryOptions />
        <GameList />
      </div>
    );
  }
};