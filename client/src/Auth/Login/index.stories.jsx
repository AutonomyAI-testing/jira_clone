import React from 'react';
import { MemoryRouter } from 'react-router-dom';

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

// Inline story component that replicates the Login UI without hooks
const LoginStory = () => {
  const handleSocialLogin = (provider) => {
    console.log(`Social login clicked: ${provider}`);
  };

  const handleGuestLogin = () => {
    console.log('Guest login clicked');
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

        <Divider style={{ marginTop: '24px', marginBottom: '24px' }}>
          <DividerText>or</DividerText>
        </Divider>

        <Form
          initialValues={{ emailOrUsername: '', password: '' }}
          validations={{
            emailOrUsername: Form.is.required(),
            password: [Form.is.required(), Form.is.minLength(6)],
          }}
          onSubmit={(values, form) => {
            console.log('Login submitted:', values);
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

export default {
  title: 'Auth/Login',
  component: LoginStory,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {};

export const SocialLoginButtons = {
  name: 'Social Login Buttons',
};
