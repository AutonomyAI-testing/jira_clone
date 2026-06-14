import React from 'react';
import IssueSummaryRow from '.';

export default {
  title: 'Shared/IssueSummaryRow',
  component: IssueSummaryRow,
  parameters: {
    layout: 'padded',
  },
};

/* Default story showcasing the IssueSummaryRow component with demo data.
   Displays a sample issue with issue key, title, assignee avatar, and priority badge. */
export const Default = {
  name: 'Default',
  render: () => (
    <div style={{ width: 480, background: '#f4f5f7', padding: 16, borderRadius: 6 }}>
      <IssueSummaryRow
        issue={{
          id: 42,
          title: 'Fix login redirect on expired session',
          priority: '4', // HIGH priority from IssuePriority constants
          dueDate: 'Jun 30',
        }}
        assignee={{
          name: 'John Smith',
          // No avatarUrl provided; Avatar component will render a colored letter 'J' fallback
          avatarUrl: undefined,
        }}
        onClick={() => {}}
      />
    </div>
  ),
};
