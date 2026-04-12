import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { storeAuthToken } from 'shared/utils/authToken';
import { Button } from 'shared/components';
import { USE_MOCK_DATA } from 'shared/utils/config';

import { Container, Title, Description, LoginButton } from './Styles';

const Authenticate = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    
    try {
      // If using mock data, automatically set a mock auth token
      if (USE_MOCK_DATA) {
        console.log('[Auth] Using mock authentication');
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
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
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>Welcome to Jira Clone</Title>
      <Description>Click the button below to create a guest account and start exploring.</Description>
      <LoginButton
        variant="success"
        isWorking={isLoading}
        disabled={false}
        onClick={handleLogin}
      >
        Login as Guest
      </LoginButton>
    </Container>
  );
};

export default Authenticate;
