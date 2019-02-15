import React from 'react';
import RegistrationForm from './registration-form';
import './styles/modal.css';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: true};
  }
  
  render() {
    if (this.state.display) {
      return (
        <div className="modal">
          <div className="modal-content">
            <RegistrationForm />
          </div>
        </div>
      );
    } else {
      return null;
    };
  };
  
};