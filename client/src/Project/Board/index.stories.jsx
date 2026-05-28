import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { projectData } from 'shared/utils/mockData/project';

import ProjectBoard from './index';

export default {
  title: 'Project/Board',
  component: ProjectBoard,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/project/board']} initialIndex={0}>
        <Route path="/project/board">
          <Story />
        </Route>
      </MemoryRouter>
    ),
  ],
};

const mockProject = {
  ...projectData,
  issues: [
    // Backlog issues
    {
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
      users: [
        { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
      ],
      comments: [],
      productArea: 'Frontend',
      startDate: '2020-06-01T00:00:00.000Z',
      dueDate: '2020-06-10T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 105,
      title: 'Set up CI/CD pipeline',
      type: 'task',
      status: 'backlog',
      priority: '4',
      listPosition: 2,
      description: 'Configure GitHub Actions for continuous integration and deployment',
      descriptionText: 'Configure GitHub Actions for CI/CD',
      estimate: 10,
      timeSpent: 0,
      timeRemaining: 10,
      reporterId: 3,
      projectId: 1,
      userIds: [3],
      users: [
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
      ],
      comments: [],
      productArea: 'DevOps',
      startDate: '2020-06-05T00:00:00.000Z',
      dueDate: '2020-06-15T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
    // Selected for development
    {
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
      users: [
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
      ],
      comments: [],
      productArea: 'Authentication',
      startDate: '2020-06-02T00:00:00.000Z',
      dueDate: '2020-06-05T00:00:00.000Z',
      dependencies: [101],
      createdAt: '2020-06-02T00:00:00.000Z',
      updatedAt: '2020-06-02T00:00:00.000Z',
    },
    {
      id: 106,
      title: 'Design new onboarding flow',
      type: 'story',
      status: 'selected',
      priority: '5',
      listPosition: 2,
      description: 'Redesign user onboarding experience with step-by-step guidance',
      descriptionText: 'Redesign user onboarding experience',
      estimate: 12,
      timeSpent: 0,
      timeRemaining: 12,
      reporterId: 1,
      projectId: 1,
      userIds: [1],
      users: [
        { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
      ],
      comments: [],
      productArea: 'UX',
      startDate: '2020-06-06T00:00:00.000Z',
      dueDate: '2020-06-18T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-02T00:00:00.000Z',
      updatedAt: '2020-06-03T00:00:00.000Z',
    },
    // In progress
    {
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
        { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
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
      productArea: 'UI/UX',
      startDate: '2020-06-03T00:00:00.000Z',
      dueDate: '2020-06-20T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-03T00:00:00.000Z',
      updatedAt: '2020-06-03T00:00:00.000Z',
    },
    {
      id: 107,
      title: 'Refactor authentication service',
      type: 'task',
      status: 'inprogress',
      priority: '4',
      listPosition: 2,
      description: 'Extract auth logic into dedicated service with tests',
      descriptionText: 'Extract auth logic into dedicated service',
      estimate: 6,
      timeSpent: 3,
      timeRemaining: 3,
      reporterId: 2,
      projectId: 1,
      userIds: [2, 3],
      users: [
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
      ],
      comments: [],
      productArea: 'Backend',
      startDate: '2020-06-04T00:00:00.000Z',
      dueDate: '2020-06-08T00:00:00.000Z',
      dependencies: [102],
      createdAt: '2020-06-04T00:00:00.000Z',
      updatedAt: '2020-06-05T00:00:00.000Z',
    },
    // Done
    {
      id: 104,
      title: 'Update API documentation',
      type: 'task',
      status: 'done',
      priority: '4',
      listPosition: 1,
      description: 'Update all API endpoints documentation with examples',
      descriptionText: 'Update all API endpoints documentation with examples',
      estimate: 6,
      timeSpent: 6,
      timeRemaining: 0,
      reporterId: 3,
      projectId: 1,
      userIds: [3],
      users: [
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
      ],
      comments: [],
      productArea: 'Backend',
      startDate: '2020-06-04T00:00:00.000Z',
      dueDate: '2020-06-06T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-04T00:00:00.000Z',
      updatedAt: '2020-06-04T00:00:00.000Z',
    },
    {
      id: 108,
      title: 'Write unit tests for utility functions',
      type: 'task',
      status: 'done',
      priority: '2',
      listPosition: 2,
      description: 'Add comprehensive unit tests for all utility functions',
      descriptionText: 'Add unit tests for utility functions',
      estimate: 5,
      timeSpent: 5,
      timeRemaining: 0,
      reporterId: 1,
      projectId: 1,
      userIds: [1],
      users: [
        { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
      ],
      comments: [],
      productArea: 'Testing',
      startDate: '2020-06-01T00:00:00.000Z',
      dueDate: '2020-06-03T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-03T00:00:00.000Z',
    },
  ],
};

export const KanbanView = {
  render: () => (
    <ProjectBoard
      project={mockProject}
      fetchProject={() => Promise.resolve()}
      updateLocalProjectIssues={() => {}}
    />
  ),
};
