import React from 'react';
import {connect} from 'react-redux';
import RegistrationForm from './registration-form';
import LoginForm from './login-form';
import './styles/modal.css';
import { toggleModal } from '../actions';

export function Modal(props) {
  let content;
  if (props.content === "registration") {
    content = <RegistrationForm />
  } else if (props.content === "login") {
    content = <LoginForm />
  }
  if (props.display) {
    return (
      // If the user clicks the modal, first verify they clicked outside the content zone, and if so toggle the modal to remove it.
      <div className="modal" onClick={(e) => e.target.className === 'modal' ? props.dispatch(toggleModal()) : null}>
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
  display: state.app.library.modalDisplay,
  content: state.app.library.modalContent
});

export default connect(mapStateToProps)(Modal);