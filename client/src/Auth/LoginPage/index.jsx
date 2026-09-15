import React, { useState } from 'react';

import avatarUrl from 'shared/assets/avatar-anime.png';

import {
  PageContainer,
  Card,
  AvatarWrapper,
  StyledAvatar,
  WelcomeText,
  SubText,
  FormGroup,
  Label,
  StyledInput,
  ForgotLink,
  LoginButton,
  Divider,
  SignUpRow,
} from './Styles';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: wire up to authentication API
    setTimeout(() => setIsLoading(false), 1200);
  };

  return (
    <PageContainer>
      <Card>
        <AvatarWrapper>
          <StyledAvatar avatarUrl={avatarUrl} size={88} name="User" />
        </AvatarWrapper>

        <WelcomeText>Welcome back</WelcomeText>
        <SubText>Sign in to continue to your workspace</SubText>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <StyledInput
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <StyledInput
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </FormGroup>

          <ForgotLink href="#">Forgot password?</ForgotLink>

          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in…' : 'Sign in'}
          </LoginButton>
        </form>

        <Divider>
          <span>or</span>
        </Divider>

        <SignUpRow>
          Don&apos;t have an account?{' '}
          <a href="/register">Sign up</a>
        </SignUpRow>
      </Card>
    </PageContainer>
  );
};

export default LoginPage;
