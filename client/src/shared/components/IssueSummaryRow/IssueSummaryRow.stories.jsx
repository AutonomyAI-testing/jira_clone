import React from 'react';
import { IssuePriority } from 'shared/constants/issues';
import IssueSummaryRow from './index';

// Shared container style for story demos
const STORY_CONTAINER_STYLE = {
  width: '600px',
  background: '#f4f5f7',
  padding: '16px',
  borderRadius: '4px',
};

// Shared container for multiple items
const STORY_MULTI_CONTAINER_STYLE = {
  ...STORY_CONTAINER_STYLE,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

export default {
  title: 'IssueSummaryRow',
  component: IssueSummaryRow,
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  name: 'Default (PROJ-42, HIGH, Alex Johnson)',
  render: () => (
    <div style={STORY_CONTAINER_STYLE}>
      <IssueSummaryRow
        issueKey="PROJ-42"
        title="Implement dark mode toggle for the dashboard"
        priority={IssuePriority.HIGH}
        assignee={{
          id: '1',
          name: 'Alex Johnson',
          avatarUrl: null,
        }}
      />
    </div>
  ),
};

export const HighestPriority = {
  name: 'Highest Priority (CRITICAL-1, red badge)',
  render: () => (
    <div style={STORY_CONTAINER_STYLE}>
      <IssueSummaryRow
        issueKey="CRITICAL-1"
        title="Production database connection failure"
        priority={IssuePriority.HIGHEST}
        assignee={{
          id: '4',
          name: 'Morgan Tech',
          avatarUrl: null,
        }}
      />
    </div>
  ),
};

export const BothStories = {
  name: 'Both Stories Preview',
  render: () => (
    <div style={STORY_MULTI_CONTAINER_STYLE}>
      <IssueSummaryRow
        issueKey="PROJ-42"
        title="Implement dark mode toggle for the dashboard"
        priority={IssuePriority.HIGH}
        assignee={{
          id: '1',
          name: 'Alex Johnson',
          avatarUrl: null,
        }}
      />
      <IssueSummaryRow
        issueKey="CRITICAL-1"
        title="Production database connection failure"
        priority={IssuePriority.HIGHEST}
        assignee={{
          id: '4',
          name: 'Morgan Tech',
          avatarUrl: null,
        }}
      />
    </div>
  ),
};

export const NoAssignee = {
  render: () => (
    <div style={STORY_CONTAINER_STYLE}>
      <IssueSummaryRow
        issueKey="PROJ-42"
        title="Implement dark mode toggle for the dashboard"
        priority={IssuePriority.HIGH}
      />
    </div>
  ),
};

export const LowPriority = {
  render: () => (
    <div style={STORY_CONTAINER_STYLE}>
      <IssueSummaryRow
        issueKey="BUG-99"
        title="Fix minor typo in help text"
        priority={IssuePriority.LOW}
        assignee={{
          id: '3',
          name: 'Jordan Smith',
          avatarUrl: null,
        }}
      />
    </div>
  ),
};
