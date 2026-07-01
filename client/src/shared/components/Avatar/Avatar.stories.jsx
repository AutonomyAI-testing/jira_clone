import React from 'react';
import Avatar from './index';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
};

const sectionLabel = (text) => (
  <div style={{
    fontSize: '13px',
    fontWeight: '600',
    color: '#5e6c84',
    fontFamily: 'sans-serif',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  }}>
    {text}
  </div>
);

const sizeLabel = (text) => (
  <div style={{ marginTop: '6px', fontSize: '11px', color: '#5e6c84', fontFamily: 'sans-serif', textAlign: 'center' }}>
    {text}
  </div>
);

const sizes = [24, 32, 48, 64];

// All variants comparison — wizard, initials, URL photo
export const AllVariants = () => (
  <div style={{ padding: '24px', background: '#f4f5f7', borderRadius: '8px', display: 'inline-block', minWidth: '420px' }}>
    {/* Wizard variant */}
    <div style={{ marginBottom: '24px' }}>
      {sectionLabel('Wizard Variant (new)')}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
        {sizes.map(size => (
          <div key={size} style={{ textAlign: 'center' }}>
            <Avatar variant="wizard" size={size} name="Wizard" />
            {sizeLabel(`${size}px`)}
          </div>
        ))}
      </div>
    </div>

    {/* Default initials variant */}
    <div style={{ marginBottom: '24px' }}>
      {sectionLabel('Default — Initials')}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
        {sizes.map(size => (
          <div key={size} style={{ textAlign: 'center' }}>
            <Avatar name="Lord Gaben" size={size} />
            {sizeLabel(`${size}px`)}
          </div>
        ))}
      </div>
    </div>

    {/* Default URL photo variant */}
    <div>
      {sectionLabel('Default — URL Photo')}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
        {sizes.map(size => (
          <div key={size} style={{ textAlign: 'center' }}>
            <Avatar avatarUrl="https://i.pravatar.cc/300?img=47" name="Jane Doe" size={size} />
            {sizeLabel(`${size}px`)}
          </div>
        ))}
      </div>
    </div>
  </div>
);

AllVariants.storyName = 'All Variants Comparison';

// Wizard variant at various sizes
export const WizardVariant = () => (
  <div style={{ padding: '24px', background: '#f4f5f7', borderRadius: '8px', display: 'inline-block' }}>
    {sectionLabel('Wizard Variant')}
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
      {sizes.map(size => (
        <div key={size} style={{ textAlign: 'center' }}>
          <Avatar variant="wizard" size={size} name="Wizard" />
          {sizeLabel(`${size}px`)}
        </div>
      ))}
    </div>
  </div>
);

WizardVariant.storyName = 'Wizard Variant (multiple sizes)';

// Default avatar with initials
export const DefaultWithInitials = () => (
  <div style={{ padding: '24px', background: '#f4f5f7', borderRadius: '8px', display: 'inline-block' }}>
    {sectionLabel('Default — Initials')}
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
      {sizes.map(size => (
        <div key={size} style={{ textAlign: 'center' }}>
          <Avatar name="Lord Gaben" size={size} />
          {sizeLabel(`${size}px`)}
        </div>
      ))}
    </div>
  </div>
);

DefaultWithInitials.storyName = 'Default - Initials';

// Default avatar with a photo URL
export const DefaultWithUrl = () => (
  <div style={{ padding: '24px', background: '#f4f5f7', borderRadius: '8px', display: 'inline-block' }}>
    {sectionLabel('Default — URL Photo')}
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
      {sizes.map(size => (
        <div key={size} style={{ textAlign: 'center' }}>
          <Avatar avatarUrl="https://i.pravatar.cc/300?img=47" name="Jane Doe" size={size} />
          {sizeLabel(`${size}px`)}
        </div>
      ))}
    </div>
  </div>
);

DefaultWithUrl.storyName = 'Default - URL Photo';
