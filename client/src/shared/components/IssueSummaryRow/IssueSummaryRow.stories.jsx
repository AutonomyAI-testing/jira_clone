import React from 'react';
import { IssuePriority } from 'shared/constants/issues';
import IssueSummaryRow from './index';

export default {
  title: 'IssueSummaryRow',
  component: IssueSummaryRow,
  decorators: [
    (Story) => (
      <div style={{ width: '700px', padding: '24px', background: '#fff', border: '1px solid #e9e9e9', borderRadius: '4px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
};

export const Default = () => (
  <IssueSummaryRow
    issueKey="TASK-42"
    title="Fix broken login redirect on OAuth callback"
    assignee={{ name: 'Mob Psycho', avatarUrl: null }}
    priority={IssuePriority.HIGH}
  />
);

export const HighestPriority = () => (
  <IssueSummaryRow
    issueKey="BUG-156"
    title="Critical security vulnerability in authentication"
    assignee={{ name: 'Alice Smith', avatarUrl: null }}
    priority={IssuePriority.HIGHEST}
  />
);

export const MediumPriority = () => (
  <IssueSummaryRow
    issueKey="STORY-88"
    title="Implement dark mode theme"
    assignee={{ name: 'Bob Johnson', avatarUrl: null }}
    priority={IssuePriority.MEDIUM}
  />
);

export const LowestPriority = () => (
  <IssueSummaryRow
    issueKey="TASK-201"
    title="Update documentation for API endpoint"
    assignee={{ name: 'Charlie Brown', avatarUrl: null }}
    priority={IssuePriority.LOWEST}
  />
);

export const LongTitle = () => (
  <IssueSummaryRow
    issueKey="FEATURE-5"
    title="Implement advanced filtering with real-time search, multi-select dropdowns, and custom field support for better user experience"
    assignee={{ name: 'Diana Prince', avatarUrl: null }}
    priority={IssuePriority.MEDIUM}
  />
);

export const NoAssignee = () => (
  <IssueSummaryRow
    issueKey="TASK-99"
    title="Review pull request #234"
    assignee={null}
    priority={IssuePriority.LOW}
  />
);
