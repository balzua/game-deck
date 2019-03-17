import React from 'react';
import {connect} from 'react-redux';
import './styles/stats.css';

export function Stats(props) {
  return (
    <div className="stats">
      <span><h4>Total Games</h4>{props.totalGames}</span>
      <span><h4># Completed</h4>{props.totalCompleted}</span>
      <span><h4>Average Rating</h4>{props.averageRating}</span>
    </div>
  );
};

export const mapStateToProps = state => ({
  totalGames: state.app.library.libraryStats.totalGames,
  totalCompleted: state.app.library.libraryStats.totalCompleted,
  averageRating: state.app.library.libraryStats.averageRating
});

export default connect(mapStateToProps)(Stats);