import React from 'react';
import './styles/game.css';
import Platform from './platform';

export default function Game(props) {
  const genres = props.genres.join(', ');
  const platforms = props.platforms.map((platform, index) => 
    <Platform name={platform} key={index} />
  );
                                        
  //Format the release date:
  const releaseDate = new Date(props.releaseDate);
  const dateString = `${releaseDate.getMonth() + 1}/${releaseDate.getDate() + 1}/${releaseDate.getFullYear()}`;
                                        
  return (
    <React.Fragment>
      <div className="game-title">
        <h3>{props.name}</h3>
      </div>
      <div className="game-img">
        <img src={props.image} alt="Game Box Art" />
      </div>
      <div className="game-info">
        <p>
          {props.description}
        </p>
        <ul>
          <li><h4>Platforms</h4>{platforms} </li>
          <li><h4>Genre</h4> {genres}</li>
          <li><h4>Released</h4> {dateString}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};