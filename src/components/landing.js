import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './styles/landing.css';

export class Landing extends React.Component {
  render() {
    if (this.props.user) {
      return (
        <Redirect to="/library" />
      );
    }
    return (
      <React.Fragment>
        <div className="screenshot">
          <img src="/home1.PNG" />
        </div>
        <div className="hometext">
          <h2>Your Collection, All in One Place!</h2>
          <p>Manage your collection of video games all from one simple to use library!
            Easily search for and add games en masse using <a href="http://www.giantbomb.com" target="_blank">Giant Bomb's</a> comprehensive database!
            At a glance, you can easily see a game's release date and platforms, making it easy to get the information you need quickly.
          </p>
          <p>Even if you've got a huge library of titles, you can easily sort your collection to make sure you can browse efficiently.
            You can even filter out your library by platform to view only the games you're interested in.
          </p>
          <p>And finally, if you want to get a sense of your overall taste in games, check out the stats! You can easily see the amount of games you've completed,
            their average rating, and even a graph of your favorite genres, to help you decide what kind of games you might want to buy next, or have an idea to try something new!
          </p>
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  user: state.app.authentication.user
});

export default connect(mapStateToProps)(Landing);
