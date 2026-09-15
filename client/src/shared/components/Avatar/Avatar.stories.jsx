import React from 'react';
import Avatar from './index';
import catAvatarUrl from './assets/catAvatarBase64';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

// Primary story: cat default at size 48 with subtle box-shadow
export const CatDefaultSize48 = {
  args: {
    size: 48,
  },
};

// Default (no avatarUrl, no name) — should display the cat photo
export const Default = {
  args: {
    size: 32,
  },
};

// Default with name — still shows cat photo
export const DefaultWithName = {
  args: {
    size: 32,
    name: 'Rick Sanchez',
  },
};

// Custom avatarUrl variant
export const CustomAvatarUrl = {
  args: {
    size: 32,
    avatarUrl: catAvatarUrl,
    name: 'Custom User',
  },
};

// Multiple sizes showing cat default
export const MultiSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: '#f5f6fa', borderRadius: '8px' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar size={24} />
        <div style={{ fontSize: '11px', marginTop: '6px', color: '#555' }}>24px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar size={32} />
        <div style={{ fontSize: '11px', marginTop: '6px', color: '#555' }}>32px</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar size={48} />
        <div style={{ fontSize: '11px', marginTop: '6px', color: '#555' }}>48px</div>
      </div>
    </div>
  ),
};
