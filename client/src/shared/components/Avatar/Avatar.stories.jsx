import React from 'react';
import Avatar from './index';

// Only lord-gaben URL is accessible; use letter fallbacks for others
const AVATAR_LORD_GABEN = 'https://i.ibb.co/6n0hLML/lord-gaben.jpg';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

// Primary: With profile image URL — large size to showcase image
export const WithImage = {
  args: {
    avatarUrl: AVATAR_LORD_GABEN,
    name: 'Lord Gaben',
    size: 120,
  },
};

// Letter fallback - no image, colored background derived from name
export const LetterFallback = {
  args: {
    avatarUrl: null,
    name: 'John Doe',
    size: 120,
  },
};

// Different letter fallback colors derived from different names
export const LetterFallbackVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px' }}>
      <Avatar name="Alice Johnson" size={56} />
      <Avatar name="Bob Smith" size={56} />
      <Avatar name="Carol White" size={56} />
      <Avatar name="David Brown" size={56} />
      <Avatar name="Eva Green" size={56} />
    </div>
  ),
};

// Different sizes — small (24), medium (32), large (48), extra large (64), huge (96)
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', padding: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar avatarUrl={AVATAR_LORD_GABEN} name="Lord Gaben" size={24} />
        <div style={{ fontSize: '11px', marginTop: '4px', color: '#666' }}>24px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar avatarUrl={AVATAR_LORD_GABEN} name="Lord Gaben" size={32} />
        <div style={{ fontSize: '11px', marginTop: '4px', color: '#666' }}>32px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar avatarUrl={AVATAR_LORD_GABEN} name="Lord Gaben" size={48} />
        <div style={{ fontSize: '11px', marginTop: '4px', color: '#666' }}>48px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar avatarUrl={AVATAR_LORD_GABEN} name="Lord Gaben" size={64} />
        <div style={{ fontSize: '11px', marginTop: '4px', color: '#666' }}>64px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar avatarUrl={AVATAR_LORD_GABEN} name="Lord Gaben" size={96} />
        <div style={{ fontSize: '11px', marginTop: '4px', color: '#666' }}>96px</div>
      </div>
    </div>
  ),
};

// Mix of image avatar and letter fallback avatars (simulates project team)
export const ProjectUsers = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px' }}>
      <Avatar avatarUrl={AVATAR_LORD_GABEN} name="Lord Gaben" size={40} />
      <Avatar name="Pickle Rick" size={40} />
      <Avatar name="Baby Yoda" size={40} />
      <Avatar name="No Image User" size={40} />
    </div>
  ),
};
