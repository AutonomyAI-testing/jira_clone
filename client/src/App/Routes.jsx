import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from 'browserHistory';
import Project from 'Project';
import Authenticate from 'Auth/Authenticate';
import LoginPage from 'Auth/LoginPage';
import PageError from 'shared/components/PageError';
import { getStoredAuthToken } from 'shared/utils/authToken';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getStoredAuthToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={LoginPage} />
      <Route path="/authenticate" component={Authenticate} />
      <PrivateRoute path="/project" component={Project} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
