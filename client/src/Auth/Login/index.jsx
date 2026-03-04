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
} from './Styles';

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    if (getStoredAuthToken()) {
      history.push('/');
    }
  }, [history]);

  const handleGuestLogin = () => {
    history.push('/authenticate');
  };

  return (
    <PageContainer>
      <LogoSection>
        <StyledLogo size={48} />
        <AppName>Jira Clone</AppName>
      </LogoSection>

      <FormContainer>
        <Title>Log in to your account</Title>

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
        <Divider>
          <DividerText>or</DividerText>
        </Divider>
        <GuestLink onClick={handleGuestLogin}>Continue as Guest</GuestLink>
      </ActionSection>
    </PageContainer>
  );
};

export default Login;
