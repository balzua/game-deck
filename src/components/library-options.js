import React from 'react';
import './library-options.css'

import Chart from './chart';
import Stats from './stats';
import AddGame from './add-game';

export default function LibraryOptions() {
  return (
    <div className="options-container">
        <div className="chart">
          <Chart />
        </div>
        <Stats />
        <div className="options">
          Platforms: 
          <span className="platform p-switch">Switch</span>
          <span className="platform p-xbox">Xbox</span>
          <br />
          Make my library visible to others? 
          <input type="checkbox" />
        </div>
        <AddGame />
      </div>
  );
}