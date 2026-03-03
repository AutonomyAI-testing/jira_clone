import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { storeAuthToken, getStoredAuthToken } from 'shared/utils/authToken';
import { PageLoader } from 'shared/components';
import { USE_MOCK_DATA } from 'shared/utils/config';

import Login from './Login';

const Authenticate = () => {
  const history = useHistory();

  const handleAuthenticated = () => {
    history.push('/');
  };

  useEffect(() => {
    // If using mock data, automatically set a mock auth token and redirect
    if (USE_MOCK_DATA) {
      console.log('[Auth] Using mock authentication');
      storeAuthToken('mock-auth-token');
      history.push('/');
    } else if (getStoredAuthToken()) {
      // Already authenticated, redirect
      history.push('/');
    }
  }, [history]);

  // While mock data check is running or already authenticated, show loader
  if (USE_MOCK_DATA || getStoredAuthToken()) {
    return <PageLoader />;
  }

  return <Login onAuthenticated={handleAuthenticated} />;
};

export default Authenticate;
