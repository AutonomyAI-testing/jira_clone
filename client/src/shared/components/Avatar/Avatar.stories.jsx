import React from 'react';
import Avatar from './index';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

// With profile image URL
export const WithProfileImage = {
  name: 'With Profile Image',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar
        avatarUrl="https://i.pravatar.cc/150?img=47"
        name="Alice Johnson"
        size={32}
      />
    </div>
  ),
};

// Letter / Initials fallback — different colors based on name
export const LetterFallbackColors = {
  name: 'Letter Fallback – Different Colors',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Alice Johnson" size={32} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Alice</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Bob Martinez" size={32} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Bob</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Caroline Wang" size={32} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Caroline</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="David Kim" size={32} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>David</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Elena Rodriguez" size={32} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Elena</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Farhan Patel" size={32} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Farhan</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Sofia Chen" size={32} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Sofia</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Avatar name="Tom Anderson" size={32} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Tom</span>
      </div>
    </div>
  ),
};

// Different sizes
export const Sizes = {
  name: 'Different Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar name="Alice Johnson" size={24} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Small (24px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar name="Alice Johnson" size={32} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Default (32px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar name="Alice Johnson" size={48} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Large (48px)</span>
      </div>
    </div>
  ),
};

// Image URL in different sizes
export const ImageSizes = {
  name: 'Image – Different Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar avatarUrl="https://i.pravatar.cc/150?img=12" name="Bob Martinez" size={24} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Small (24px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar avatarUrl="https://i.pravatar.cc/150?img=12" name="Bob Martinez" size={32} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Default (32px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Avatar avatarUrl="https://i.pravatar.cc/150?img=12" name="Bob Martinez" size={48} />
        <span style={{ fontSize: '11px', color: '#5e6c84' }}>Large (48px)</span>
      </div>
    </div>
  ),
};

// All variants overview
export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '16px' }}>
      {/* Profile Image - different sizes */}
      <div>
        <p style={{ fontSize: '12px', fontWeight: 600, color: '#5e6c84', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Profile Image – Sizes
        </p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar avatarUrl="https://i.pravatar.cc/150?img=47" name="Alice Johnson" size={24} />
            <span style={{ fontSize: '11px', color: '#5e6c84' }}>24px</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar avatarUrl="https://i.pravatar.cc/150?img=47" name="Alice Johnson" size={32} />
            <span style={{ fontSize: '11px', color: '#5e6c84' }}>32px</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar avatarUrl="https://i.pravatar.cc/150?img=47" name="Alice Johnson" size={48} />
            <span style={{ fontSize: '11px', color: '#5e6c84' }}>48px</span>
          </div>
        </div>
      </div>
      {/* Initials fallback – different sizes */}
      <div>
        <p style={{ fontSize: '12px', fontWeight: 600, color: '#5e6c84', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Initials Fallback – Sizes
        </p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar name="Alice Johnson" size={24} />
            <span style={{ fontSize: '11px', color: '#5e6c84' }}>24px</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar name="Alice Johnson" size={32} />
            <span style={{ fontSize: '11px', color: '#5e6c84' }}>32px</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Avatar name="Alice Johnson" size={48} />
            <span style={{ fontSize: '11px', color: '#5e6c84' }}>48px</span>
          </div>
        </div>
      </div>
      {/* Initials fallback – different colors */}
      <div>
        <p style={{ fontSize: '12px', fontWeight: 600, color: '#5e6c84', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Initials Fallback – Colors
        </p>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Avatar name="Alice Johnson" size={32} />
          <Avatar name="Bob Martinez" size={32} />
          <Avatar name="Caroline Wang" size={32} />
          <Avatar name="David Kim" size={32} />
          <Avatar name="Elena Rodriguez" size={32} />
          <Avatar name="Farhan Patel" size={32} />
          <Avatar name="Sofia Chen" size={32} />
          <Avatar name="Tom Anderson" size={32} />
        </div>
      </div>
    </div>
  ),
};
