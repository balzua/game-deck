import React from 'react';
import {connect} from 'react-redux';
import {toggleModal} from '../actions';
import {Link} from 'react-router-dom';
import './styles/header.css';

export function Header(props) {
  
  let headerLinks;
  
  if (props.authToken) {
    headerLinks = (
      <ul>
        <li><Link to='/library'>Library</Link></li>
        <li><Link to='/recommendations'>Recommendations</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
      </ul>
    );
  }
  else {
    headerLinks = (
      <ul>
        <li><a href='#' onClick={() => props.dispatch(toggleModal('registration'))}>Register</a></li>
        <li><a href='#' onClick={() => props.dispatch(toggleModal('login'))}>Login</a></li>
      </ul>
    );
  }
  
  return (
    <header>
      <div className="home">
        Title
      </div>
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