import React from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { getStoredAuthToken } from 'shared/utils/authToken';

import Login from './Login';

const Authenticate = () => {
  const history = useHistory();

  // If already authenticated, redirect to project
  if (getStoredAuthToken()) {
    return <Redirect to="/project" />;
  }

  const handleSwitchToRegister = () => {
    // Placeholder for future register flow
    history.push('/authenticate');
  };

  return <Login onSwitchToRegister={handleSwitchToRegister} />;
};

export default Authenticate;
