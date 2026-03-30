import React from 'react';
import ProjectBoardIssueDetails from './index';

// Mock data based on issue 103 with comments and replies
const mockIssue103 = {
  id: 103,
  title: 'Implement dark mode',
  type: 'story',
  status: 'inprogress',
  priority: '3',
  listPosition: 1,
  description: 'Add dark mode theme support across the application',
  descriptionText: 'Add dark mode theme support across the application',
  estimate: 16,
  timeSpent: 8,
  timeRemaining: 8,
  reporterId: 1,
  projectId: 1,
  userIds: [1, 3],
  users: [
    {
      id: 1,
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
    },
    {
      id: 3,
      name: 'Baby Yoda',
      avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
    },
  ],
  comments: [
    {
      id: 201,
      body: 'Great progress so far! The theme switcher looks good.',
      issueId: 103,
      userId: 2,
      user: {
        id: 2,
        name: 'Pickle Rick',
        avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
      },
      createdAt: '2020-06-05T00:00:00.000Z',
      updatedAt: '2020-06-05T00:00:00.000Z',
      replies: [
        {
          id: 301,
          body: 'Thanks! Still working on the dark mode for the sidebar.',
          commentId: 201,
          userId: 1,
          user: {
            id: 1,
            name: 'Lord Gaben',
            avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
          },
          createdAt: '2020-06-05T12:00:00.000Z',
          updatedAt: '2020-06-05T12:00:00.000Z',
        },
        {
          id: 302,
          body: 'Looking forward to seeing the final result!',
          commentId: 201,
          userId: 3,
          user: {
            id: 3,
            name: 'Baby Yoda',
            avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
          },
          createdAt: '2020-06-05T14:00:00.000Z',
          updatedAt: '2020-06-05T14:00:00.000Z',
        },
      ],
    },
  ],
  startDate: '2020-06-03T00:00:00.000Z',
  dueDate: '2020-06-20T00:00:00.000Z',
  dependencies: [],
  createdAt: '2020-06-03T00:00:00.000Z',
  updatedAt: '2020-06-03T00:00:00.000Z',
};

const mockProjectUsers = [
  {
    id: 1,
    name: 'Lord Gaben',
    avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
    email: 'gaben@jira.guest',
  },
  {
    id: 2,
    name: 'Pickle Rick',
    avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
    email: 'pickle.rick@jira.guest',
  },
  {
    id: 3,
    name: 'Baby Yoda',
    avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
    email: 'baby.yoda@jira.guest',
  },
];

// Create a wrapper that mocks the API response and renders the component with pre-fetched data
const IssueDetailsWrapper = ({ issue, projectUsers }) => {
  // Since the component uses useApi.get which requires the API,
  // we need to create a simpler version that works with mock data
  return (
    <div style={{ width: '900px', padding: '20px', backgroundColor: '#f4f5f7' }}>
      <MockedIssueDetails issue={issue} projectUsers={projectUsers} />
    </div>
  );
};

// A mocked version of IssueDetails that directly renders with provided data
// rather than fetching from API
import { Fragment } from 'react';
import Type from './Type';
import Delete from './Delete';
import Title from './Title';
import Description from './Description';
import Comments from './Comments';
import Status from './Status';
import AssigneesReporter from './AssigneesReporter';
import Priority from './Priority';
import EstimateTracking from './EstimateTracking';
import Dates from './Dates';
import { TopActions, TopActionsRight, Content, Left, Right } from './Styles';
import { CopyLinkButton, Button, AboutTooltip } from 'shared/components';

const MockedIssueDetails = ({ issue, projectUsers }) => {
  const updateIssue = () => {}; // no-op for story
  const fetchProject = () => {}; // no-op
  const modalClose = () => {}; // no-op
  const fetchIssue = () => {}; // no-op

  return (
    <Fragment>
      <TopActions>
        <Type issue={issue} updateIssue={updateIssue} />
        <TopActionsRight>
          <AboutTooltip
            renderLink={linkProps => (
              <Button icon="feedback" variant="empty" {...linkProps}>
                Give feedback
              </Button>
            )}
          />
          <CopyLinkButton variant="empty" />
          <Delete issue={issue} fetchProject={fetchProject} modalClose={modalClose} />
          <Button icon="close" iconSize={24} variant="empty" onClick={modalClose} />
        </TopActionsRight>
      </TopActions>
      <Content>
        <Left>
          <Title issue={issue} updateIssue={updateIssue} />
          <Description issue={issue} updateIssue={updateIssue} />
          <Comments issue={issue} fetchIssue={fetchIssue} />
        </Left>
        <Right>
          <Status issue={issue} updateIssue={updateIssue} />
          <AssigneesReporter issue={issue} updateIssue={updateIssue} projectUsers={projectUsers} />
          <Priority issue={issue} updateIssue={updateIssue} />
          <EstimateTracking issue={issue} updateIssue={updateIssue} />
          <Dates issue={issue} />
        </Right>
      </Content>
    </Fragment>
  );
};

export default {
  title: 'Project/Board/IssueDetails',
  component: ProjectBoardIssueDetails,
  parameters: {
    layout: 'padded',
  },
};

// Default story showing issue 103 with comments and replies
export const WithCommentsAndReplies = () => (
  <IssueDetailsWrapper issue={mockIssue103} projectUsers={mockProjectUsers} />
);
