/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import React, { Fragment } from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import api from 'shared/utils/api';
import { PageError, Breadcrumbs, CopyLinkButton, Button } from 'shared/components';

import Type from '../Board/IssueDetails/Type';
import Delete from '../Board/IssueDetails/Delete';
import Title from '../Board/IssueDetails/Title';
import Description from '../Board/IssueDetails/Description';
import Comments from '../Board/IssueDetails/Comments';
import Status from '../Board/IssueDetails/Status';
import AssigneesReporter from '../Board/IssueDetails/AssigneesReporter';
import Priority from '../Board/IssueDetails/Priority';
import EstimateTracking from '../Board/IssueDetails/EstimateTracking';
import Dates from '../Board/IssueDetails/Dates';
import { PageContainer, TopActions, TopActionsRight, Content, Left, Right } from './Styles';

// Static mock issue
const mockIssue = {
  id: 103,
  title: 'Implement dark mode across the application',
  type: 'story',
  status: 'inprogress',
  priority: '3',
  listPosition: 1,
  description:
    '<p>Add dark mode theme support across the application.</p><p>This includes updating all styled-components to support a dark theme and adding a theme toggle in the navbar.</p>',
  descriptionText: 'Add dark mode theme support across the application.',
  estimate: 16,
  timeSpent: 8,
  timeRemaining: 8,
  reporterId: 1,
  projectId: 1,
  productArea: 'Design System',
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
  dependencies: [],
  createdAt: '2020-06-03T00:00:00.000Z',
  updatedAt: '2020-06-03T00:00:00.000Z',
};

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
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
    {
      id: 3,
      name: 'Baby Yoda',
      avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
    },
  ],
};

// Inline demo that doesn't rely on hooks or API calls
const IssuePageDemo = () => {
  const issue = mockIssue;
  const project = mockProject;

  const updateLocalIssueDetails = () => {};
  const updateIssue = () => {};
  const handleBackToBoard = () => {};
  const handleDelete = () => {};

  return (
    <Fragment>
      <Breadcrumbs items={['Projects', project.name, 'Board', issue.title]} />
      <PageContainer>
        <TopActions>
          <Type issue={issue} updateIssue={updateIssue} />
          <TopActionsRight>
            <CopyLinkButton variant="empty" />
            <Delete issue={issue} fetchProject={() => {}} modalClose={handleDelete} />
            <Button icon="arrow-left" variant="empty" onClick={handleBackToBoard}>
              Back to Board
            </Button>
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
            <AssigneesReporter issue={issue} updateIssue={updateIssue} projectUsers={project.users} />
            <Priority issue={issue} updateIssue={updateIssue} />
            <EstimateTracking issue={issue} updateIssue={updateIssue} />
            <Dates issue={issue} />
          </Right>
        </Content>
      </PageContainer>
    </Fragment>
  );
};

// Wrap in a fake page layout matching the actual ProjectPage layout
import styled from 'styled-components';
import { sizes } from 'shared/utils/styles';

const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

const MockProjectPage = styled.div`
  padding: 25px 32px 50px ${paddingLeft}px;
`;

const ProjectIssuePageRender = () => (
  <MemoryRouter>
    <MockProjectPage>
      <IssuePageDemo />
    </MockProjectPage>
  </MemoryRouter>
);

export default ProjectIssuePageRender;
