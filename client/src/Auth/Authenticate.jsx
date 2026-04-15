import React from 'react';

import { getStoredAuthToken } from 'shared/utils/authToken';
import { PageLoader } from 'shared/components';
import LoginForm from './LoginForm';

const Authenticate = () => {
  // If already authenticated, show loader (will redirect via router guard)
  if (getStoredAuthToken()) {
    return <PageLoader />;
  }

  // Show login form for unauthenticated users
  return <LoginForm />;
};

export default Authenticate;
