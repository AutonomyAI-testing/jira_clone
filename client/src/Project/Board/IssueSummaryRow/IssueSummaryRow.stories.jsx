import React from 'react';

import IssueSummaryRow from './index';

export default {
  title: 'Project/Board/IssueSummaryRow',
  component: IssueSummaryRow,
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  name: 'Default',
  render: () => (
    <IssueSummaryRow
      issueKey="TASK-42"
      title="Fix login redirect on expired session"
      assigneeName="Sam Rivera"
      priority="3"
    />
  ),
};

export const HighPriority = {
  name: 'HighPriority',
  render: () => (
    <IssueSummaryRow
      issueKey="TASK-17"
      title="Production API is returning 500 errors"
      assigneeName="Jordan Maki"
      priority="5"
    />
  ),
};

export const LowPriority = {
  name: 'LowPriority',
  render: () => (
    <IssueSummaryRow
      issueKey="TASK-88"
      title="Update README documentation"
      assigneeName="Alex Chen"
      priority="1"
    />
  ),
};
