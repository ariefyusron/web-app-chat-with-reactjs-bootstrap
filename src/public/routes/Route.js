import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../../auth/screens/Login';
import Register from '../../auth/screens/Register';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </BrowserRouter>
)

export default Router;