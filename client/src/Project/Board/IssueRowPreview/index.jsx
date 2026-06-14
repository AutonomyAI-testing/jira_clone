import React from 'react';
import styled from 'styled-components';
import { color } from 'shared/utils/styles';
import { IssueRow } from 'shared/components';

const Container = styled.div`
  max-width: 600px;
  padding: 32px;
  margin: 0 auto;
  background: ${color.backgroundLightest};
`;

const Heading = styled.h1`
  color: ${color.textDark};
  margin-bottom: 24px;
  font-size: 24px;
`;

const demoIssues = [
  {
    issueKey: 'PROJ-42',
    title: 'Fix login redirect after session expiry',
    priority: '5',
    assignee: { name: 'Alex Kim' },
    dueDate: 'Jun 12',
  },
  {
    issueKey: 'PROJ-31',
    title: 'Dashboard chart not rendering on Safari',
    priority: '4',
    assignee: { name: 'Jordan Lee' },
    dueDate: 'Jun 18',
  },
  {
    issueKey: 'PROJ-18',
    title: 'Add dark mode toggle to settings panel',
    priority: '3',
    assignee: { name: 'Sam Reyes' },
    dueDate: 'Jun 30',
  },
  {
    issueKey: 'PROJ-07',
    title: 'Update README with new deployment steps',
    priority: '2',
    assignee: { name: 'Taylor Wong' },
    dueDate: 'Jul 5',
  },
  {
    issueKey: 'PROJ-03',
    title: 'Bump lodash to latest patch version',
    priority: '1',
    assignee: { name: 'Morgan Park' },
  },
];

const IssueRowPreview = () => (
  <Container>
    <Heading>Board Issue Row — Preview</Heading>
    {demoIssues.map(issue => (
      <IssueRow
        key={issue.issueKey}
        issueKey={issue.issueKey}
        title={issue.title}
        priority={issue.priority}
        assignee={issue.assignee}
        dueDate={issue.dueDate}
      />
    ))}
  </Container>
);

export default IssueRowPreview;
