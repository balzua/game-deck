import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchGames, fetchStats} from '../actions';
import GameList from './game-list';
import LibraryOptions from './library-options';
import './styles/library.css';

export class Library extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchStats(this.props.user));
    this.props.dispatch(fetchGames(this.props.user));
  }
  
  render() {
    if (!this.props.user) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div className="container">
        <LibraryOptions />
        <GameList type="library" />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  user: state.app.authentication.user
});

export default connect(mapStateToProps)(Library);