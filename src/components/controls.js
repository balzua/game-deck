import React from 'react';
import {connect} from 'react-redux';
import './styles/controls.css';

import Platform from './platform';

export class Controls extends React.Component {
                                             
  render() {
    const platforms = this.props.platforms.map((platform, index) =>
      <Platform name={platform} key={index} isButton />
    );
    return (
      <div className="controls">
        <h4>Platforms</h4>
        {platforms}
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

const mapStateToProps = state => ({
  platforms: state.app.library.platforms
});

export default connect(mapStateToProps)(Controls);