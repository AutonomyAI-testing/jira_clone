import React from 'react';

import { IssuePriority } from 'shared/constants/issues';

import IssueSummaryRow from './index';

// Demo data for Storybook preview
const demoUser = {
  id: 1,
  name: 'Mob Psycho',
  avatarUrl: 'https://i.pravatar.cc/40?img=8',
};

// Example issue showing all supported fields: priority, assignee, and due date
const demoIssue = {
  id: 42,
  key: 'PROJ-42',
  title: 'Fix login session timeout on page refresh',
  priority: IssuePriority.HIGH,
  userIds: [1],
  dueDate: 'Jun 30',
};

// Styles for story wrapper and card display
const storyWrapperStyle = {
  padding: '40px',
  background: '#F4F5F7',
  minHeight: '100vh',
};

const cardContainerStyle = {
  maxWidth: '420px',
};

const cardLabelStyle = {
  marginBottom: '16px',
  fontFamily: 'sans-serif',
  color: '#42526E',
  fontSize: '13px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

export default {
  title: 'Shared/IssueSummaryRow',
  component: IssueSummaryRow,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  name: 'Board View — Compact Issue Row',
  render: () => (
    <div style={storyWrapperStyle}>
      <div style={cardContainerStyle}>
        <h3 style={cardLabelStyle}>
          Board View — Compact Issue Row
        </h3>
        <IssueSummaryRow
          issue={demoIssue}
          projectUsers={[demoUser]}
          onClick={() => {}}
        />
      </div>
    </div>
  ),
};
