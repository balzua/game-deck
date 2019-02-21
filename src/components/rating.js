import React from 'react';
import {connect} from 'react-redux';
import './styles/star.css';

import {updateRating} from '../actions';

export function Rating(props) {
  let ratedStars = [];
    for (let i = 0; i < 5; i++) {
      if (i < props.rating) {
        ratedStars.push(<span className='star-enabled' key={i} onClick={() => props.dispatch(updateRating(i+1, props.id))}>★</span>)
      } else {
        ratedStars.push(<span className='star-disabled' key={i} onClick={() => props.dispatch(updateRating(i+1, props.id))}>★</span>)
      }
    }
  return (
    <div className="rating">
      {ratedStars}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  rating: state.app.games.find(game => game.id === ownProps.id).userRating
})

export default connect(mapStateToProps)(Rating);