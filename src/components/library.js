import React from 'react';
import {connect} from 'react-redux';
import {fetchLibrary} from '../actions';
import GameList from './game-list';
import LibraryOptions from './library-options';
import './styles/library.css';

export class Library extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log(`Dispatching library fetch with user ${this.props.user}`);
    this.props.dispatch(fetchLibrary(this.props.user));
  }
  
  render() {
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