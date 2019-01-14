import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class FormInput extends Component {
  
  render() {

    const { type, placeholder, input } = this.props

    return (
      <div className='form-group'>
        <input
          type={type}
          className='form-control'
          placeholder={placeholder}
          onChange={input.onChange}
          value={input.value}
        />
      </div>
    );
  }
}

export default FormInput;