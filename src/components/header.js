import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
export default function Header() {
  return (
    <header>
      <div className="home">
        Title
      </div>
      <nav>
        <ul>
          <li><Link to='/library'>Library</Link></li>
          <li><Link to='/recommendations'>Recommendations</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
}