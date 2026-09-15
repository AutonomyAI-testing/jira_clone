import React from 'react';
import styled from 'styled-components';
import IssueSummaryRow from './index';

// Container styling for story display
const CONTAINER_BORDER_COLOR = '#dfe1e6';
const LABEL_TEXT_COLOR = '#5e6c84';
const LABEL_BORDER_COLOR = '#f4f5f7';

// Demo issue data with various priority levels and assignee states
const issues = [
  {
    issueKey: 'TASK-101',
    title: 'Add new navigation component to the main sidebar layout',
    assignee: { id: '1', name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
    priority: '3', // medium
  },
  {
    issueKey: 'TASK-102',
    title: 'Fix authentication bug in login flow',
    assignee: { id: '2', name: 'Ada Lovelace' },
    priority: '5', // highest
  },
  {
    issueKey: 'TASK-103',
    title: 'Implement drag-and-drop for board columns',
    assignee: { id: '3', name: 'Grace Hopper' },
    priority: '4', // high
  },
  {
    issueKey: 'TASK-104',
    title: 'Update README documentation with new API endpoints',
    assignee: null,
    priority: '2', // low
  },
];

const Container = styled.div`
  max-width: 620px;
  background: white;
  border: 1px solid ${CONTAINER_BORDER_COLOR};
  border-radius: 4px;
  overflow: hidden;
`;

const SectionLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: ${LABEL_TEXT_COLOR};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 10px 12px 6px;
  border-bottom: 1px solid ${LABEL_BORDER_COLOR};
`;

export default {
  title: 'IssueSummaryRow',
  component: IssueSummaryRow,
};

export const Default = {
  name: 'Default',
  render: () => (
    <Container>
      <SectionLabel>Issue Summary Row</SectionLabel>
      <IssueSummaryRow
        issueKey={issues[0].issueKey}
        title={issues[0].title}
        assignee={issues[0].assignee}
        priority={issues[0].priority}
      />
    </Container>
  ),
};

export const CompactSummary = {
  name: 'CompactSummary',
  render: () => (
    <Container>
      <SectionLabel>Issue List — Multiple Rows</SectionLabel>
      {issues.map(issue => (
        <IssueSummaryRow
          key={issue.issueKey}
          issueKey={issue.issueKey}
          title={issue.title}
          assignee={issue.assignee}
          priority={issue.priority}
        />
      ))}
    </Container>
  ),
};
