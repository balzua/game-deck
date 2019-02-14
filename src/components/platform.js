import React from 'react';
import './styles/platform.css';

export default function Platform(props) {
  
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
  
  return (
    <span className={`platform ${className} ${props.disabled ? 'disabled' : ''}`}>{props.name}</span>
  );
};