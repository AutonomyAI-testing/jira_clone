import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { getStoredAuthToken, storeAuthToken } from 'shared/utils/authToken';
import { PageLoader } from 'shared/components';
import { USE_MOCK_DATA } from 'shared/utils/config';

const Authenticate = () => {
  const history = useHistory();

  useEffect(() => {
    const createGuestAccount = async () => {
      try {
        // If using mock data, automatically set a mock auth token
        if (USE_MOCK_DATA) {
          console.log('[Auth] Using mock authentication');
          storeAuthToken('mock-auth-token');
          history.push('/');
          return;
        }

        // Otherwise, create a real guest account via API
        const { authToken } = await api.post('/authentication/guest');
        storeAuthToken(authToken);
        history.push('/');
      } catch (error) {
        toast.error(error);
      }
    };

    if (!getStoredAuthToken()) {
      createGuestAccount();
    }
  }, [history]);

  return <PageLoader />;
};

export default Authenticate;
