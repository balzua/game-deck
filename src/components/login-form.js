import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import Input from './input';

export class LoginForm extends React.Component {
  
  onSubmit(values) {
    console.log(values);
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