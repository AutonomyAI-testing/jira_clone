import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from 'browserHistory';
import Project from 'Project';
import Authenticate from 'Auth/Authenticate';
import PageError from 'shared/components/PageError';
import WelcomePage from 'WelcomePage';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/welcome" />
      <Route exact path="/welcome" component={WelcomePage} />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/project" component={Project} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
