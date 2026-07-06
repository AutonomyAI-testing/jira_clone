import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { storeAuthToken } from 'shared/utils/authToken';
import { USE_MOCK_DATA } from 'shared/utils/config';

import avatarImg from './assets/avatar.png';
import {
  Page,
  Card,
  AvatarWrapper,
  AvatarInner,
  AvatarImage,
  Title,
  Subtitle,
  FieldGroup,
  FieldLabel,
  FieldInput,
  FieldError,
  SubmitButton,
  Divider,
  GuestLink,
} from './Styles';

const Login = () => {
  const history = useHistory();
  const [isWorking, setIsWorking] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    setIsWorking(true);
    try {
      if (USE_MOCK_DATA) {
        // Simulate a short delay for realism
        await new Promise(resolve => setTimeout(resolve, 500));
        storeAuthToken('mock-auth-token');
        history.push('/');
      } else {
        const { authToken } = await api.post('/authentication/login', { email, password });
        storeAuthToken(authToken);
        history.push('/');
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsWorking(false);
    }
  };

  const handleGuestAccess = () => {
    storeAuthToken('mock-auth-token');
    history.push('/');
  };

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/.+@.+\..+/.test(values.email)) {
      errors.email = 'Must be a valid email';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Must be at least 6 characters';
    }
    return errors;
  };

  return (
    <Page>
      <Card>
        <AvatarWrapper>
          <AvatarInner>
            <AvatarImage src={avatarImg} alt="Login avatar" />
          </AvatarInner>
        </AvatarWrapper>

        <Title>Welcome back</Title>
        <Subtitle>Sign in to your account to continue</Subtitle>

        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validate}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange={false}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit: formikSubmit }) => (
            <form onSubmit={formikSubmit} noValidate>
              <FieldGroup>
                <FieldLabel htmlFor="login-email">Email</FieldLabel>
                <FieldInput
                  id="login-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={touched.email && !!errors.email}
                  autoComplete="email"
                />
                {touched.email && errors.email && <FieldError>{errors.email}</FieldError>}
              </FieldGroup>

              <FieldGroup>
                <FieldLabel htmlFor="login-password">Password</FieldLabel>
                <FieldInput
                  id="login-password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={touched.password && !!errors.password}
                  autoComplete="current-password"
                />
                {touched.password && errors.password && (
                  <FieldError>{errors.password}</FieldError>
                )}
              </FieldGroup>

              <SubmitButton type="submit" disabled={isWorking}>
                {isWorking ? 'Signing in…' : 'Sign In'}
              </SubmitButton>
            </form>
          )}
        </Formik>

        <Divider />

        <GuestLink onClick={handleGuestAccess}>Continue as guest</GuestLink>
      </Card>
    </Page>
  );
};

export default Login;
