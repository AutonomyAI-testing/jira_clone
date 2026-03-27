import React from 'react';

import ProjectBoardIssueDetails from './index';
import Loader from './Loader';

// Mock issue data
const mockIssue = {
  id: 101,
  title: 'Add new navigation component',
  type: 'story',
  status: 'inprogress',
  priority: '3',
  listPosition: 1,
  description: '<p>Create a responsive navigation component with mobile support. This component should handle both desktop and mobile layouts seamlessly.</p>',
  descriptionText: 'Create a responsive navigation component with mobile support',
  estimate: 16,
  timeSpent: 8,
  timeRemaining: 8,
  reporterId: 1,
  projectId: 1,
  userIds: [1, 2],
  users: [
    {
      id: 1,
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
    },
    {
      id: 2,
      name: 'Pickle Rick',
      avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
    },
  ],
  comments: [
    {
      id: 201,
      body: 'Great progress so far! The theme switcher looks good.',
      issueId: 101,
      userId: 2,
      user: {
        id: 2,
        name: 'Pickle Rick',
        avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
      },
      createdAt: '2020-06-05T00:00:00.000Z',
      updatedAt: '2020-06-05T00:00:00.000Z',
    },
  ],
  startDate: '2020-06-01T00:00:00.000Z',
  dueDate: '2020-06-15T00:00:00.000Z',
  dependencies: [],
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-05T00:00:00.000Z',
};

const mockBugIssue = {
  ...mockIssue,
  id: 102,
  title: 'Fix login form validation',
  type: 'bug',
  status: 'selected',
  priority: '2',
  description: '<p>Login form does not validate email format correctly. Users can submit invalid email addresses.</p>',
  descriptionText: 'Login form does not validate email format correctly',
};

const mockTaskIssue = {
  ...mockIssue,
  id: 103,
  title: 'Update API documentation',
  type: 'task',
  status: 'done',
  priority: '4',
  description: '<p>Update all API endpoints documentation with examples and proper response schemas.</p>',
  descriptionText: 'Update all API endpoints documentation with examples',
};

const projectUsers = [
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

// Create a wrapper that mocks the useApi hook behavior
const MockedIssueDetails = ({ issue, isLoading = false, hasError = false }) => {
  // We need to mock the useApi hook by providing data directly
  // Since the component uses useApi internally, we'll render a simplified version
  // that just shows the layout with the Attachments component
  
  if (isLoading) {
    return <Loader />;
  }
  
  // Import and render sub-components directly for testing
  const Type = require('./Type').default;
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
  const Delete = require('./Delete').default;
  
  const noop = () => {};
  const updateIssue = noop;
  const fetchProject = noop;
  const fetchIssue = noop;
  const modalClose = noop;
  
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
          <AssigneesReporter issue={issue} updateIssue={updateIssue} projectUsers={projectUsers} />
          <Priority issue={issue} updateIssue={updateIssue} />
          <EstimateTracking issue={issue} updateIssue={updateIssue} />
          <Dates issue={issue} />
        </Right>
      </Content>
    </React.Fragment>
  );
};

export default {
  title: 'Project/Board/IssueDetails',
  component: MockedIssueDetails,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '1040px', 
        maxWidth: '100%',
        background: '#fff',
        borderRadius: '3px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 20px',
        padding: '24px 35px 60px',
      }}>
        <Story />
      </div>
    ),
  ],
};

// Default story - story issue type
export const Default = () => <MockedIssueDetails issue={mockIssue} />;

// Bug issue type
export const BugIssue = () => <MockedIssueDetails issue={mockBugIssue} />;

// Task issue type
export const TaskIssue = () => <MockedIssueDetails issue={mockTaskIssue} />;

// Loading state
export const Loading = () => <MockedIssueDetails isLoading={true} />;
