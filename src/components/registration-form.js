import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, isTrimmed, length, matches} from '../validators';
import Input from './input';
import {registerUser, toggleModal} from '../actions';

const passwordLength = length({min: 5, max: 72});
const userNameLength = length({min: 2, max: 20});
const matchPassword = matches('password');

export class RegistrationForm extends React.Component {
  
  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password}
    return this.props.dispatch(registerUser(user))
      .then(() => this.props.dispatch(toggleModal()))
  }
  
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => 
        this.onSubmit(values)
      )}>
        <div className="form-line">
          <label htmlFor="username">Username</label>
          <Field component={Input}
            type="text" 
            name="username" 
            validate={[required, nonEmpty, isTrimmed, userNameLength]} />
        </div>
        <div className="form-line">
          <label htmlFor="password">Password</label>
          <Field component={Input} 
            type="password" 
            name="password"
            validate={[required, nonEmpty, isTrimmed, passwordLength]} />
        </div>
        <div className="form-line">
          <label htmlFor="validate-password">Repeat Password</label>
          <Field component={Input}
            type="password" 
            name="validate-password"
            validate={[required, nonEmpty, isTrimmed, passwordLength, matchPassword]} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration'
})(RegistrationForm);