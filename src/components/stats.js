import React from 'react';
import './stats.css';

export default class Stats extends React.Component {
  render() {
    return (
      <div className="stats">
        <span><h4>Total Games</h4>2</span>
        <span><h4>Favorite Genre</h4>Action</span>
        <span><h4>Total Completed</h4> 1</span>
        <span><h4>Hours Played</h4>6</span>
      </div>
    );
  }
};