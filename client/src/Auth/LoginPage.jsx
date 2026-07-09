import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { storeAuthToken } from 'shared/utils/authToken';
import { USE_MOCK_DATA } from 'shared/utils/config';
import { Form } from 'shared/components';

import avatarSrc from './assets/avatar.png';
import {
  PageContainer,
  LeftPanel,
  RightPanel,
  AvatarWrapper,
  AvatarInner,
  AvatarImage,
  AvatarFallback,
  BrandingBlock,
  AppTitle,
  Tagline,
  FormContainer,
  FormHeader,
  FormTitle,
  FormSubtitle,
  FieldGroup,
  SubmitButton,
  DividerRow,
  DividerLine,
  DividerLabel,
  GuestButton,
} from './Styles';

const LoginPage = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [isGuestLoading, setIsGuestLoading] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const handleLogin = async (values, form) => {
    try {
      setIsLoading(true);
      if (USE_MOCK_DATA) {
        // Mock: accept any credentials
        await new Promise(resolve => setTimeout(resolve, 600));
        storeAuthToken('mock-auth-token');
        history.push('/project');
      } else {
        const { authToken } = await api.post('/authentication/login', {
          email: values.email,
          password: values.password,
        });
        storeAuthToken(authToken);
        history.push('/project');
      }
    } catch (error) {
      Form.handleAPIError(error, form);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    try {
      setIsGuestLoading(true);
      if (USE_MOCK_DATA) {
        await new Promise(resolve => setTimeout(resolve, 400));
        storeAuthToken('mock-auth-token');
        history.push('/project');
      } else {
        const { authToken } = await api.post('/authentication/guest');
        storeAuthToken(authToken);
        history.push('/project');
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsGuestLoading(false);
    }
  };

  return (
    <PageContainer>
      <LeftPanel>
        <AvatarWrapper>
          <AvatarInner>
            {!avatarError ? (
              <AvatarImage
                src={avatarSrc}
                alt="App mascot"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <AvatarFallback>
                <span role="img" aria-label="lightning bolt">⚡</span>
              </AvatarFallback>
            )}
          </AvatarInner>
        </AvatarWrapper>

        <BrandingBlock>
          <AppTitle>Jira Clone</AppTitle>
          <Tagline>Track. Collaborate. Ship.</Tagline>
        </BrandingBlock>
      </LeftPanel>

      <RightPanel>
        <FormContainer>
          <FormHeader>
            <FormTitle>Welcome back</FormTitle>
            <FormSubtitle>Sign in to your account</FormSubtitle>
          </FormHeader>

          <Form
            initialValues={{ email: '', password: '' }}
            validations={{
              email: [Form.is.required(), Form.is.email()],
              password: [Form.is.required(), Form.is.minLength(6)],
            }}
            onSubmit={handleLogin}
          >
            {() => (
              <Form.Element>
                <FieldGroup>
                  <Form.Field.Input
                    name="email"
                    label="Email address"
                    type="email"
                    placeholder="you@example.com"
                  />
                  <Form.Field.Input
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                  />
                </FieldGroup>

                <SubmitButton variant="primary" type="submit" isWorking={isLoading}>
                  Sign In
                </SubmitButton>
              </Form.Element>
            )}
          </Form>

          <DividerRow>
            <DividerLine />
            <DividerLabel>or</DividerLabel>
            <DividerLine />
          </DividerRow>

          <GuestButton
            variant="empty"
            onClick={handleGuestLogin}
            isWorking={isGuestLoading}
          >
            Continue as Guest
          </GuestButton>
        </FormContainer>
      </RightPanel>
    </PageContainer>
  );
};

export default LoginPage;
