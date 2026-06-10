import React from 'react';
import Button from './index';

export default {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
};

// Comprehensive overview — all variants and all states in one view
export const Overview = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    {/* Row label helper */}
    {[
      { label: 'Variants', items: [
        <Button variant="primary">Create Issue</Button>,
        <Button variant="success">Save Changes</Button>,
        <Button variant="danger">Delete Issue</Button>,
        <Button variant="secondary">Cancel</Button>,
        <Button variant="empty">View Details</Button>,
      ]},
      { label: 'With Icon', items: [
        <Button variant="primary" icon="plus">Add Issue</Button>,
        <Button variant="success" icon="settings">Settings</Button>,
        <Button variant="danger" icon="trash">Delete</Button>,
        <Button variant="secondary" icon="search">Search</Button>,
        <Button variant="empty" icon="link">Copy Link</Button>,
      ]},
      { label: 'Icon Only', items: [
        <Button variant="primary" icon="plus" />,
        <Button variant="success" icon="settings" />,
        <Button variant="danger" icon="trash" />,
        <Button variant="secondary" icon="search" />,
        <Button variant="empty" icon="link" />,
      ]},
      { label: 'Loading', items: [
        <Button variant="primary" isWorking>Saving…</Button>,
        <Button variant="success" isWorking>Submitting…</Button>,
        <Button variant="danger" isWorking>Deleting…</Button>,
        <Button variant="secondary" isWorking>Loading…</Button>,
      ]},
      { label: 'Disabled', items: [
        <Button variant="primary" disabled>Create Issue</Button>,
        <Button variant="success" disabled>Save Changes</Button>,
        <Button variant="danger" disabled>Delete Issue</Button>,
        <Button variant="secondary" disabled>Cancel</Button>,
        <Button variant="empty" disabled>View Details</Button>,
      ]},
    ].map(({ label, items }) => (
      <div key={label}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#8993a4', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{label}</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          {items.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
        </div>
      </div>
    ))}
  </div>
);
Overview.storyName = 'Overview — All Variants & States';

// All 5 variant buttons side by side
export const AllVariants = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary">Create Issue</Button>
    <Button variant="success">Save Changes</Button>
    <Button variant="danger">Delete Issue</Button>
    <Button variant="secondary">Cancel</Button>
    <Button variant="empty">View Details</Button>
  </div>
);
AllVariants.storyName = 'All Variants';

export const Primary = () => <Button variant="primary">Create Issue</Button>;

export const Success = () => <Button variant="success">Save Changes</Button>;

export const Danger = () => <Button variant="danger">Delete Issue</Button>;

export const Secondary = () => <Button variant="secondary">Cancel</Button>;

export const Empty = () => <Button variant="empty">View Details</Button>;

// With icon
export const WithIcon = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary" icon="plus">
      Add Issue
    </Button>
    <Button variant="secondary" icon="search">
      Search
    </Button>
    <Button variant="danger" icon="trash">
      Delete
    </Button>
    <Button variant="success" icon="settings">
      Settings
    </Button>
  </div>
);
WithIcon.storyName = 'With Icon';

// Icon only
export const IconOnly = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary" icon="plus" />
    <Button variant="secondary" icon="search" />
    <Button variant="danger" icon="trash" />
    <Button variant="empty" icon="settings" />
  </div>
);
IconOnly.storyName = 'Icon Only';

// isWorking / loading state
export const Loading = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary" isWorking>
      Saving…
    </Button>
    <Button variant="success" isWorking>
      Submitting…
    </Button>
    <Button variant="danger" isWorking>
      Deleting…
    </Button>
    <Button variant="secondary" isWorking>
      Loading…
    </Button>
  </div>
);
Loading.storyName = 'Loading (isWorking)';

// Disabled state
export const Disabled = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary" disabled>
      Create Issue
    </Button>
    <Button variant="success" disabled>
      Save Changes
    </Button>
    <Button variant="danger" disabled>
      Delete Issue
    </Button>
    <Button variant="secondary" disabled>
      Cancel
    </Button>
    <Button variant="empty" disabled>
      View Details
    </Button>
  </div>
);
Disabled.storyName = 'Disabled';
