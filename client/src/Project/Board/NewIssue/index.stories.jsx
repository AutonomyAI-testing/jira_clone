import React from 'react';
import ProjectBoardNewIssue from './index';

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Plan, track, and manage your agile and software development projects in Jira.',
  category: 'software',
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
    },
    {
      id: 102,
      title: 'Fix login form validation',
      type: 'bug',
      status: 'selected',
      priority: '2',
    },
    {
      id: 103,
      title: 'Implement dark mode',
      type: 'story',
      status: 'inprogress',
      priority: '3',
    },
  ],
};

export default {
  title: 'Project/Board/NewIssue',
  component: ProjectBoardNewIssue,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => (
  <ProjectBoardNewIssue
    project={mockProject}
    fetchProject={() => Promise.resolve()}
  />
);
