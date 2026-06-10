import React from 'react';
import styled from 'styled-components';

import IssueSummaryRow from './index';
import { IssuePriority } from 'shared/constants/issues';

export default {
  title: 'Shared/IssueSummaryRow',
  component: IssueSummaryRow,
  parameters: {
    layout: 'padded',
  },
};

const ListWrapper = styled.div`
  max-width: 700px;
  border: 1px solid #dfe1e6;
  border-radius: 3px;
  overflow: hidden;
  background: #fff;
`;

export const Primary = {
  name: 'Primary',
  render: () => (
    <ListWrapper>
      <IssueSummaryRow
        issueKey="PROJ-42"
        title="Implement OAuth login flow with redirect handling"
        priority={IssuePriority.HIGH}
        assignee={{ name: 'Mob Kageyama', avatarUrl: null }}
        onClick={() => {}}
      />
    </ListWrapper>
  ),
};

export const AllPriorities = {
  name: 'All Priorities',
  render: () => (
    <ListWrapper>
      <IssueSummaryRow
        issueKey="PROJ-42"
        title="Implement OAuth login flow with redirect handling"
        priority={IssuePriority.HIGHEST}
        assignee={{ name: 'Mob Kageyama', avatarUrl: null }}
        onClick={() => {}}
      />
      <IssueSummaryRow
        issueKey="PROJ-101"
        title="Design system audit and documentation"
        priority={IssuePriority.HIGH}
        assignee={{ name: 'Alex Chen', avatarUrl: null }}
        onClick={() => {}}
      />
      <IssueSummaryRow
        issueKey="PROJ-56"
        title="Update API endpoints for bulk operations"
        priority={IssuePriority.MEDIUM}
        assignee={{ name: 'Bailey Kim', avatarUrl: null }}
        onClick={() => {}}
      />
      <IssueSummaryRow
        issueKey="PROJ-78"
        title="Refactor utility functions for better testability"
        priority={IssuePriority.LOW}
        assignee={{ name: 'Jordan Smith', avatarUrl: null }}
        onClick={() => {}}
      />
      <IssueSummaryRow
        issueKey="PROJ-99"
        title="Add TypeScript definitions for legacy code"
        priority={IssuePriority.LOWEST}
        assignee={{ name: 'Sam Lee', avatarUrl: null }}
        onClick={() => {}}
      />
    </ListWrapper>
  ),
};
