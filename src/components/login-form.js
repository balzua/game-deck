import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import Input from './input';
import {login, toggleModal} from '../actions';

export class LoginForm extends React.Component {
  
  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    return this.props.dispatch(login(user))
    .then(() => this.props.dispatch(toggleModal()));
  }
  
  render() {
    let error;
        if (this.props.error) {
            error = (
                <span className="form-error" aria-live="polite">
                    {this.props.error}
                </span>
            );
        }
    return (
      <form onSubmit={this.props.handleSubmit(values => 
        this.onSubmit(values)
      )}>
        {error}
        <div className="form-line">
          <label htmlFor="username">Username</label>
          <Field component={Input}
            type="text" 
            name="username" 
            validate={[required, nonEmpty]} />
        </div>
        <div className="form-line">
          <label htmlFor="password">Password</label>
          <Field component={Input} 
            type="password" 
            name="password"
            validate={[required, nonEmpty]} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm);