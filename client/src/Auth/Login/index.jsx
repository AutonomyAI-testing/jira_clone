import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { getStoredAuthToken, storeAuthToken } from 'shared/utils/authToken';
import { Form } from 'shared/components';
import { USE_MOCK_DATA } from 'shared/utils/config';

import {
  PageContainer,
  LoginCard,
  LogoSection,
  StyledLogo,
  AppTitle,
  FormHeading,
  FormElement,
  ActionButton,
  Divider,
  GuestButton,
} from './Styles';

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    if (getStoredAuthToken()) {
      history.push('/');
    }
  }, [history]);

  const handleGuestLogin = async () => {
    try {
      if (USE_MOCK_DATA) {
        storeAuthToken('mock-auth-token');
        history.push('/');
        return;
      }
      const { authToken } = await api.post('/authentication/guest');
      storeAuthToken(authToken);
      history.push('/');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <PageContainer>
      <LoginCard>
        <LogoSection>
          <StyledLogo size={52} />
          <AppTitle>Jira Clone</AppTitle>
        </LogoSection>

        <FormHeading>Log in to your account</FormHeading>

        <Form
          initialValues={{ email: '', password: '' }}
          validations={{
            email: [Form.is.required(), Form.is.email()],
            password: [Form.is.required(), Form.is.minLength(6)],
          }}
          validateOnBlur
          onSubmit={async (values, form) => {
            try {
              const { authToken } = await api.post('/authentication/login', values);
              storeAuthToken(authToken);
              history.push('/');
            } catch (error) {
              Form.handleAPIError(error, form);
            }
          }}
        >
          {({ isSubmitting }) => (
            <FormElement>
              <Form.Field.Input
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <Form.Field.Input
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <ActionButton type="submit" variant="primary" isWorking={isSubmitting}>
                Log in
              </ActionButton>
            </FormElement>
          )}
        </Form>

        <Divider>or</Divider>

        <GuestButton variant="secondary" onClick={handleGuestLogin}>
          Continue as Guest
        </GuestButton>
      </LoginCard>
    </PageContainer>
  );
};

export default Login;
