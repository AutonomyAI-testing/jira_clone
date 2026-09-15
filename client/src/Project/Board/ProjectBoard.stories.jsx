import React from 'react';
import { Route } from 'react-router-dom';

import ProjectBoard from './index';

// Mock project data with realistic sample issues for demonstration
const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Plan, track, and manage your agile and software development projects in Jira.',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: [
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
  ],
  issues: [
    {
      id: 101,
      title: 'Add new navigation component',
      type: 'task',
      status: 'backlog',
      priority: '3',
      listPosition: 1,
      userIds: [1, 2],
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 105,
      title: 'Write unit tests for auth module',
      type: 'task',
      status: 'backlog',
      priority: '2',
      listPosition: 2,
      userIds: [3],
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 106,
      title: 'Design system audit',
      type: 'story',
      status: 'backlog',
      priority: '4',
      listPosition: 3,
      userIds: [1],
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
      userIds: [2],
      createdAt: '2020-06-02T00:00:00.000Z',
      updatedAt: '2020-06-02T00:00:00.000Z',
    },
    {
      id: 107,
      title: 'Refactor API error handling',
      type: 'task',
      status: 'selected',
      priority: '3',
      listPosition: 2,
      userIds: [1, 3],
      createdAt: '2020-06-02T00:00:00.000Z',
      updatedAt: '2020-06-02T00:00:00.000Z',
    },
    {
      id: 103,
      title: 'Implement dark mode',
      type: 'story',
      status: 'inprogress',
      priority: '3',
      listPosition: 1,
      userIds: [1, 3],
      createdAt: '2020-06-03T00:00:00.000Z',
      updatedAt: '2020-06-03T00:00:00.000Z',
    },
    {
      id: 108,
      title: 'Performance optimization for large boards',
      type: 'task',
      status: 'inprogress',
      priority: '4',
      listPosition: 2,
      userIds: [2],
      createdAt: '2020-06-03T00:00:00.000Z',
      updatedAt: '2020-06-03T00:00:00.000Z',
    },
    {
      id: 104,
      title: 'Update API documentation',
      type: 'task',
      status: 'done',
      priority: '4',
      listPosition: 1,
      userIds: [3],
      createdAt: '2020-06-04T00:00:00.000Z',
      updatedAt: '2020-06-04T00:00:00.000Z',
    },
    {
      id: 109,
      title: 'Deploy staging environment',
      type: 'story',
      status: 'done',
      priority: '5',
      listPosition: 2,
      userIds: [1, 2],
      createdAt: '2020-06-04T00:00:00.000Z',
      updatedAt: '2020-06-04T00:00:00.000Z',
    },
  ],
};

/** @type { import('@storybook/react-vite').Meta } */
export default {
  title: 'Project/Board',
  component: ProjectBoard,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
};

// Kanban board view with issues in various workflow states
export const KanbanView = {
  name: 'Kanban View',
  render: () => (
    <Route
      path="/project/:projectId"
      render={() => (
        <ProjectBoard
          project={mockProject}
          fetchProject={() => Promise.resolve()}
          updateLocalProjectIssues={() => {}}
        />
      )}
    />
  ),
};
