import React, { Fragment } from 'react';

import { PageError, CopyLinkButton, Button, AboutTooltip } from 'shared/components';

import Loader from './Loader';
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

// Mock data for the issue
const mockIssue = {
  id: 103,
  title: 'Implement dark mode',
  type: 'story',
  status: 'inprogress',
  priority: '3',
  listPosition: 1,
  description: '<p>Add dark mode theme support across the application</p>',
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
    },
  ],
  startDate: '2020-06-03T00:00:00.000Z',
  dueDate: '2020-06-20T00:00:00.000Z',
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

// A mock component that bypasses the API call and renders with static data
const MockedIssueDetails = ({ issue, projectUsers, fetchProject, updateLocalProjectIssues, modalClose }) => {
  const updateLocalIssueDetails = () => {};

  const updateIssue = () => {};

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
          <Comments issue={issue} fetchIssue={() => {}} />
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
  component: MockedIssueDetails,
  parameters: {
    layout: 'padded',
  },
};

export const Default = () => (
  <div style={{ width: '900px', maxWidth: '100%', backgroundColor: '#fff', padding: '25px 35px 60px' }}>
    <MockedIssueDetails
      issue={mockIssue}
      projectUsers={mockProjectUsers}
      fetchProject={() => {}}
      updateLocalProjectIssues={() => {}}
      modalClose={() => {}}
    />
  </div>
);

export const BugIssue = () => {
  const bugIssue = {
    ...mockIssue,
    id: 102,
    title: 'Fix login form validation',
    type: 'bug',
    status: 'selected',
    priority: '2',
    description: '<p>Login form does not validate email format correctly</p>',
    descriptionText: 'Login form does not validate email format correctly',
    estimate: 4,
    timeSpent: 2,
    timeRemaining: 2,
    reporterId: 2,
    userIds: [2],
    users: [
      {
        id: 2,
        name: 'Pickle Rick',
        avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
      },
    ],
    comments: [],
  };
  
  return (
    <div style={{ width: '900px', maxWidth: '100%', backgroundColor: '#fff', padding: '25px 35px 60px' }}>
      <MockedIssueDetails
        issue={bugIssue}
        projectUsers={mockProjectUsers}
        fetchProject={() => {}}
        updateLocalProjectIssues={() => {}}
        modalClose={() => {}}
      />
    </div>
  );
};

export const TaskIssue = () => {
  const taskIssue = {
    ...mockIssue,
    id: 101,
    title: 'Add new navigation component',
    type: 'task',
    status: 'backlog',
    priority: '3',
    description: '<p>Create a responsive navigation component with mobile support</p>',
    descriptionText: 'Create a responsive navigation component with mobile support',
    estimate: 8,
    timeSpent: 0,
    timeRemaining: 8,
    reporterId: 1,
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
    comments: [],
  };
  
  return (
    <div style={{ width: '900px', maxWidth: '100%', backgroundColor: '#fff', padding: '25px 35px 60px' }}>
      <MockedIssueDetails
        issue={taskIssue}
        projectUsers={mockProjectUsers}
        fetchProject={() => {}}
        updateLocalProjectIssues={() => {}}
        modalClose={() => {}}
      />
    </div>
  );
};

export const Loading = () => <Loader />;
