import React from 'react';

import IssueSummaryRow from './index';

// Base issue data for story examples
const DEMO_ISSUE = {
  id: 42,
  issueKey: 'PROJ-42',
  title: 'Fix navigation bug on mobile dashboard layout',
  priority: '3',
  assigneeId: 1,
  dueDate: 'Jun 30',
};

// Mock project users for avatar and assignee resolution
const DEMO_PROJECT_USERS = [
  {
    id: 1,
    name: 'Jane Doe',
    avatarUrl: null,
  },
];

export default {
  title: 'Shared/IssueSummaryRow',
  component: IssueSummaryRow,
  parameters: {
    layout: 'padded',
  },
};

// Basic story showing a standard issue with assignee and due date
export const Default = {
  name: 'Default',
  render: () => (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <IssueSummaryRow issue={DEMO_ISSUE} projectUsers={DEMO_PROJECT_USERS} />
    </div>
  ),
};

// Demonstrates all priority levels (1=Lowest to 5=Highest) with distinct color coding
export const DifferentPriorities = {
  name: 'Different Priorities',
  render: () => (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <div style={{ marginBottom: '8px' }}>
        <IssueSummaryRow
          issue={{
            ...DEMO_ISSUE,
            priority: '5',
            issueKey: 'PROJ-1',
            title: 'Highest priority issue - system is down',
          }}
          projectUsers={DEMO_PROJECT_USERS}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <IssueSummaryRow
          issue={{
            ...DEMO_ISSUE,
            priority: '4',
            issueKey: 'PROJ-2',
            title: 'High priority issue - feature blocked',
          }}
          projectUsers={DEMO_PROJECT_USERS}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <IssueSummaryRow
          issue={{
            ...DEMO_ISSUE,
            priority: '3',
            issueKey: 'PROJ-3',
            title: 'Medium priority issue - navigation bug on mobile',
          }}
          projectUsers={DEMO_PROJECT_USERS}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <IssueSummaryRow
          issue={{
            ...DEMO_ISSUE,
            priority: '2',
            issueKey: 'PROJ-4',
            title: 'Low priority issue - minor styling tweak',
          }}
          projectUsers={DEMO_PROJECT_USERS}
        />
      </div>
      <div>
        <IssueSummaryRow
          issue={{
            ...DEMO_ISSUE,
            priority: '1',
            issueKey: 'PROJ-5',
            title: 'Lowest priority issue - nice to have improvement',
          }}
          projectUsers={DEMO_PROJECT_USERS}
        />
      </div>
    </div>
  ),
};

// Shows component behavior when no assignee is set — avatar should not render
export const WithoutAssignee = {
  name: 'Without Assignee',
  render: () => (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <IssueSummaryRow
        issue={{ ...DEMO_ISSUE, assigneeId: undefined }}
        projectUsers={DEMO_PROJECT_USERS}
      />
    </div>
  ),
};
