import React from 'react';
import Avatar from './index';

// Shared layout style for displaying avatars in a row
const rowContainerStyle = {
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
};

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export const WithImage = {
  name: 'With Image URL',
  render: () => (
    <div style={rowContainerStyle}>
      <Avatar
        avatarUrl="https://i.ibb.co/6n0hLML/lord-gaben.jpg"
        name="Gabe Newell"
        size={32}
      />
      <Avatar
        avatarUrl="https://i.ibb.co/6n0hLML/lord-gaben.jpg"
        name="Gabe Newell"
        size={48}
      />
      <Avatar
        avatarUrl="https://i.ibb.co/6n0hLML/lord-gaben.jpg"
        name="Gabe Newell"
        size={64}
      />
    </div>
  ),
};

export const WithName = {
  name: 'With Name (Letter Avatar)',
  render: () => (
    <div style={rowContainerStyle}>
      <Avatar name="Alice Johnson" size={32} />
      <Avatar name="Bob Martinez" size={32} />
      <Avatar name="Carol Williams" size={32} />
      <Avatar name="David Chen" size={32} />
      <Avatar name="Emma Davis" size={32} />
    </div>
  ),
};

export const Sizes = {
  name: 'Different Sizes',
  render: () => (
    <div style={rowContainerStyle}>
      <Avatar name="Sam Taylor" size={24} />
      <Avatar name="Sam Taylor" size={32} />
      <Avatar name="Sam Taylor" size={48} />
      <Avatar name="Sam Taylor" size={64} />
    </div>
  ),
};
