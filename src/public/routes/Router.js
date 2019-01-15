import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../../auth/screens/Login';
import Register from '../../auth/screens/Register';
import Home from '../../home/screens/Home';

class Router extends Component {
  
  render() {

    const { isLogin } = this.props.auth

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={isLogin?(Home):(Login)} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </BrowserRouter> 
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Router);