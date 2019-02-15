import React from 'react';
import './styles/modal.css';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: false};
  }
  
  render() {
    if (this.state.display) {
      return (
        <div className="modal">
          <div className="modal-content">
            Modal displayed with content: {this.props.content}
          </div>
        </div>
      );
    } else {
      return null;
    };
  };
  
};