import React from 'react';
import Icon from './index';

export default {
  title: 'Shared/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  alignItems: 'center',
};

const iconItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  padding: '16px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  minWidth: '80px',
  fontFamily: 'sans-serif',
  fontSize: '12px',
  color: '#555',
};

const sectionStyle = {
  marginBottom: '32px',
};

const headingStyle = {
  fontFamily: 'sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  color: '#333',
  marginBottom: '16px',
};

// Icon gallery — variety of types from the fontIconCodes map
const ISSUE_ICON_TYPES = ['bug', 'task', 'story', 'stopwatch'];
const NAVIGATION_ICON_TYPES = [
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'arrow-down',
  'arrow-up',
  'arrow-left',
  'arrow-right',
  'arrow-left-circle',
];
const ACTION_ICON_TYPES = [
  'plus',
  'close',
  'trash',
  'attach',
  'link',
  'search',
  'more',
  'menu',
  'feedback',
];

const iconTypes = [
  'bug',
  'task',
  'story',
  'stopwatch',
  'board',
  'search',
  'settings',
  'plus',
  'close',
  'trash',
  'help',
  'link',
  'attach',
  'menu',
  'more',
  'feedback',
  'github',
  'calendar',
  'chevron-down',
  'chevron-right',
  'arrow-down',
  'arrow-up',
  'arrow-left',
  'arrow-right',
  'issues',
  'reports',
  'page',
  'component',
  'shipping',
];

export const IconGallery = {
  name: 'Icon Gallery',
  render: () => (
    <div>
      <div style={sectionStyle}>
        <div style={headingStyle}>All Icon Types (default size: 24px)</div>
        <div style={containerStyle}>
          {iconTypes.map(type => (
            <div key={type} style={iconItemStyle}>
              <Icon type={type} size={24} />
              <span>{type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const SizeVariations = {
  name: 'Size Variations',
  render: () => {
    const sizes = [12, 16, 20, 24, 32, 48];
    return (
      <div>
        <div style={headingStyle}>Size Variations (using &apos;bug&apos; icon)</div>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end' }}>
          {sizes.map(size => (
            <div key={size} style={{ ...iconItemStyle, minWidth: '60px' }}>
              <Icon type="bug" size={size} />
              <span>{size}px</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const IssueTypeIcons = {
  name: 'Issue Type Icons',
  render: () => (
    <div>
      <div style={headingStyle}>Issue Type Icons</div>
      <div style={containerStyle}>
        {ISSUE_ICON_TYPES.map(type => (
          <div key={type} style={iconItemStyle}>
            <Icon type={type} size={32} />
            <span>{type}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const NavigationIcons = {
  name: 'Navigation Icons',
  render: () => (
    <div>
      <div style={headingStyle}>Navigation Icons</div>
      <div style={containerStyle}>
        {NAVIGATION_ICON_TYPES.map(type => (
          <div key={type} style={iconItemStyle}>
            <Icon type={type} size={24} />
            <span>{type}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const ActionIcons = {
  name: 'Action Icons',
  render: () => (
    <div>
      <div style={headingStyle}>Action Icons</div>
      <div style={containerStyle}>
        {ACTION_ICON_TYPES.map(type => (
          <div key={type} style={iconItemStyle}>
            <Icon type={type} size={24} />
            <span>{type}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
