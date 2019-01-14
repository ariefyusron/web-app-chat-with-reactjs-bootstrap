import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import FormInput from '../../public/redux/components/formInput';

class Login extends Component {
  constructor(){
    super();
    this.state ={
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    document.title = 'Login - app chat'
  }

  handleLogin = (value) => {
    this.setState({
      username: value.username,
      password: value.password
    })
  }

  render() {
    
    return (
      <div className='container-fluid'>
        <div className='row justify-content-md-center align-items-center' style={{height:600}}>
          <div className='col-md-4'>
            <form>
              <Field
                name='username'
                type='text'
                component={FormInput}
                placeholder='Email or username'
              />
              <Field
                name='password'
                type='password'
                component={FormInput}
                placeholder='Password'
              />
              <div className='form-row'>
                <div className='form-group col-6'>
                  <p onClick={this.handleClick}>Forget password?</p>
                </div>
                <div className='form-group col-6'>
                  <button type='submit' className='btn btn-primary float-right' onClick={this.props.handleSubmit(this.handleLogin)}>Login</button>
                </div>
              </div>
            </form>
            <p>{this.state.username+' '+this.state.password}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({form:'login'})(connect()(Login));