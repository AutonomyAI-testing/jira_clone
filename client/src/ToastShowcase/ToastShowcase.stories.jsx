import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ToastShowcase from './index';
import Toast from '../App/Toast';

export default {
  title: 'ToastShowcase/ToastShowcase',
  component: ToastShowcase,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => (
  <MemoryRouter>
    <Toast />
    <ToastShowcase />
  </MemoryRouter>
);
