import React from 'react';
import Avatar from './index';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

// With image URL
export const WithImage = {
  name: 'With Image URL',
  render: () => (
    <Avatar avatarUrl="https://i.ibb.co/7JM1P2r/picImage.png" name="John Doe" size={32} />
  ),
};

// Letter / initials fallback variants — different names produce different colors
export const LetterVariants = {
  name: 'Letter Initials (Color Variations)',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar name="Alice Johnson" size={32} />
      <Avatar name="Bob Smith" size={32} />
      <Avatar name="Carlos Rivera" size={32} />
      <Avatar name="Diana Prince" size={32} />
      <Avatar name="Edward Norton" size={32} />
      <Avatar name="Fiona Green" size={32} />
      <Avatar name="George Miller" size={32} />
      <Avatar name="Hannah White" size={32} />
    </div>
  ),
};

// Different sizes
export const Sizes = {
  name: 'Size Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Alice Johnson" size={16} />
        <div style={{ fontSize: 11, marginTop: 4, color: '#666' }}>16px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Bob Smith" size={24} />
        <div style={{ fontSize: 11, marginTop: 4, color: '#666' }}>24px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Carlos Rivera" size={32} />
        <div style={{ fontSize: 11, marginTop: 4, color: '#666' }}>32px (default)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Diana Prince" size={48} />
        <div style={{ fontSize: 11, marginTop: 4, color: '#666' }}>48px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Edward Norton" size={64} />
        <div style={{ fontSize: 11, marginTop: 4, color: '#666' }}>64px</div>
      </div>
    </div>
  ),
};

// Default single avatar (letter variant)
export const Default = {
  name: 'Default (No Image)',
  render: () => <Avatar name="Jane Doe" size={32} />,
};

// Grouped avatars (overlapping) — common usage pattern
export const GroupedAvatars = {
  name: 'Grouped / Overlapping',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {['Alice Johnson', 'Bob Smith', 'Carlos Rivera', 'Diana Prince'].map((name, i) => (
        <div
          key={name}
          style={{ marginLeft: i === 0 ? 0 : -8, zIndex: 4 - i, position: 'relative' }}
        >
          <Avatar name={name} size={32} />
        </div>
      ))}
    </div>
  ),
};
