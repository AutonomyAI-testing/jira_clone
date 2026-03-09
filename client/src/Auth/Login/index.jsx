import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { storeAuthToken } from 'shared/utils/authToken';
import { Form } from 'shared/components';
import Logo from 'shared/components/Logo';

import {
  PageContainer,
  AuthCard,
  LogoSection,
  LogoText,
  FormHeading,
  ActionButton,
  SecondaryAction,
  Divider,
  BottomLinks,
  BottomLink,
  ForgotLink,
} from '../Styles';
import { FormElement, WorkingSpinner } from './Styles';

const Login = () => {
  const history = useHistory();
  const [isWorking, setIsWorking] = useState(false);
  const [isGuestWorking, setIsGuestWorking] = useState(false);

  const handleSubmit = async (values, form) => {
    try {
      setIsWorking(true);
      const { authToken } = await api.post('/authentication/login', values);
      storeAuthToken(authToken);
      history.push('/project');
    } catch (error) {
      Form.handleAPIError(error, form);
    } finally {
      setIsWorking(false);
    }
  };

  const handleGuestAccess = async () => {
    try {
      setIsGuestWorking(true);
      const { authToken } = await api.post('/authentication/guest');
      storeAuthToken(authToken);
      history.push('/project');
    } catch (error) {
      toast.error(error);
      setIsGuestWorking(false);
    }
  };

  return (
    <PageContainer>
      <AuthCard>
        <LogoSection>
          <Logo size={44} />
          <LogoText>Jira Clone</LogoText>
        </LogoSection>

        <FormHeading>Log in to your account</FormHeading>

        <Form
          initialValues={{ username: '', password: '' }}
          validations={{
            username: Form.is.required(),
            password: [Form.is.required(), Form.is.minLength(6)],
          }}
          onSubmit={handleSubmit}
        >
          <FormElement>
            <Form.Field.Input
              name="username"
              label="Username"
              placeholder="Enter your username"
            />
            <Form.Field.Input
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <ForgotLink to="/forgot-password">Forgot password?</ForgotLink>

            <ActionButton type="submit" disabled={isWorking}>
              {isWorking ? <WorkingSpinner size={20} color="#fff" /> : 'Log in'}
            </ActionButton>

            <Divider>or</Divider>

            <SecondaryAction type="button" onClick={handleGuestAccess} disabled={isGuestWorking}>
              {isGuestWorking ? (
                <WorkingSpinner size={20} color="#42526E" />
              ) : (
                'Continue as Guest'
              )}
            </SecondaryAction>
          </FormElement>
        </Form>

        <BottomLinks>
          {"Don't have an account? "}
          <BottomLink to="/signup">Sign up</BottomLink>
        </BottomLinks>
      </AuthCard>
    </PageContainer>
  );
};

export default Login;
