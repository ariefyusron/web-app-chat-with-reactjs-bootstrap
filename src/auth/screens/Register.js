import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../public/redux/actions/auth';

class Register extends Component {
  componentDidMount() {
    document.title = 'Register - app chat'
    const checkAuth = JSON.parse(localStorage.getItem('auth'))
    if(checkAuth){
      this.props.dispatch(auth(checkAuth))
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row justify-content-md-center align-items-center' style={{height:600}}>
          <div className='col-md-4'>
            <form>
              <div className='form-group'>
                <input type='text' className='form-control' placeholder='Email or username' />
              </div>
              <div className='form-group'>
                <input type='password' className='form-control' placeholder='Password' />
              </div>
              <div className='form-row'>
                <div className='form-group col-6'>
                  <p>Already account?</p>
                </div>
                <div className='form-group col-6'>
                  <Link to='/'>
                    <button type='submit' className='btn btn-primary float-right'>Register</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Register);