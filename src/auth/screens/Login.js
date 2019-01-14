import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import FormLogin from '../components/FormLogin';

class Login extends Component {
  
  componentDidMount() {
    document.title = 'Login - app chat'
  }

  render() {
    
    return (
      <div className='container-fluid'>
        <div className='row justify-content-md-center align-items-center' style={{height:600}}>
          <div className='col-md-4'>
            <FormLogin />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;