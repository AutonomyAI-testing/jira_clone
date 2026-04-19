import React from 'react';
import Button from './index';

export default {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Success = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Empty = {
  args: {
    variant: 'empty',
    children: 'Empty Button',
  },
};

export const WithIcon = {
  args: {
    variant: 'primary',
    children: 'With Icon',
    icon: 'plus',
    iconSize: 18,
  },
};

export const IconOnly = {
  args: {
    variant: 'secondary',
    icon: 'search',
    iconSize: 18,
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Working = {
  args: {
    variant: 'primary',
    children: 'Loading...',
    isWorking: true,
  },
};

export const WorkingIconOnly = {
  args: {
    variant: 'secondary',
    icon: 'search',
    isWorking: true,
  },
};
