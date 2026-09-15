import React from 'react';
import Avatar from './index';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

export const LetterWithGradientRing = {
  name: 'Letter Avatar — With Gradient Ring',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', padding: 16 }}>
      <Avatar name="Ada" size={64} hasGradientBorder />
      <Avatar name="Bob" size={64} hasGradientBorder />
      <Avatar name="Carlos" size={64} hasGradientBorder />
    </div>
  ),
};

export const ImageWithGradientRing = {
  name: 'Image Avatar — With Gradient Ring',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', padding: 16 }}>
      <Avatar
        avatarUrl="https://i.pravatar.cc/300?img=1"
        name="Alice"
        size={64}
        hasGradientBorder
      />
      <Avatar avatarUrl="https://i.pravatar.cc/300?img=2" name="Bob" size={64} hasGradientBorder />
      <Avatar
        avatarUrl="https://i.pravatar.cc/300?img=3"
        name="Carol"
        size={64}
        hasGradientBorder
      />
    </div>
  ),
};

export const WithoutRing = {
  name: 'Letter Avatar — Without Ring (Comparison)',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', padding: 16 }}>
      <Avatar name="Ada" size={64} />
      <Avatar name="Bob" size={64} />
      <Avatar name="Carlos" size={64} />
    </div>
  ),
};

export const AllSizes = {
  name: 'Gradient Ring — Multiple Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', padding: 16 }}>
      <Avatar name="Ada" size={24} hasGradientBorder />
      <Avatar name="Ada" size={32} hasGradientBorder />
      <Avatar name="Ada" size={48} hasGradientBorder />
      <Avatar name="Ada" size={64} hasGradientBorder />
      <Avatar name="Ada" size={80} hasGradientBorder />
    </div>
  ),
};
