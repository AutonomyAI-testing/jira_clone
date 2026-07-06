import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { storeAuthToken } from 'shared/utils/authToken';
import { USE_MOCK_DATA } from 'shared/utils/config';
import toast from 'shared/utils/toast';

import avatarImage from '../assets/avatar-login.png';

import {
  PageContainer,
  BackgroundOrbs,
  LoginCard,
  AvatarRing,
  AvatarImage,
  WelcomeText,
  Title,
  Subtitle,
  FormGroup,
  Label,
  Input,
  PasswordWrapper,
  TogglePassword,
  OptionsRow,
  RememberLabel,
  ForgotLink,
  LoginButton,
  Divider,
  GuestButton,
  FooterText,
  ErrorMessage,
} from './Styles';

const EyeIcon = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {open ? (
      <React.Fragment>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </React.Fragment>
    )}
  </svg>
);

const AvatarLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }

    setIsLoading(true);

    try {
      if (USE_MOCK_DATA) {
        // Simulate a short network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        storeAuthToken('mock-auth-token');
        history.push('/');
        return;
      }

      // Real authentication
      const { default: api } = await import('shared/utils/api');
      const { authToken } = await api.post('/authentication/login', { email, password });
      storeAuthToken(authToken);
      history.push('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setError('');
    setIsLoading(true);

    try {
      if (USE_MOCK_DATA) {
        await new Promise(resolve => setTimeout(resolve, 400));
        storeAuthToken('mock-auth-token');
        history.push('/');
        return;
      }

      const { default: api } = await import('shared/utils/api');
      const { authToken } = await api.post('/authentication/guest');
      storeAuthToken(authToken);
      history.push('/');
    } catch (err) {
      toast.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <BackgroundOrbs />
      <LoginCard>
        <AvatarRing>
          <AvatarImage>
            <img src={avatarImage} alt="User avatar" />
          </AvatarImage>
        </AvatarRing>

        <WelcomeText>
          <Title>Welcome back</Title>
          <Subtitle>Sign in to continue to your workspace</Subtitle>
        </WelcomeText>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <FormGroup>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <Label htmlFor="login-email">Email</Label>
            <Input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup style={{ marginBottom: '20px' }}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <Label htmlFor="login-password">Password</Label>
            <PasswordWrapper>
              <Input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={isLoading}
              />
              <TogglePassword
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                tabIndex={-1}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <EyeIcon open={showPassword} />
              </TogglePassword>
            </PasswordWrapper>
          </FormGroup>

          <OptionsRow>
            <RememberLabel>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
              />
              Remember me
            </RememberLabel>
            <ForgotLink href="#forgot" onClick={e => e.preventDefault()}>
              Forgot password?
            </ForgotLink>
          </OptionsRow>

          <LoginButton type="submit" disabled={isLoading}>
            <span>{isLoading ? 'Signing in…' : 'Sign In'}</span>
          </LoginButton>
        </form>

        <Divider><span>or</span></Divider>

        <GuestButton type="button" onClick={handleGuestLogin} disabled={isLoading}>
          Continue as Guest
        </GuestButton>

        <FooterText>
          Don&apos;t have an account?{' '}
          <a href="#signup" onClick={e => e.preventDefault()}>
            Sign up
          </a>
        </FooterText>
      </LoginCard>
    </PageContainer>
  );
};

export default AvatarLogin;
