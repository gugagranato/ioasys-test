import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Route from './Route';

import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
  </Switch>
);

export default Routes;