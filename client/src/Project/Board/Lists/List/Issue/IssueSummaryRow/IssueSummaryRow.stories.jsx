import React from 'react';

import IssueSummaryRow from './index';

export default {
  title: 'Project/Board/Lists/List/Issue/IssueSummaryRow',
  component: IssueSummaryRow,
  parameters: {
    layout: 'padded',
  },
};

const demoIssue = {
  issueKey: 'JRA-42',
  title: 'Implement dark mode toggle for the main navigation bar',
  assignee: { name: 'Alice Chen', avatarUrl: null },
  priority: '3', // Medium
};

export const Default = () => <IssueSummaryRow {...demoIssue} />;

if (typeof module !== 'undefined' && module.hot) {
  module.hot.accept();
}
