import React from 'react';
import { IssuePriority } from 'shared/constants/issues';
import IssueSummaryRow from './index';

export default {
  title: 'IssueSummaryRow',
  component: IssueSummaryRow,
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock user data for rendering avatars with assignee names
const mockProjectUsers = [
  { id: 'u1', name: 'Alex Kim', avatarUrl: '' },
  { id: 'u2', name: 'Jordan Smith', avatarUrl: '' },
  { id: 'u3', name: 'Casey Park', avatarUrl: '' },
];

// Styling for board column layout (e.g., Kanban board columns)
const columnStyle = {
  width: '260px',
  backgroundColor: '#f4f5f7',
  borderRadius: '4px',
  padding: '8px',
  flexShrink: 0,
};

// Header styling for column titles
const columnHeaderStyle = {
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#172b4d',
  marginBottom: '8px',
  padding: '0 4px',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
};

// Spacing between individual issue rows in a column
const rowWrapStyle = { marginBottom: '4px' };

// Default story showing issues in a board view with multiple columns
// Demonstrates various priorities, assignees, and due dates
export const Default = {
  name: 'Default',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        padding: '24px',
        backgroundColor: '#ffffff',
        minHeight: '100vh',
      }}
    >
      {/* Column 1: In Progress */}
      <div style={columnStyle}>
        <div style={columnHeaderStyle}>In Progress</div>
        <div style={rowWrapStyle}>
          <IssueSummaryRow
            issue={{
              id: '1',
              key: 'PROJ-42',
              title: 'Fix login page crash on mobile Safari',
              priority: IssuePriority.HIGH,
              userIds: ['u1'],
              dueDate: '2024-07-15T00:00:00.000Z',
            }}
            projectUsers={mockProjectUsers}
          />
        </div>
        <div style={rowWrapStyle}>
          <IssueSummaryRow
            issue={{
              id: '2',
              key: 'PROJ-43',
              title: 'Add dark mode theme support',
              priority: IssuePriority.MEDIUM,
              userIds: ['u2'],
              dueDate: '2024-08-01T00:00:00.000Z',
            }}
            projectUsers={mockProjectUsers}
          />
        </div>
        <div>
          <IssueSummaryRow
            issue={{
              id: '3',
              key: 'PROJ-44',
              title: 'Update API documentation',
              priority: IssuePriority.LOW,
              userIds: [],
            }}
            projectUsers={mockProjectUsers}
          />
        </div>
      </div>

      {/* Column 2: Selected for Development */}
      <div style={columnStyle}>
        <div style={columnHeaderStyle}>Selected for Dev</div>
        <div style={rowWrapStyle}>
          <IssueSummaryRow
            issue={{
              id: '4',
              key: 'PROJ-45',
              title: 'Performance regression in search endpoint',
              priority: IssuePriority.HIGHEST,
              userIds: ['u3'],
              dueDate: '2024-06-30T00:00:00.000Z',
            }}
            projectUsers={mockProjectUsers}
          />
        </div>
        <div>
          <IssueSummaryRow
            issue={{
              id: '5',
              key: 'PROJ-46',
              title: 'Implement pagination for issue list',
              priority: IssuePriority.MEDIUM,
              userIds: ['u1'],
            }}
            projectUsers={mockProjectUsers}
          />
        </div>
      </div>
    </div>
  ),
};

// Story demonstrating all priority levels (Highest, High, Medium, Low, Lowest)
// Verifies the component renders correctly with different priority icons and due dates
export const AllPriorities = {
  name: 'All Priorities',
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        padding: '24px',
        backgroundColor: '#ffffff',
        minHeight: '100vh',
      }}
    >
      <div style={columnStyle}>
        <div style={columnHeaderStyle}>All Priority Levels</div>
        <div style={rowWrapStyle}>
          <IssueSummaryRow
            issue={{
              id: '1',
              key: 'PROJ-101',
              title: 'Critical security vulnerability in auth module',
              priority: IssuePriority.HIGHEST,
              userIds: ['u1'],
              dueDate: '2024-07-10T00:00:00.000Z',
            }}
            projectUsers={mockProjectUsers}
          />
        </div>
        <div style={rowWrapStyle}>
          <IssueSummaryRow
            issue={{
              id: '2',
              key: 'PROJ-102',
              title: 'Implement OAuth2 integration for third-party apps',
              priority: IssuePriority.HIGH,
              userIds: ['u2'],
              dueDate: '2024-07-20T00:00:00.000Z',
            }}
            projectUsers={mockProjectUsers}
          />
        </div>
        <div style={rowWrapStyle}>
          <IssueSummaryRow
            issue={{
              id: '3',
              key: 'PROJ-103',
              title: 'Add dark mode theme support to dashboard',
              priority: IssuePriority.MEDIUM,
              userIds: ['u3'],
              dueDate: '2024-08-15T00:00:00.000Z',
            }}
            projectUsers={mockProjectUsers}
          />
        </div>
        <div style={rowWrapStyle}>
          <IssueSummaryRow
            issue={{
              id: '4',
              key: 'PROJ-104',
              title: 'Improve error message clarity in forms',
              priority: IssuePriority.LOW,
              userIds: ['u1'],
            }}
            projectUsers={mockProjectUsers}
          />
        </div>
        <div>
          <IssueSummaryRow
            issue={{
              id: '5',
              key: 'PROJ-105',
              title: 'Update documentation for API endpoints',
              priority: IssuePriority.LOWEST,
              userIds: ['u2'],
            }}
            projectUsers={mockProjectUsers}
          />
        </div>
      </div>
    </div>
  ),
};

// Story demonstrating an unassigned issue (no avatar displayed)
// Tests the component handles empty userIds gracefully
export const NoAssignee = {
  name: 'No Assignee',
  render: () => (
    <div style={{ padding: '24px' }}>
      <div style={columnStyle}>
        <div style={columnHeaderStyle}>Backlog</div>
        <IssueSummaryRow
          issue={{
            id: '6',
            key: 'PROJ-200',
            title: 'Create comprehensive testing suite for new features',
            priority: IssuePriority.MEDIUM,
            userIds: [],
          }}
          projectUsers={mockProjectUsers}
        />
      </div>
    </div>
  ),
};
