import React from 'react';

import IssueSummaryRow from './index';

export default {
  title: 'Components/IssueSummaryRow',
  component: IssueSummaryRow,
};

export const Default = () => (
  <div style={{ padding: 24, maxWidth: 640, background: '#F4F5F7' }}>
    <IssueSummaryRow
      issueKey="TASK-42"
      title="Fix login page redirect after OAuth callback"
      assignee={{ name: 'Jordan Lee', avatarUrl: null }}
      priority="3"
    />
  </div>
);

export const HighPriority = () => (
  <div style={{ padding: 24, maxWidth: 640, background: '#F4F5F7' }}>
    <IssueSummaryRow
      issueKey="TASK-17"
      title="Database connection pool exhausted under load"
      assignee={{ name: 'Alex Chen', avatarUrl: null }}
      priority="5"
    />
  </div>
);

export const AllPriorities = () => (
  <div
    style={{
      padding: 24,
      maxWidth: 640,
      background: '#F4F5F7',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}
  >
    <IssueSummaryRow
      issueKey="TASK-10"
      title="Highest priority: Critical auth failure"
      assignee={{ name: 'Alex Chen', avatarUrl: null }}
      priority="5"
    />
    <IssueSummaryRow
      issueKey="TASK-11"
      title="High priority: Payment gateway timeout"
      assignee={{ name: 'Jordan Lee', avatarUrl: null }}
      priority="4"
    />
    <IssueSummaryRow
      issueKey="TASK-12"
      title="Medium priority: Fix login page redirect after OAuth callback"
      assignee={{ name: 'Sam Park', avatarUrl: null }}
      priority="3"
    />
    <IssueSummaryRow
      issueKey="TASK-13"
      title="Low priority: Update onboarding copy"
      assignee={{ name: 'Riley Kim', avatarUrl: null }}
      priority="2"
    />
    <IssueSummaryRow
      issueKey="TASK-14"
      title="Lowest priority: Minor spacing fix on settings page"
      assignee={{ name: 'Morgan Wu', avatarUrl: null }}
      priority="1"
    />
  </div>
);
