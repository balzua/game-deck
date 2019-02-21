import React from 'react';
import {connect} from 'react-redux';
import RegistrationForm from './registration-form';
import LoginForm from './login-form';
import './styles/modal.css';

export function Modal(props) {
  let content;
  if (props.content === "registration") {
    content = <RegistrationForm />
  } else if (props.content === "login") {
    content = <LoginForm />
  }
  if (props.display) {
    return (
      <div className="modal">
        <div className="modal-content">
          {content}
        </div>
      </div>
    );
  } else {
    return null;
  }; 
}

export const mapStateToProps = state => ({
  display: state.app.modalDisplay,
  content: state.app.modalContent
});

export default connect(mapStateToProps)(Modal);