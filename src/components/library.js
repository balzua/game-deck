import React, { Component } from 'react';
import Game from './game';
import LibraryOptions from './library-options';
import './library.css';

export default class Library extends Component {
  render() {
    return (
      <div className="container">
        <LibraryOptions />
        <Game title="Resident Evil 2" rating="M" description="Description" />
        <Game title="Halo 3" rating="M" />
      </div>
    );
  }
};