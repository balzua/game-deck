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
    this.setState({
      deleting: !this.state.deleting
    });
    this.props.dispatch(deleteGame(this.props.id));
  }
  
  render() {
    if (this.props.deleteRequest) {
      return (
        <div className="delete-button">
          Deleting...
        </div>
      );
    } 
    else if (this.state.deleting) {
      return (
        <div className="delete-button">
          <button value="delete" onClick={() => this.deleteGame()}>Delete</button>
          <button value="delete" onClick={() => this.flipDeleting()}>Cancel</button>
        </div>
      );
    }
    else {
      return (
        <div className="delete-button">
          <button value="delete" onClick={() => this.flipDeleting()}>Remove Game</button>
        </div>
      );
    }
  }
};

export const mapStateToProps = (state, ownProps) => ({
  deleteRequest: state.app.games.find(game => game.id === ownProps.id).deleteRequest
})

export default connect(mapStateToProps)(DeleteButton);