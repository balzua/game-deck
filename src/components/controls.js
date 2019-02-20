import React from 'react';
import './styles/controls.css';

import Platform from './platform';

export default class Controls extends React.Component {
  render() {
    return (
      <div className="controls">
        <h4>Platforms</h4>
        <Platform name="NS" isButton />
        <Platform name="XBOX" isButton />
        <h4>Visibility</h4>
        Make Library Public? <input type="checkbox" />
        <h4>Sorting</h4>
        <select>
          <option value="date-added">Date Added</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="rating">Top Rated</option>
          <option value="date-released">Date Released</option>
        </select>
      </div>
    );
  }
};