import React from 'react';
import {connect} from 'react-redux';
import {filterPlatform} from '../actions';
import './styles/platform.css';

export function Platform(props) {
  
  const classNames = {
    "SNES": 'snes',
    "NES": 'nes',
    "PS1": 'ps',
    "PS2": 'ps2',
    "X360": 'x360',
    "GCN": 'gc',
    "XBOX": 'xbox',
    "PS3": 'ps3',
    "Wii": 'wii',
    "N64": 'n64',
    "PS4": 'ps4',
    "XONE": 'x1',
    "NS": 'ns',
    "WiiU": 'wiiu'
  };
  
  const className = classNames[props.name] || 'other';
  
  if (props.isButton) {
    //Component should be clickable. It should find out if it's disabled based on the state, and also be able to dispatch
    //an action to toggle whether or not it is filtered.
    return (
      <span className={`platform ${className} ${props.disabled ? 'disabled' : ''}`}
        onClick={() => props.dispatch(filterPlatform(props.name))}>
        {props.name}</span>
    );
  } else {
    //Component is not clickable. Do not set disabled based on state, do not provide onClick method.
    return (
      <span className={`platform ${className}`}>{props.name}</span>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  //Search the filters array for this platform's name. If it is not present, disabled will be true, false otherwise.
  disabled: !Boolean(state.app.filters.find(filter => filter === ownProps.name))
});

export default connect(mapStateToProps)(Platform);