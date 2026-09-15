import React from 'react';

import ToastPage from './index';

export default {
  title: 'Project/ToastPage',
  component: ToastPage,
  parameters: {
    layout: 'padded',
  },
};

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
  ],
  issues: [],
};

export const Default = () => <ToastPage project={mockProject} />;
