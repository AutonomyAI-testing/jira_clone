import React, { useState } from 'react';
import PropTypes from 'prop-types';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { storeAuthToken } from 'shared/utils/authToken';
import { Form } from 'shared/components';

import {
  PageContainer,
  FormContainer,
  LogoContainer,
  StyledLogo,
  Heading,
  Subheading,
  SubmitButton,
  Divider,
  GuestButton,
  ErrorMessage,
} from './Styles';

const propTypes = {
  onAuthenticated: PropTypes.func.isRequired,
};

const Login = ({ onAuthenticated }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isGuestLoading, setIsGuestLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const handleLogin = async (values, form) => {
    try {
      setIsLoggingIn(true);
      setAuthError('');
      const { authToken } = await api.post('/authentication/login', {
        email: values.email,
        password: values.password,
      });
      storeAuthToken(authToken);
      onAuthenticated();
    } catch (error) {
      if (error.data && error.data.fields) {
        form.setErrors(error.data.fields);
      } else if (error.message) {
        setAuthError(error.message);
      } else {
        setAuthError('Invalid email or password. Please try again.');
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGuestLogin = async () => {
    try {
      setIsGuestLoading(true);
      setAuthError('');
      const { authToken } = await api.post('/authentication/guest');
      storeAuthToken(authToken);
      onAuthenticated();
    } catch (error) {
      toast.error(error);
    } finally {
      setIsGuestLoading(false);
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <LogoContainer>
          <StyledLogo size={48} />
        </LogoContainer>
        <Heading>Sign in to Jira</Heading>
        <Subheading>Enter your credentials to access your projects</Subheading>

        <Form
          initialValues={{ email: '', password: '' }}
          validations={{
            email: [Form.is.required(), Form.is.email()],
            password: Form.is.required(),
          }}
          onSubmit={handleLogin}
        >
          <Form.Element>
            <Form.Field.Input
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email address"
            />
            <Form.Field.Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            {authError && <ErrorMessage>{authError}</ErrorMessage>}

            <SubmitButton type="submit" variant="primary" isWorking={isLoggingIn}>
              Sign In
            </SubmitButton>
          </Form.Element>
        </Form>

        <Divider>or</Divider>

        <GuestButton variant="secondary" isWorking={isGuestLoading} onClick={handleGuestLogin}>
          Continue as Guest
        </GuestButton>
      </FormContainer>
    </PageContainer>
  );
};

Login.propTypes = propTypes;

export default Login;
