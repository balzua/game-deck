import React from 'react';
import {connect} from 'react-redux';
import {toggleModal} from '../actions';
import {Link} from 'react-router-dom';
import './styles/header.css';

export function Header(props) {
  return (
    <header>
      <div className="home">
        Title
      </div>
      <nav>
        <ul>
          <li><a href='#' onClick={() => props.dispatch(toggleModal('registration'))}>Register</a></li>
          <li><a href='#' onClick={() => props.dispatch(toggleModal('login'))}>Login</a></li>
          <li><Link to='/library'>Library</Link></li>
          <li><Link to='/recommendations'>Recommendations</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default connect()(Header);