import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import TextInput from '../../public/redux/components/TextInput';
import { login } from '../../public/redux/actions/auth';

class FormLogin extends Component {

  handleLogin = (value) => {
    this.props.dispatch(login(value))
  }

  render() {
    const { auth, handleSubmit } = this.props
    const { isError, error } = auth

    return (
      <form onSubmit={handleSubmit(this.handleLogin)}>
        <Field
          name='username'
          type='text'
          component={TextInput}
          placeholder='Email or username'
          autoFocus
        />
        <Field
          name='password'
          type='password'
          component={TextInput}
          placeholder='Password'
        />
        <div className='form-row'>
          <div className='form-group col-6'>
            {isError? (
              <p className='text-danger'>{error}</p>
            ):(null)}
          </div>
          <div className='form-group col-6'>
            <button type='submit' className='btn btn-primary float-right'>Login</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default reduxForm({form:'login'})(connect(mapStateToProps)(FormLogin));