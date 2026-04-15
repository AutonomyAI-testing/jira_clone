import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { storeAuthToken } from 'shared/utils/authToken';
import { Form } from 'shared/components';
import useApi from 'shared/hooks/api';

import {
  Container,
  FormWrapper,
  FormElement,
  Heading,
  FieldWrapper,
  Actions,
  SubmitButton,
} from './Styles';

const propTypes = {
  onLoginSuccess: PropTypes.func,
};

const defaultProps = {
  onLoginSuccess: () => {},
};

const LoginForm = ({ onLoginSuccess }) => {
  const history = useHistory();
  const [{ isLoading }, login] = useApi.post('/authentication/login');

  const handleSubmit = async (values, form) => {
    try {
      const { authToken } = await login(values);
      storeAuthToken(authToken);
      toast.success('Welcome! You have been logged in successfully.');
      onLoginSuccess();
      history.push('/');
    } catch (error) {
      Form.handleAPIError(error, form);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Heading>Sign in</Heading>
        <Form
          initialValues={{
            email: '',
            password: '',
          }}
          validations={{
            email: [Form.is.required(), Form.is.email()],
            password: Form.is.required(),
          }}
          onSubmit={handleSubmit}
        >
          <FormElement>
            <FieldWrapper>
              <Form.Field.Input
                name="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                autoFocus
              />
            </FieldWrapper>

            <FieldWrapper>
              <Form.Field.Input
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
            </FieldWrapper>

            <Actions>
              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign in'}
              </SubmitButton>
            </Actions>
          </FormElement>
        </Form>
      </FormWrapper>
    </Container>
  );
};

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
