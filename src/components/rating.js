import React from 'react';
import './styles/rating.css';

export default function Rating(props) {
  let stars = ['★', '★', '★', '★', '★'];
  const ratedStars = stars.map((star, index) => {
    if (index < props.rating) {
      return (<span className="star-enabled" key={index}>{star}</span>);
    } else {
      return (<span className="star-disabled" key={index}>{star}</span>);
    }
  });
  return (
    <div className="rating">
      {ratedStars}
    </div>
  );
};