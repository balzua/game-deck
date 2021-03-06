import React from 'react';
import {connect} from 'react-redux';
import {toggleModal, logout} from '../actions';
import {Link} from 'react-router-dom';
import './styles/header.css';

export function Header(props) {
  
  let headerLinks;
  
  if (props.authToken) {
    headerLinks = (
      <ul>
        <li><Link to='/library'>Library</Link></li>
        <li><a href='#' onClick={() => props.dispatch(logout())}>Logout</a></li>
      </ul>
    );
  }
  else {
    headerLinks = (
      <ul>
        <li><a href='#' onClick={() => props.dispatch(toggleModal('Register'))}>Register</a></li>
        <li><a href='#' onClick={() => props.dispatch(toggleModal('Login'))}>Login</a></li>
      </ul>
    );
  }
  
  return (
    <header>
      <h1>Game Deck</h1>
      <nav>
        {headerLinks}
      </nav>
    </header>
  );
}

const mapStateToProps = state => ({
  authToken: state.app.authentication.authToken,
  user: state.app.authentication.user
});

export default connect(mapStateToProps)(Header);