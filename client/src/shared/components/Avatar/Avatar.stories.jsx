import React from 'react';

import Avatar from './index';
import sampleAvatarImg from './sample-avatar.png';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
};

// Standard avatar with image
export const WithImage = () => (
  <div style={{ padding: '20px', background: '#fff' }}>
    <Avatar avatarUrl="https://i.pravatar.cc/300" name="John Doe" size={64} />
  </div>
);

// Avatar showing initials letter variant
export const WithLetter = () => (
  <div style={{ padding: '20px', background: '#fff' }}>
    <Avatar name="Adam Smith" size={64} />
  </div>
);

// Avatar with gradient border matching the reference design
export const WithGradientBorder = () => (
  <div style={{ padding: '20px', background: '#fff', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
    <Avatar
      avatarUrl={sampleAvatarImg}
      name="Sample User"
      size={300}
      withGradientBorder
    />
  </div>
);

// Multiple sizes with gradient border
export const GradientBorderSizes = () => (
  <div style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '32px', background: '#fff' }}>
    <Avatar avatarUrl={sampleAvatarImg} name="User" size={32} withGradientBorder />
    <Avatar avatarUrl={sampleAvatarImg} name="User" size={48} withGradientBorder />
    <Avatar avatarUrl={sampleAvatarImg} name="User" size={64} withGradientBorder />
    <Avatar avatarUrl={sampleAvatarImg} name="User" size={96} withGradientBorder />
    <Avatar avatarUrl={sampleAvatarImg} name="User" size={120} withGradientBorder />
  </div>
);

// Letter avatar with gradient border
export const LetterWithGradientBorder = () => (
  <div style={{ padding: '32px', background: '#fff', display: 'inline-block' }}>
    <Avatar name="Adam Smith" size={80} withGradientBorder />
  </div>
);
