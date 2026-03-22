import React from 'react';
import MindmapView from './index';

export default {
  title: 'Project/Board/MindmapView',
  component: MindmapView,
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock project data with users and issues including dependencies
const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
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
      title: 'Add navigation component',
      type: 'task',
      status: 'backlog',
      priority: '3',
      estimate: 8,
      timeSpent: 0,
      timeRemaining: 8,
      userIds: [1, 2],
      productArea: 'Frontend',
      dependencies: [],
    },
    {
      id: 102,
      title: 'Fix login validation',
      type: 'bug',
      status: 'selected',
      priority: '2',
      estimate: 4,
      timeSpent: 2,
      timeRemaining: 2,
      userIds: [2],
      productArea: 'Authentication',
      dependencies: [101], // Blocked by 101
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
      userIds: [1, 3],
      productArea: 'UI/UX',
      dependencies: [],
    },
    {
      id: 104,
      title: 'Update API docs',
      type: 'task',
      status: 'done',
      priority: '4',
      estimate: 6,
      timeSpent: 6,
      timeRemaining: 0,
      userIds: [3],
      productArea: 'Backend',
      dependencies: [],
    },
    {
      id: 105,
      title: 'Setup CI/CD pipeline',
      type: 'task',
      status: 'backlog',
      priority: '2',
      estimate: 12,
      timeSpent: 0,
      timeRemaining: 12,
      userIds: [1],
      productArea: 'DevOps',
      dependencies: [102, 104], // Blocked by 102 and 104
    },
    {
      id: 106,
      title: 'Database optimization',
      type: 'task',
      status: 'selected',
      priority: '1',
      estimate: 10,
      timeSpent: 0,
      timeRemaining: 10,
      userIds: [2, 3],
      productArea: 'Backend',
      dependencies: [105], // Blocked by 105
    },
  ],
};

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
};

// Default story showing the mindmap with all features
export const Default = {
  args: {
    project: mockProject,
    filters: defaultFilters,
    currentUserId: 1,
  },
};

// Story with toolbox highlighted - instructions in description
export const WithToolbox = {
  args: {
    project: mockProject,
    filters: defaultFilters,
    currentUserId: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'The toolbox appears centered at the top with Magic Wand (aligns tasks chronologically) and Play (animates task flow) buttons.',
      },
    },
  },
};

// Story with user filter applied
export const FilteredByUser = {
  args: {
    project: mockProject,
    filters: {
      ...defaultFilters,
      userIds: [1],
    },
    currentUserId: 1,
  },
};

// Story showing dependency relationships
export const WithDependencies = {
  args: {
    project: {
      ...mockProject,
      issues: mockProject.issues.map(issue => ({
        ...issue,
        // Ensure dependencies are properly set to show blocker lines
      })),
    },
    filters: defaultFilters,
    currentUserId: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows dependency/blocker relationships between tasks. Red lines indicate blockers.',
      },
    },
  },
};
