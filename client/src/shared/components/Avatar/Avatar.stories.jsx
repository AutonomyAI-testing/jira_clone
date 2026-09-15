import React from 'react';
import Avatar from './index';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

// Style constants for avatar showcase
const AVATAR_CONTAINER_STYLE = {
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  padding: '16px',
};

// Avatar size samples for the DifferentSizes story
const AVATAR_SIZES = [24, 32, 40, 56];

export const WithImage = {
  name: 'With Image URL',
  render: () => (
    <Avatar avatarUrl="https://i.ibb.co/6n0hLML/lord-gaben.jpg" name="Gaben" size={40} />
  ),
};

export const WithLetter = {
  name: 'Letter Fallback',
  render: () => <Avatar name="Alice" size={40} />,
};

export const MultipleLetters = {
  name: 'Multiple Letter Avatars',
  render: () => (
    <div style={AVATAR_CONTAINER_STYLE}>
      <Avatar name="Alice" size={40} />
      <Avatar name="Bob" size={40} />
      <Avatar name="Charlie" size={40} />
      <Avatar name="Diana" size={40} />
      <Avatar name="Eve" size={40} />
    </div>
  ),
};

export const DifferentSizes = {
  name: 'Different Sizes',
  render: () => (
    <div style={AVATAR_CONTAINER_STYLE}>
      {AVATAR_SIZES.map(size => (
        <Avatar key={size} name="Alice" size={size} />
      ))}
    </div>
  ),
};
