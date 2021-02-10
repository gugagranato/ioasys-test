import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" exact component={Home} isPrivate />
  </Switch>
);

export default Routes;