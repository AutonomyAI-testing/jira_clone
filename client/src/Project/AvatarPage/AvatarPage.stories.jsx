import React from 'react';
import AvatarPage from './index';

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Plan, track, and manage your agile and software development projects.',
  category: 'software',
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
      users: [
        { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
      ],
    },
    {
      id: 102,
      title: 'Fix login form validation',
      type: 'bug',
      status: 'selected',
      users: [{ id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' }],
    },
    {
      id: 103,
      title: 'Implement dark mode',
      type: 'story',
      status: 'inprogress',
      users: [
        { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
      ],
    },
    {
      id: 104,
      title: 'Update API documentation',
      type: 'task',
      status: 'done',
      users: [{ id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' }],
    },
  ],
};

const mockEmptyProject = {
  id: 2,
  name: 'Empty Project',
  category: 'software',
  users: [],
  issues: [],
};

export default {
  title: 'Project/AvatarPage',
  component: AvatarPage,
  parameters: {
    layout: 'padded',
  },
};

export const TeamMembers = {
  args: {
    project: mockProject,
  },
};

export const EmptyTeam = {
  args: {
    project: mockEmptyProject,
  },
};
