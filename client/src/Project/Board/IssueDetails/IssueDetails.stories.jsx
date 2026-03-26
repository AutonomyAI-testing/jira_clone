import React from 'react';
import ProjectBoardIssueDetails from './index';
import Loader from './Loader';

export default {
  title: 'Project/Board/IssueDetails',
  component: ProjectBoardIssueDetails,
  parameters: { layout: 'padded' },
};

// Mock issue data based on project mock data
const mockUsers = [
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

const mockStoryIssue = {
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
  users: [mockUsers[0], mockUsers[2]],
  comments: [
    {
      id: 201,
      body: 'Great progress so far! The theme switcher looks good.',
      issueId: 103,
      userId: 2,
      user: mockUsers[1],
      createdAt: '2020-06-05T00:00:00.000Z',
      updatedAt: '2020-06-05T00:00:00.000Z',
    },
  ],
  startDate: '2020-06-01T00:00:00.000Z',
  dueDate: '2020-06-20T00:00:00.000Z',
  createdAt: '2020-06-03T00:00:00.000Z',
  updatedAt: '2020-06-03T00:00:00.000Z',
};

const mockBugIssue = {
  id: 102,
  title: 'Fix login form validation',
  type: 'bug',
  status: 'selected',
  priority: '2',
  listPosition: 1,
  description: 'Login form does not validate email format correctly',
  descriptionText: 'Login form does not validate email format correctly',
  estimate: 4,
  timeSpent: 2,
  timeRemaining: 2,
  reporterId: 2,
  projectId: 1,
  userIds: [2],
  users: [mockUsers[1]],
  comments: [],
  startDate: '2020-06-02T00:00:00.000Z',
  dueDate: '2020-06-05T00:00:00.000Z',
  createdAt: '2020-06-02T00:00:00.000Z',
  updatedAt: '2020-06-02T00:00:00.000Z',
};

const mockTaskIssue = {
  id: 101,
  title: 'Add new navigation component',
  type: 'task',
  status: 'backlog',
  priority: '3',
  listPosition: 1,
  description: 'Create a responsive navigation component with mobile support',
  descriptionText: 'Create a responsive navigation component with mobile support',
  estimate: 8,
  timeSpent: 0,
  timeRemaining: 8,
  reporterId: 1,
  projectId: 1,
  userIds: [1, 2],
  users: [mockUsers[0], mockUsers[1]],
  comments: [],
  startDate: '2020-06-01T00:00:00.000Z',
  dueDate: '2020-06-10T00:00:00.000Z',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
};

// Mock component that renders the issue directly without API call
const MockIssueDetails = ({ issue }) => {
  // Import the actual styled components and sub-components
  const Type = require('./Type').default;
  const Delete = require('./Delete').default;
  const Title = require('./Title').default;
  const Description = require('./Description').default;
  const Attachments = require('./Attachments').default;
  const Comments = require('./Comments').default;
  const Status = require('./Status').default;
  const AssigneesReporter = require('./AssigneesReporter').default;
  const Priority = require('./Priority').default;
  const EstimateTracking = require('./EstimateTracking').default;
  const Dates = require('./Dates').default;
  const { TopActions, TopActionsRight, Content, Left, Right } = require('./Styles');
  const { CopyLinkButton, Button, AboutTooltip } = require('shared/components');

  const updateIssue = () => {};
  const fetchIssue = () => {};
  const fetchProject = () => {};
  const modalClose = () => {};

  return (
    <React.Fragment>
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
          <Attachments issue={issue} />
          <Comments issue={issue} fetchIssue={fetchIssue} />
        </Left>
        <Right>
          <Status issue={issue} updateIssue={updateIssue} />
          <AssigneesReporter issue={issue} updateIssue={updateIssue} projectUsers={mockUsers} />
          <Priority issue={issue} updateIssue={updateIssue} />
          <EstimateTracking issue={issue} updateIssue={updateIssue} />
          <Dates issue={issue} />
        </Right>
      </Content>
    </React.Fragment>
  );
};

export const Default = () => (
  <div style={{ width: 1000, padding: 20, backgroundColor: '#fff' }}>
    <MockIssueDetails issue={mockStoryIssue} />
  </div>
);

export const BugIssue = () => (
  <div style={{ width: 1000, padding: 20, backgroundColor: '#fff' }}>
    <MockIssueDetails issue={mockBugIssue} />
  </div>
);

export const TaskIssue = () => (
  <div style={{ width: 1000, padding: 20, backgroundColor: '#fff' }}>
    <MockIssueDetails issue={mockTaskIssue} />
  </div>
);

export const Loading = () => (
  <div style={{ width: 1000, padding: 20, backgroundColor: '#fff' }}>
    <Loader />
  </div>
);
