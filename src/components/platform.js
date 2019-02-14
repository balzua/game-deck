import React from 'react';
import './platform.css';

export default function Platform(props) {
  return (
    <span className={`platform ${props.name} ${props.disabled ? 'disabled' : ''}`}>{props.name}</span>
  );
};