/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Login from './index';

const memoryHistory = createMemoryHistory();

const LoginRender = () => (
  <Router history={memoryHistory}>
    <Login />
  </Router>
);

export default LoginRender;
