import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { storeAuthToken } from 'shared/utils/authToken';
import avatarImg from '../avatar.png';

import {
  PageWrapper,
  Card,
  AvatarContainer,
  AvatarRing,
  AvatarImage,
  WelcomeText,
  Title,
  Subtitle,
  Form,
  InputGroup,
  Label,
  StyledInput,
  LoginButton,
  Divider,
  DividerText,
  GuestButton,
  ErrorMessage,
} from './Styles';

// Mock credentials for demo purposes
const MOCK_USERS = [
  { username: 'admin', password: 'password123' },
  { username: 'demo', password: 'demo' },
  { username: 'guest', password: 'guest' },
];

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Please enter your username and password.');
      return;
    }

    setIsLoading(true);

    // Simulate a brief auth delay for realism
    await new Promise(resolve => setTimeout(resolve, 600));

    const validUser = MOCK_USERS.find(
      u => u.username === username.trim() && u.password === password,
    );

    if (validUser) {
      storeAuthToken('mock-auth-token');
      history.push('/project');
    } else {
      setError('Incorrect username or password. Try: demo / demo');
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    storeAuthToken('mock-auth-token');
    history.push('/project');
  };

  return (
    <PageWrapper>
      <Card>
        <AvatarContainer>
          <AvatarRing>
            <AvatarImage src={avatarImg} alt="Avatar" />
          </AvatarRing>
        </AvatarContainer>

        <WelcomeText>
          <Title>Welcome back</Title>
          <Subtitle>Sign in to continue to Jira Clone</Subtitle>
        </WelcomeText>

        <Form onSubmit={handleLogin}>
          <InputGroup>
            <Label htmlFor="username">Username</Label>
            <StyledInput
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <StyledInput
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </LoginButton>

          <Divider>
            <DividerText>or</DividerText>
          </Divider>

          <GuestButton type="button" onClick={handleGuestLogin}>
            Continue as Guest
          </GuestButton>
        </Form>
      </Card>
    </PageWrapper>
  );
};

export default LoginPage;
