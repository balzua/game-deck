import React from 'react';
import {connect} from 'react-redux';
import {filterAll, filterNone, sortLibrary} from '../actions';
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
        <button onClick={() => this.props.dispatch(filterNone())}>Filter None</button>
        <button onClick={() => this.props.dispatch(filterAll())}>Filter All</button>
        <h4>Sorting</h4>
        <select onChange={(e) => this.props.dispatch(sortLibrary(e.target.value))}>
          <option value="dateAdded">Date Added</option>
          <option value="dateReleased">Date Released</option>
          <option value="alphabetical">Name</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  platforms: state.app.library.platforms
});

export default connect(mapStateToProps)(Controls);