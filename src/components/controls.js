import React from 'react';
import {connect} from 'react-redux';
import {filterAll, filterNone, sortLibrary} from '../actions';
import './styles/controls.css';

import Platform from './platform';

export class Controls extends React.Component {
                                             
  render() {
    let platforms = [];
    let platformDisplay = [];
    for (let i = 0; i < this.props.platforms.length; i += 8) {
      platforms.push(this.props.platforms.slice(i, i + 8))
    }
    for (let i = 0; i < platforms.length; i++) {
      let thisRow = [];
      for (let j = 0; j < platforms[i].length; j++) {
        thisRow.push(<Platform name={platforms[i][j]} key={j} isButton />);
      }
      platformDisplay.push(<div className="platformRow" key={i * 10}>{thisRow}</div>)
    }
    return (
      <div className="controls">
        <h4>Platforms</h4>
        {platformDisplay}
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