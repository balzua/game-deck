import React from 'react';
import {connect} from 'react-redux';
import RegistrationForm from './registration-form';
import './styles/modal.css';

export function Modal(props) {
  let content;
  if (props.content === "registration") {
    console.log("Content");
    content = <RegistrationForm />
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