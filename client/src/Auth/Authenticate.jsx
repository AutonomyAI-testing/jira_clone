import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getStoredAuthToken } from 'shared/utils/authToken';
import { PageLoader } from 'shared/components';

const Authenticate = () => {
  const history = useHistory();

  useEffect(() => {
    if (getStoredAuthToken()) {
      history.push('/');
    } else {
      history.push('/login');
    }
  }, [history]);

  return <PageLoader />;
};

export default Authenticate;
