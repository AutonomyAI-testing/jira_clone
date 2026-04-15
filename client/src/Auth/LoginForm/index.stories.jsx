import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from './index';

export default {
  title: 'Auth/LoginForm',
  component: LoginForm,
  decorators: [
    (Story) => React.createElement(MemoryRouter, null, React.createElement(Story, null)),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    onLoginSuccess: () => {},
  },
};

export const Loading = {
  args: {
    onLoginSuccess: () => {},
  },
  name: 'Loading State',
};
