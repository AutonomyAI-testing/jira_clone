import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { projectData } from 'shared/utils/mockData/project';
import ProjectBoard from './index';

export default {
  title: 'Project/Board',
  component: ProjectBoard,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => React.createElement(
      MemoryRouter,
      { initialEntries: ['/project/board'] },
      React.createElement(Story, null),
    ),
  ],
};

const noop = () => {};

export const Default = {
  args: {
    project: projectData,
    fetchProject: noop,
    updateLocalProjectIssues: noop,
  },
};

export const KanbanView = {
  args: {
    project: projectData,
    fetchProject: noop,
    updateLocalProjectIssues: noop,
  },
};

export const WithManyIssues = {
  args: {
    project: {
      ...projectData,
      issues: [
        ...projectData.issues,
        {
          id: 201,
          title: 'Design new onboarding flow',
          type: 'story',
          status: 'backlog',
          priority: '2',
          listPosition: 2,
          description: 'Redesign the user onboarding experience',
          descriptionText: 'Redesign the user onboarding experience',
          estimate: 10,
          timeSpent: 0,
          timeRemaining: 10,
          reporterId: 1,
          projectId: 1,
          userIds: [1],
          users: [{ id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' }],
          productArea: 'UX',
          startDate: '2020-06-05T00:00:00.000Z',
          dueDate: '2020-06-15T00:00:00.000Z',
          dependencies: [],
          createdAt: '2020-06-05T00:00:00.000Z',
          updatedAt: '2020-06-05T00:00:00.000Z',
        },
        {
          id: 202,
          title: 'Performance audit & optimization',
          type: 'task',
          status: 'selected',
          priority: '1',
          listPosition: 2,
          description: 'Audit and optimize app performance',
          descriptionText: 'Audit and optimize app performance',
          estimate: 12,
          timeSpent: 4,
          timeRemaining: 8,
          reporterId: 2,
          projectId: 1,
          userIds: [2, 3],
          users: [
            { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
            { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
          ],
          productArea: 'Performance',
          startDate: '2020-06-06T00:00:00.000Z',
          dueDate: '2020-06-18T00:00:00.000Z',
          dependencies: [],
          createdAt: '2020-06-06T00:00:00.000Z',
          updatedAt: '2020-06-06T00:00:00.000Z',
        },
        {
          id: 203,
          title: 'Write end-to-end tests',
          type: 'task',
          status: 'inprogress',
          priority: '3',
          listPosition: 2,
          description: 'Add comprehensive E2E test coverage',
          descriptionText: 'Add comprehensive E2E test coverage',
          estimate: 20,
          timeSpent: 6,
          timeRemaining: 14,
          reporterId: 3,
          projectId: 1,
          userIds: [3],
          users: [{ id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' }],
          productArea: 'QA',
          startDate: '2020-06-07T00:00:00.000Z',
          dueDate: '2020-06-25T00:00:00.000Z',
          dependencies: [],
          createdAt: '2020-06-07T00:00:00.000Z',
          updatedAt: '2020-06-07T00:00:00.000Z',
        },
      ],
    },
    fetchProject: noop,
    updateLocalProjectIssues: noop,
  },
};
