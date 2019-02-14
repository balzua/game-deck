import React from 'react';
import './styles/library-options.css'

import Chart from './chart';
import Stats from './stats';
import Controls from './controls';
import AddGame from './add-game';

export default function LibraryOptions() {
  return (
    <div className="options-container">
        <Chart />
        <Stats />
        <Controls />
        <AddGame />
    </div>
  );
}