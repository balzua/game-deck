import React from 'react';
import {deleteGame} from '../actions';
import {connect} from 'react-redux';
import './styles/delete-button.css';

export class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleting: false
    }
  }
  
  flipDeleting() {
    this.setState({
      deleting: !this.state.deleting
    });
  }
  
  deleteGame() {
    this.flipDeleting();
    this.props.dispatch(deleteGame(this.props.id));
  }
  
  render() {
    if (this.state.deleting) {
      return (
        <div className="delete-button">
          <button value="delete" onClick={() => this.deleteGame()}>Delete</button>
          <button value="delete" onClick={() => this.flipDeleting()}>Cancel</button>
        </div>
      );
    } else {
      return (
        <div className="delete-button">
          <button value="delete" onClick={() => this.flipDeleting()}>Remove Game</button>
        </div>
      );
    }
  }
};

export default connect()(DeleteButton);