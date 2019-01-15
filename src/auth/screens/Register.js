import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Register extends Component {
  componentDidMount() {
    document.title = 'Register - app chat'
  }

  render() {

    const { isLogin } = this.props.auth

    if(isLogin){
      return <Redirect to='/' />
    }

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

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Register);