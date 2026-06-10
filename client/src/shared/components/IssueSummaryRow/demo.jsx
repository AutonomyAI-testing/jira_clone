import React from 'react';
import styled from 'styled-components';

import IssueSummaryRow from './index';
import { color, font } from 'shared/utils/styles';
import { IssuePriority } from 'shared/constants/issues';

const Container = styled.div`
  padding: 20px;
  background: ${color.backgroundLightest};
  min-height: 100vh;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  ${font.size(16)}
  ${font.bold}
  color: ${color.textDarkest};
  margin-bottom: 16px;
  margin-top: 0;
`;

const StyledIssueSummaryRow = styled(IssueSummaryRow)`
  margin-bottom: 2px;
`;

const demoIssues = [
  {
    issueKey: 'PROJ-42',
    title: 'Implement OAuth login flow with redirect handling',
    priority: IssuePriority.HIGHEST,
    assignee: {
      name: 'Mob Kageyama',
      avatarUrl: null,
    },
  },
  {
    issueKey: 'PROJ-101',
    title: 'Design system audit and documentation',
    priority: IssuePriority.HIGH,
    assignee: {
      name: 'Alex Chen',
      avatarUrl: null,
    },
  },
  {
    issueKey: 'PROJ-56',
    title: 'Update API endpoints for bulk operations',
    priority: IssuePriority.MEDIUM,
    assignee: {
      name: 'Bailey Kim',
      avatarUrl: null,
    },
  },
  {
    issueKey: 'PROJ-78',
    title: 'Refactor utility functions for better testability',
    priority: IssuePriority.LOW,
    assignee: {
      name: 'Jordan Smith',
      avatarUrl: null,
    },
  },
  {
    issueKey: 'PROJ-99',
    title: 'Add TypeScript definitions for legacy code',
    priority: IssuePriority.LOWEST,
    assignee: {
      name: 'Sam Lee',
      avatarUrl: null,
    },
  },
];

const demoIssuesNoAssignee = [
  {
    issueKey: 'PROJ-200',
    title: 'Unassigned issue without assignee avatar',
    priority: IssuePriority.HIGH,
    assignee: null,
  },
];

const IssueSummaryRowDemo = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>IssueSummaryRow Component - Demo</SectionTitle>
        {demoIssues.map(issue => (
          <StyledIssueSummaryRow key={issue.issueKey} {...issue} onClick={() => {}} />
        ))}
      </Section>

      <Section>
        <SectionTitle>Without Assignee</SectionTitle>
        {demoIssuesNoAssignee.map(issue => (
          <StyledIssueSummaryRow key={issue.issueKey} {...issue} onClick={() => {}} />
        ))}
      </Section>
    </Container>
  );
};

export default IssueSummaryRowDemo;
