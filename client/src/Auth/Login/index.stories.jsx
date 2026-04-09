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

/**
 * Story component that demonstrates the Login UI in Storybook.
 * Uses no-op handlers since we're only demonstrating the visual appearance.
 */
const LoginStory = () => {
  const handleSocialLogin = () => {
    // No-op in Storybook - visual demonstration only
  };

  const handleGuestLogin = () => {
    // No-op in Storybook - visual demonstration only
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
          onSubmit={() => {
            // No-op in Storybook - visual demonstration only
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
    Story => (
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
