import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { storeAuthToken } from 'shared/utils/authToken';
import { Form, Button } from 'shared/components';
import { USE_MOCK_DATA } from 'shared/utils/config';

import {
  Page,
  FormCard,
  LogoContainer,
  StyledLogo,
  AppName,
  Title,
  Subtitle,
  SubmitButton,
  Divider,
  GuestButton,
  FooterText,
  FooterLink,
} from './Styles';

const propTypes = {
  onSwitchToRegister: PropTypes.func,
};

const defaultProps = {
  onSwitchToRegister: undefined,
};

const Login = ({ onSwitchToRegister }) => {
  const history = useHistory();
  const [isWorking, setIsWorking] = useState(false);
  const [isGuestWorking, setIsGuestWorking] = useState(false);

  const handleLogin = async (values, form) => {
    try {
      setIsWorking(true);
      const { authToken } = await api.post('/authentication/login', {
        email: values.email,
        password: values.password,
      });
      storeAuthToken(authToken);
      history.push('/project');
    } catch (error) {
      Form.handleAPIError(error, form);
    } finally {
      setIsWorking(false);
    }
  };

  const handleGuestLogin = async () => {
    try {
      setIsGuestWorking(true);

      if (USE_MOCK_DATA) {
        storeAuthToken('mock-auth-token');
        history.push('/project');
        return;
      }

      const { authToken } = await api.post('/authentication/guest');
      storeAuthToken(authToken);
      history.push('/project');
    } catch (error) {
      toast.error(error);
    } finally {
      setIsGuestWorking(false);
    }
  };

  return (
    <Page>
      <FormCard>
        <LogoContainer>
          <StyledLogo size={36} />
          <AppName>Jira Clone</AppName>
        </LogoContainer>

        <Title>Welcome back</Title>
        <Subtitle>Sign in to your account to continue</Subtitle>

        <Form
          initialValues={{ email: '', password: '' }}
          validations={{
            email: [Form.is.required(), Form.is.email()],
            password: [Form.is.required(), Form.is.minLength(6)],
          }}
          onSubmit={handleLogin}
        >
          <Form.Element>
            <Form.Field.Input
              name="email"
              label="Email address"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
            <Form.Field.Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            <SubmitButton type="submit" variant="primary" isWorking={isWorking}>
              Sign in
            </SubmitButton>
          </Form.Element>
        </Form>

        <Divider />

        <GuestButton variant="secondary" isWorking={isGuestWorking} onClick={handleGuestLogin}>
          Continue as guest
        </GuestButton>

        {onSwitchToRegister && (
          <FooterText>
            Don&apos;t have an account?
            <FooterLink onClick={onSwitchToRegister}>Create one</FooterLink>
          </FooterText>
        )}
      </FormCard>
    </Page>
  );
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
