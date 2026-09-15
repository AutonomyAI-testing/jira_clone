import React from 'react';
import Avatar from './index';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

// With avatar image URL
export const WithImage = {
  args: {
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    name: 'Alice Johnson',
    size: 32,
  },
};

// Initials fallback - no image
export const WithInitials = {
  args: {
    avatarUrl: null,
    name: 'Bob Smith',
    size: 32,
  },
};

// Multiple users with initials (different colors)
export const MultipleUsers = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px' }}>
      <Avatar name="Alice Johnson" size={32} />
      <Avatar name="Bob Smith" size={32} />
      <Avatar name="Carlos Rivera" size={32} />
      <Avatar name="Diana Chen" size={32} />
      <Avatar name="Ethan Park" size={32} />
    </div>
  ),
};

// Size variations
export const SizeVariations = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px' }}>
      <Avatar name="Alice Johnson" size={16} />
      <Avatar name="Alice Johnson" size={24} />
      <Avatar name="Alice Johnson" size={32} />
      <Avatar name="Alice Johnson" size={48} />
      <Avatar name="Alice Johnson" size={64} />
    </div>
  ),
};

// Size variations with image
export const SizeVariationsWithImage = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px' }}>
      <Avatar avatarUrl="https://i.pravatar.cc/150?img=5" name="Carol White" size={16} />
      <Avatar avatarUrl="https://i.pravatar.cc/150?img=5" name="Carol White" size={24} />
      <Avatar avatarUrl="https://i.pravatar.cc/150?img=5" name="Carol White" size={32} />
      <Avatar avatarUrl="https://i.pravatar.cc/150?img=5" name="Carol White" size={48} />
      <Avatar avatarUrl="https://i.pravatar.cc/150?img=5" name="Carol White" size={64} />
    </div>
  ),
};

// Default (no name, no image)
export const Default = {
  args: {
    size: 32,
  },
};
