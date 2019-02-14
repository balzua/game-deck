import React from 'react';
import {connect} from 'react-redux';
import './styles/stats.css';

export function Stats(props) {
  return (
    <div className="stats">
      <span><h4>Total Games</h4>{props.totalGames}</span>
      <span><h4>Favorite Genre</h4>{props.favoriteGenre}</span>
      <span><h4>Total Completed</h4>{props.totalCompleted}</span>
      <span><h4>Average Rating</h4>{props.averageRating}</span>
    </div>
  );
};

export const mapStateToProps = state => ({
  favoriteGenre: state.libraryStats.favoriteGenre,
  totalGames: state.libraryStats.totalGames,
  totalCompleted: state.libraryStats.totalCompleted,
  averageRating: state.libraryStats.averageRating
});

export default connect(mapStateToProps)(Stats);