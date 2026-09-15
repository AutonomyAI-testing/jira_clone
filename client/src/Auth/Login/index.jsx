import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Logo } from 'shared/components';
import { storeAuthToken } from 'shared/utils/authToken';

import avatarImg from './avatar.png';

import {
  PageContainer,
  LeftPanel,
  LeftContent,
  AvatarRing,
  AvatarInner,
  AvatarImg,
  LeftTitle,
  LeftSubtitle,
  DotsRow,
  Dot,
  RightPanel,
  FormCard,
  LogoRow,
  AppName,
  FormTitle,
  FormSubtitle,
  FieldGroup,
  FieldLabel,
  StyledInputWrap,
  PasswordToggle,
  ForgotLink,
  SubmitButton,
  Divider,
  GuestButton,
  SignupRow,
  SignupLink,
  ErrorMessage,
} from './Styles';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setIsLoading(true);

    // Simulate network latency for the demo
    await new Promise(resolve => setTimeout(resolve, 600));

    storeAuthToken('mock-auth-token');
    history.push('/');

    setIsLoading(false);
  };

  const handleGuestAccess = () => {
    storeAuthToken('mock-auth-token');
    history.push('/');
  };

  return (
    <PageContainer>
      {/* Left decorative panel */}
      <LeftPanel>
        <LeftContent>
          <AvatarRing>
            <AvatarInner>
              <AvatarImg src={avatarImg} alt="Jira project mascot" />
            </AvatarInner>
          </AvatarRing>

          <LeftTitle>Manage your projects smarter</LeftTitle>
          <LeftSubtitle>
            Track issues, plan sprints, and collaborate with your team — all in one place.
          </LeftSubtitle>

          <DotsRow>
            <Dot active />
            <Dot />
            <Dot />
          </DotsRow>
        </LeftContent>
      </LeftPanel>

      {/* Right form panel */}
      <RightPanel>
        <FormCard>
          <LogoRow>
            <Logo size={32} />
            <AppName>Jira Clone</AppName>
          </LogoRow>

          <FormTitle>Welcome back</FormTitle>
          <FormSubtitle>Sign in to your workspace</FormSubtitle>

          <form onSubmit={handleLogin} noValidate>
            <FieldGroup>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <FieldLabel htmlFor="login-email">Email address</FieldLabel>
              <StyledInputWrap>
                <input
                  id="login-email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </StyledInputWrap>
            </FieldGroup>

            <FieldGroup>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <FieldLabel htmlFor="login-password">Password</FieldLabel>
              <StyledInputWrap>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  style={{ paddingRight: '42px' }}
                />
                <PasswordToggle
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </PasswordToggle>
              </StyledInputWrap>
              <ForgotLink type="button" onClick={() => {}}>
                Forgot password?
              </ForgotLink>
            </FieldGroup>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? 'Signing in…' : 'Sign in'}
            </SubmitButton>
          </form>

          <Divider>
            <span>or</span>
          </Divider>

          <GuestButton type="button" onClick={handleGuestAccess}>
            Continue as guest
          </GuestButton>

          <SignupRow>
            Don&apos;t have an account?
            <SignupLink type="button" onClick={() => {}}>
              Sign up for free
            </SignupLink>
          </SignupRow>
        </FormCard>
      </RightPanel>
    </PageContainer>
  );
};

export default Login;
