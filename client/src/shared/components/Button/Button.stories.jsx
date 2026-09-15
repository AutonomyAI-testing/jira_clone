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

export const AllVariants = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="empty">Empty</Button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Button variant="primary" icon="plus" iconSize={18}>
          With Icon
        </Button>
        <Button variant="secondary" icon="search" iconSize={18} />
        <Button variant="primary" disabled>
          Disabled
        </Button>
        <Button variant="primary" isWorking>
          Working
        </Button>
        <Button variant="secondary" icon="search" isWorking />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
