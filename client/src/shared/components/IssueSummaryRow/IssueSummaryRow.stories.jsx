import React from 'react';

import IssueSummaryRow from './index';
import { IssuePriority } from 'shared/constants/issues';
import { color } from 'shared/utils/styles';

export default {
  title: 'Shared/IssueSummaryRow',
  component: IssueSummaryRow,
};

const BoardColumn = ({ children }) => (
  <div style={{
    padding: '12px',
    width: '480px',
    background: color.backgroundLightest,
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  }}>
    <div style={{ fontSize: '11px', fontWeight: 600, color: '#8993a4', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '4px 10px 8px' }}>In Progress · 4 issues</div>
    {children}
  </div>
);

export const Default = {
  name: 'Default',
  render: () => (
    <BoardColumn>
      <IssueSummaryRow
        issueKey="PROJ-42"
        title="Implement OAuth2 login flow for enterprise SSO"
        priority={IssuePriority.MEDIUM}
        assigneeName="Mob Psycho"
      />
      <IssueSummaryRow
        issueKey="CRIT-1"
        title="Fix critical security vulnerability in authentication module"
        priority={IssuePriority.HIGHEST}
        assigneeName="Sarah K"
      />
      <IssueSummaryRow
        issueKey="BOARD-10"
        title="Add drag-and-drop support for card reordering"
        priority={IssuePriority.HIGH}
        assigneeName="John Smith"
      />
      <IssueSummaryRow
        issueKey="FEAT-99"
        title="This is an extremely long issue title that should be truncated with ellipsis"
        priority={IssuePriority.LOW}
        assigneeName="Alex Davis"
      />
    </BoardColumn>
  ),
};

export const WithAvatar = {
  name: 'With Avatar',
  render: () => (
    <BoardColumn>
      <IssueSummaryRow
        issueKey="BOARD-10"
        title="Add drag-and-drop support for card reordering"
        priority={IssuePriority.HIGH}
        assigneeName="John Smith"
      />
    </BoardColumn>
  ),
};

export const HighestPriority = {
  name: 'Highest Priority',
  render: () => (
    <BoardColumn>
      <IssueSummaryRow
        issueKey="CRIT-1"
        title="Fix critical security vulnerability in authentication module"
        priority={IssuePriority.HIGHEST}
        assigneeName="Sarah"
      />
    </BoardColumn>
  ),
};

export const LongTitle = {
  name: 'Long Title',
  render: () => (
    <BoardColumn>
      <IssueSummaryRow
        issueKey="FEAT-99"
        title="This is an extremely long issue title that should be truncated with ellipsis to prevent horizontal overflow in the UI"
        priority={IssuePriority.LOW}
        assigneeName="Alex Davis"
      />
    </BoardColumn>
  ),
};
