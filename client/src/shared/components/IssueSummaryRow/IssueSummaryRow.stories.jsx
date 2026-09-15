import React from 'react';
import styled from 'styled-components';

import { IssuePriority } from 'shared/constants/issues';
import IssueSummaryRow from './index';

const StoryContainer = styled.div`
  background: #f5f5f5;
  padding: 40px 20px;
  min-height: 100vh;
  font-family: 'CircularStdBook';
`;

const Card = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const CardTitle = styled.h2`
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const demoIssue = {
  issueKey: 'PROJ-42',
  title: 'Implement drag-and-drop reordering for board columns',
  priority: IssuePriority.HIGH,
  assignee: {
    name: 'Mob Psycho',
    avatarUrl: null,
  },
};

export default {
  title: 'Shared/IssueSummaryRow',
  component: IssueSummaryRow,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Demo = {
  name: 'Demo',
  render: () => (
    <StoryContainer>
      <Card>
        <CardTitle>IssueSummaryRow Component Demo</CardTitle>
        <IssueSummaryRow
          issueKey={demoIssue.issueKey}
          title={demoIssue.title}
          priority={demoIssue.priority}
          assignee={demoIssue.assignee}
        />
      </Card>
    </StoryContainer>
  ),
};
