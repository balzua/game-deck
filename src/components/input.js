import React from 'react';

export default class Input extends React.Component {
  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <span className="form-error">{this.props.meta.error}</span>;
    }
    return (
      <div className="form-line">
        <label htmlFor={this.props.label}>
          {this.props.label}
          {error}
        </label>
        <input 
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => (this.input = input)}
        ></input>
      </div>
    );
  }
};