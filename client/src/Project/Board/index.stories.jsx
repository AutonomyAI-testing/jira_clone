import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import ProjectBoard from './index';
import ProjectBoardLists from './Lists/index';
import ProjectBoardList from './Lists/List/index';

// ---- Mock project data ----
const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description:
    'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: [
    {
      id: 1,
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
      email: 'gaben@jira.guest',
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 2,
      name: 'Pickle Rick',
      avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
      email: 'pickle.rick@jira.guest',
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 3,
      name: 'Baby Yoda',
      avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
      email: 'baby.yoda@jira.guest',
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
  ],
  issues: [
    {
      id: 101,
      title: 'Add new navigation component',
      type: 'task',
      status: 'backlog',
      priority: '3',
      listPosition: 1,
      estimate: 8,
      timeSpent: 0,
      timeRemaining: 8,
      reporterId: 1,
      projectId: 1,
      userIds: [1, 2],
      users: [
        { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
      ],
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 105,
      title: 'Write unit tests for authentication',
      type: 'task',
      status: 'backlog',
      priority: '2',
      listPosition: 2,
      estimate: 5,
      timeSpent: 0,
      timeRemaining: 5,
      reporterId: 3,
      projectId: 1,
      userIds: [3],
      users: [{ id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' }],
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 102,
      title: 'Fix login form validation',
      type: 'bug',
      status: 'selected',
      priority: '2',
      listPosition: 1,
      estimate: 4,
      timeSpent: 2,
      timeRemaining: 2,
      reporterId: 2,
      projectId: 1,
      userIds: [2],
      users: [
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
      ],
      createdAt: '2020-06-02T00:00:00.000Z',
      updatedAt: '2020-06-02T00:00:00.000Z',
    },
    {
      id: 106,
      title: 'Improve dashboard performance',
      type: 'story',
      status: 'selected',
      priority: '4',
      listPosition: 2,
      estimate: 10,
      timeSpent: 0,
      timeRemaining: 10,
      reporterId: 1,
      projectId: 1,
      userIds: [1],
      users: [{ id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' }],
      createdAt: '2020-06-05T00:00:00.000Z',
      updatedAt: '2020-06-05T00:00:00.000Z',
    },
    {
      id: 103,
      title: 'Implement dark mode',
      type: 'story',
      status: 'inprogress',
      priority: '3',
      listPosition: 1,
      estimate: 16,
      timeSpent: 8,
      timeRemaining: 8,
      reporterId: 1,
      projectId: 1,
      userIds: [1, 3],
      users: [
        { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
      ],
      createdAt: '2020-06-03T00:00:00.000Z',
      updatedAt: '2020-06-03T00:00:00.000Z',
    },
    {
      id: 107,
      title: 'Refactor API service layer',
      type: 'task',
      status: 'inprogress',
      priority: '5',
      listPosition: 2,
      estimate: 12,
      timeSpent: 3,
      timeRemaining: 9,
      reporterId: 2,
      projectId: 1,
      userIds: [2, 3],
      users: [
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
      ],
      createdAt: '2020-06-06T00:00:00.000Z',
      updatedAt: '2020-06-06T00:00:00.000Z',
    },
    {
      id: 104,
      title: 'Update API documentation',
      type: 'task',
      status: 'done',
      priority: '4',
      listPosition: 1,
      estimate: 6,
      timeSpent: 6,
      timeRemaining: 0,
      reporterId: 3,
      projectId: 1,
      userIds: [3],
      users: [{ id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' }],
      createdAt: '2020-06-04T00:00:00.000Z',
      updatedAt: '2020-06-04T00:00:00.000Z',
    },
    {
      id: 108,
      title: 'Deploy staging environment',
      type: 'task',
      status: 'done',
      priority: '3',
      listPosition: 2,
      estimate: 3,
      timeSpent: 3,
      timeRemaining: 0,
      reporterId: 1,
      projectId: 1,
      userIds: [1],
      users: [{ id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' }],
      createdAt: '2020-06-05T00:00:00.000Z',
      updatedAt: '2020-06-06T00:00:00.000Z',
    },
  ],
};

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
};

export default {
  title: 'Project/Board',
  component: ProjectBoard,
  parameters: {
    layout: 'fullscreen',
  },
};

// ---- Story: Full ProjectBoard (kanban view) ----
export const KanbanBoard = () => {
  const [project, setProject] = React.useState(mockProject);

  const fetchProject = () => {
    // no-op for story
  };

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setProject((prev) => ({
      ...prev,
      issues: prev.issues.map((issue) =>
        issue.id === issueId ? { ...issue, ...updatedFields } : issue,
      ),
    }));
  };

  return (
    <ProjectBoard
      project={project}
      fetchProject={fetchProject}
      updateLocalProjectIssues={updateLocalProjectIssues}
    />
  );
};

KanbanBoard.storyName = 'Kanban Board (Full)';

// ---- Story: Lists only (without header/filters) ----
export const BoardLists = () => {
  const [project, setProject] = React.useState(mockProject);

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setProject((prev) => ({
      ...prev,
      issues: prev.issues.map((issue) =>
        issue.id === issueId ? { ...issue, ...updatedFields } : issue,
      ),
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <ProjectBoardLists
        project={project}
        filters={defaultFilters}
        updateLocalProjectIssues={updateLocalProjectIssues}
      />
    </div>
  );
};

BoardLists.storyName = 'Board Lists';

// ---- Story: Single List column ----
export const SingleList = () => (
  <div style={{ padding: '20px', width: '250px' }}>
    <DragDropContext onDragEnd={() => {}}>
      <ProjectBoardList
        status="inprogress"
        project={mockProject}
        filters={defaultFilters}
        currentUserId={1}
      />
    </DragDropContext>
  </div>
);

SingleList.storyName = 'Single List (In Progress)';
