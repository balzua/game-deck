import React, { Component } from 'react';
import Game from './game';
import './library.css';

export default class Library extends Component {
  render() {
    return (
      <div>
        <Game title="Resident Evil 2" rating="M" description="Description" />
      </div>
    );
  }
};