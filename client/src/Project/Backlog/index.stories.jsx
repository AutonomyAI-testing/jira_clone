import React, { useState, Fragment } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { MemoryRouter } from 'react-router-dom';

import NormalizeStyles from 'App/NormalizeStyles';
import BaseStyles from 'App/BaseStyles';
import 'App/fontStyles.css';

import { PageLoader, PageError, Breadcrumbs } from 'shared/components';
import { updateArrayItemById } from 'shared/utils/javascript';

import SprintSection from './SprintSection';
import BacklogSection from './BacklogSection';
import { Page, Header, BoardName } from './Styles';

export default {
  title: 'Project/Backlog',
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock data
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

// Sprint issues (sprintId: 1)
const sprintIssuesMock = [
  {
    id: 102,
    title: 'Fix login form validation',
    type: 'bug',
    status: 'selected',
    priority: '2',
    estimate: 4,
    timeSpent: 2,
    timeRemaining: 2,
    reporterId: 2,
    projectId: 1,
    sprintId: 1,
    userIds: [2],
    users: [projectUsers[1]],
    startDate: '2020-06-02T00:00:00.000Z',
    dueDate: '2020-06-05T00:00:00.000Z',
    dependencies: [101],
  },
  {
    id: 103,
    title: 'Implement dark mode',
    type: 'story',
    status: 'inprogress',
    priority: '3',
    estimate: 16,
    timeSpent: 8,
    timeRemaining: 8,
    reporterId: 1,
    projectId: 1,
    sprintId: 1,
    userIds: [1, 3],
    users: [projectUsers[0], projectUsers[2]],
    startDate: '2020-06-03T00:00:00.000Z',
    dueDate: '2020-06-20T00:00:00.000Z',
    dependencies: [],
  },
  {
    id: 104,
    title: 'Update API documentation',
    type: 'task',
    status: 'done',
    priority: '4',
    estimate: 6,
    timeSpent: 6,
    timeRemaining: 0,
    reporterId: 3,
    projectId: 1,
    sprintId: 1,
    userIds: [3],
    users: [projectUsers[2]],
    startDate: '2020-06-04T00:00:00.000Z',
    dueDate: '2020-06-06T00:00:00.000Z',
    dependencies: [],
  },
  {
    id: 105,
    title: 'Add user profile settings',
    type: 'task',
    status: 'inprogress',
    priority: '3',
    estimate: 10,
    timeSpent: 4,
    timeRemaining: 6,
    reporterId: 1,
    projectId: 1,
    sprintId: 1,
    userIds: [1],
    users: [projectUsers[0]],
    startDate: '2020-06-05T00:00:00.000Z',
    dueDate: '2020-06-12T00:00:00.000Z',
    dependencies: [],
  },
  {
    id: 106,
    title: 'Fix responsive layout on mobile',
    type: 'bug',
    status: 'selected',
    priority: '4',
    estimate: 5,
    timeSpent: 0,
    timeRemaining: 5,
    reporterId: 2,
    projectId: 1,
    sprintId: 1,
    userIds: [2, 3],
    users: [projectUsers[1], projectUsers[2]],
    startDate: '2020-06-06T00:00:00.000Z',
    dueDate: '2020-06-08T00:00:00.000Z',
    dependencies: [],
  },
];

// Backlog issues (sprintId: null)
const backlogIssuesMock = [
  {
    id: 101,
    title: 'Add new navigation component',
    type: 'task',
    status: 'backlog',
    priority: '3',
    estimate: 8,
    timeSpent: 0,
    timeRemaining: 8,
    reporterId: 1,
    projectId: 1,
    sprintId: null,
    userIds: [1, 2],
    users: [projectUsers[0], projectUsers[1]],
    startDate: '2020-06-01T00:00:00.000Z',
    dueDate: '2020-06-10T00:00:00.000Z',
    dependencies: [],
  },
  {
    id: 109,
    title: 'Optimize database queries',
    type: 'task',
    status: 'backlog',
    priority: '4',
    estimate: 12,
    timeSpent: 0,
    timeRemaining: 12,
    reporterId: 2,
    projectId: 1,
    sprintId: null,
    userIds: [2],
    users: [projectUsers[1]],
    startDate: null,
    dueDate: null,
    dependencies: [],
  },
  {
    id: 110,
    title: 'Add email notifications',
    type: 'story',
    status: 'backlog',
    priority: '3',
    estimate: 15,
    timeSpent: 0,
    timeRemaining: 15,
    reporterId: 1,
    projectId: 1,
    sprintId: null,
    userIds: [1, 3],
    users: [projectUsers[0], projectUsers[2]],
    startDate: null,
    dueDate: null,
    dependencies: [],
  },
  {
    id: 111,
    title: 'Fix memory leak in board view',
    type: 'bug',
    status: 'backlog',
    priority: '5',
    estimate: 4,
    timeSpent: 0,
    timeRemaining: 4,
    reporterId: 2,
    projectId: 1,
    sprintId: null,
    userIds: [2],
    users: [projectUsers[1]],
    startDate: null,
    dueDate: null,
    dependencies: [],
  },
  {
    id: 112,
    title: 'Add keyboard shortcuts',
    type: 'task',
    status: 'backlog',
    priority: '2',
    estimate: 6,
    timeSpent: 0,
    timeRemaining: 6,
    reporterId: 1,
    projectId: 1,
    sprintId: null,
    userIds: [1],
    users: [projectUsers[0]],
    startDate: null,
    dueDate: null,
    dependencies: [],
  },
];

const activeSprint = {
  id: 1,
  name: 'Sprint 1',
  status: 'active',
  startDate: '2020-06-01T00:00:00.000Z',
  endDate: '2020-06-14T00:00:00.000Z',
  goal: 'Implement core navigation and authentication features',
  issueIds: [102, 103, 104, 105, 106],
};

// Story component that recreates ProjectBacklog without the useApi hook
const ProjectBacklogStory = () => {
  const [projectIssues, setProjectIssues] = useState([
    ...sprintIssuesMock,
    ...backlogIssuesMock,
  ]);

  const [sprints, setSprints] = useState([
    activeSprint,
    {
      id: 2,
      name: 'Sprint 2',
      status: 'planning',
      startDate: null,
      endDate: null,
      goal: 'Add reporting dashboard and analytics',
      issueIds: [],
    },
  ]);

  const currentActiveSprint = sprints.find(sprint => sprint.status === 'active');
  const backlogIssues = projectIssues.filter(issue => issue.sprintId === null);
  const sprintIssues = currentActiveSprint
    ? projectIssues.filter(issue => issue.sprintId === currentActiveSprint.id)
    : [];

  const project = {
    id: 1,
    name: 'Singularity 1.0',
    users: projectUsers,
    issues: projectIssues,
  };

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setProjectIssues(currentIssues =>
      updateArrayItemById(currentIssues, issueId, updatedFields)
    );
  };

  const updateLocalSprintData = (sprintId, updatedFields) => {
    setSprints(currentSprints =>
      updateArrayItemById(currentSprints, sprintId, updatedFields)
    );
  };

  const addNewSprint = newSprint => {
    setSprints(currentSprints => [...currentSprints, newSprint]);
  };

  const removeSprintFromLocal = sprintId => {
    setSprints(currentSprints =>
      currentSprints.filter(sprint => sprint.id !== sprintId)
    );
  };

  const handleIssueDrop = ({ draggableId, destination, source }) => {
    if (!destination) return;

    const issueId = Number(draggableId);
    const sourceSprintId = source.droppableId === 'backlog' ? null : Number(source.droppableId);
    const destSprintId = destination.droppableId === 'backlog' ? null : Number(destination.droppableId);

    if (sourceSprintId === destSprintId && source.index === destination.index) {
      return;
    }

    updateLocalProjectIssues(issueId, { sprintId: destSprintId });
  };

  const fetchProject = () => console.log('fetchProject called');
  const fetchSprints = () => console.log('fetchSprints called');

  return (
    <MemoryRouter initialEntries={['/project/board']}>
      <Page>
        <Header>
          <Breadcrumbs items={['Projects', project.name, 'Backlog']} />
          <BoardName>Backlog</BoardName>
        </Header>

        <DragDropContext onDragEnd={handleIssueDrop}>
          {currentActiveSprint && (
            <SprintSection
              sprint={currentActiveSprint}
              issues={sprintIssues}
              projectUsers={project.users}
              fetchProject={fetchProject}
              fetchSprints={fetchSprints}
              updateLocalProjectIssues={updateLocalProjectIssues}
              updateLocalSprintData={updateLocalSprintData}
              removeSprintFromLocal={removeSprintFromLocal}
            />
          )}

          <BacklogSection
            issues={backlogIssues}
            projectUsers={project.users}
            fetchProject={fetchProject}
            fetchSprints={fetchSprints}
            updateLocalProjectIssues={updateLocalProjectIssues}
            addNewSprint={addNewSprint}
          />
        </DragDropContext>
      </Page>
    </MemoryRouter>
  );
};

export const Default = () => <ProjectBacklogStory />;
