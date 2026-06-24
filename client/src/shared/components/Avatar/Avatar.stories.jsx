import React from 'react';
import Avatar from './index';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export const WithImage = {
  args: {
    avatarUrl: 'https://i.pravatar.cc/300?img=47',
    name: 'John Doe',
    size: 48,
  },
};

export const WithInitialLetter = {
  args: {
    avatarUrl: null,
    name: 'Alice Smith',
    size: 48,
  },
};

export const DifferentSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar name="Bob" size={24} />
      <Avatar name="Carol" size={32} />
      <Avatar name="Dave" size={48} />
      <Avatar name="Eve" size={64} />
      <Avatar name="Frank" size={80} />
    </div>
  ),
};

export const MultipleUsers = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Avatar name="Alice" size={40} />
      <Avatar name="Bob" size={40} />
      <Avatar name="Carol" size={40} />
      <Avatar name="David" size={40} />
      <Avatar name="Eve" size={40} />
      <Avatar name="Frank" size={40} />
      <Avatar name="Grace" size={40} />
      <Avatar name="Henry" size={40} />
    </div>
  ),
};

export const WithImageAndFallback = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar avatarUrl="https://i.pravatar.cc/300?img=32" name="John" size={48} />
      <Avatar name="John" size={48} />
    </div>
  ),
};
