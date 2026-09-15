import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from 'browserHistory';
import Project from 'Project';
import Authenticate from 'Auth/Authenticate';
import Welcome from 'Welcome';
import PageError from 'shared/components/PageError';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/welcome" />
      <Route path="/welcome" component={Welcome} />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/project" component={Project} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
