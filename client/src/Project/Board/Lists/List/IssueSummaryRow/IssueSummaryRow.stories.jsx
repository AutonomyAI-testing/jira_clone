import React from 'react';

import IssueSummaryRow from './index';
import { IssuePriority } from 'shared/constants/issues';

export default {
  title: 'Board/IssueSummaryRow',
  component: IssueSummaryRow,
};

export const Medium = () => (
  <IssueSummaryRow
    issueKey="TASK-42"
    title="Fix login page crash on Safari"
    assignee={{ id: 1, name: 'Alex Kim', avatarUrl: null }}
    priority={IssuePriority.MEDIUM}
  />
);

export const Highest = () => (
  <IssueSummaryRow
    issueKey="BUG-17"
    title="Critical auth token expiry bug"
    assignee={{ id: 2, name: 'Sarah Chen', avatarUrl: null }}
    priority={IssuePriority.HIGHEST}
  />
);
