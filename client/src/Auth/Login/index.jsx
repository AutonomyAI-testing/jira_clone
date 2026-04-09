import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import { getStoredAuthToken, storeAuthToken } from 'shared/utils/authToken';
import { Form } from 'shared/components';

import {
  PageContainer,
  LogoSection,
  StyledLogo,
  AppName,
  FormContainer,
  Title,
  SubmitButton,
  ActionSection,
  Divider,
  DividerText,
  GuestLink,
  SocialButtonsContainer,
  SocialButton,
} from './Styles';

const Login = () => {
  const history = useHistory();

  // Redirect to home if user is already authenticated
  useEffect(() => {
    if (getStoredAuthToken()) {
      history.push('/');
    }
  }, [history]);

  const handleGuestLogin = () => {
    history.push('/authenticate');
  };

  const handleSocialLogin = async provider => {
    try {
      const { authToken } = await api.post(`/authentication/social/${provider}`);
      storeAuthToken(authToken);
      history.push('/');
    } catch (error) {
      // API errors are handled by the api utility with toast notifications
    }
  };

  return (
    <PageContainer>
      <LogoSection>
        <StyledLogo size={48} />
        <AppName>Jira Clone</AppName>
      </LogoSection>

      <FormContainer>
        <Title>Log in to your account</Title>

        <SocialButtonsContainer>
          <SocialButton variant="empty" onClick={() => handleSocialLogin('google')}>
            Continue with Google
          </SocialButton>
          <SocialButton variant="empty" onClick={() => handleSocialLogin('facebook')}>
            Continue with Facebook
          </SocialButton>
          <SocialButton variant="empty" onClick={() => handleSocialLogin('github')}>
            Continue with GitHub
          </SocialButton>
        </SocialButtonsContainer>

        <Divider>
          <DividerText>or</DividerText>
        </Divider>

        <Form
          initialValues={{ emailOrUsername: '', password: '' }}
          validations={{
            emailOrUsername: Form.is.required(),
            password: [Form.is.required(), Form.is.minLength(6)],
          }}
          onSubmit={async (values, form) => {
            try {
              const { authToken } = await api.post('/authentication/login', {
                emailOrUsername: values.emailOrUsername,
                password: values.password,
              });
              storeAuthToken(authToken);
              history.push('/');
            } catch (error) {
              // Form handles API errors and displays field-specific validation messages
              Form.handleAPIError(error, form);
            }
          }}
        >
          <Form.Element>
            <Form.Field.Input
              name="emailOrUsername"
              label="Email or Username"
              placeholder="Enter your email or username"
            />
            <Form.Field.Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <SubmitButton type="submit" variant="primary">
              Log In
            </SubmitButton>
          </Form.Element>
        </Form>
      </FormContainer>

      <ActionSection>
        <GuestLink onClick={handleGuestLogin}>Continue as Guest</GuestLink>
      </ActionSection>
    </PageContainer>
  );
};

export default Login;
