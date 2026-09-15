import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ProjectSidebar from './index';

export default {
  title: 'Project/Sidebar/ProjectSidebar',
  component: ProjectSidebar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/project/1']}>
        <div style={{ position: 'relative', height: '100vh', minWidth: '210px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description:
    'Plan, track, and manage your agile and software development projects in Jira.',
  category: 'software',
  avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
};

export const Default = {
  args: {
    project: mockProject,
  },
};

export const MarketingProject = {
  args: {
    project: {
      ...mockProject,
      id: 2,
      name: 'Brand Awareness Q4',
      category: 'marketing',
    },
  },
};

export const BusinessProject = {
  args: {
    project: {
      ...mockProject,
      id: 3,
      name: 'Enterprise Growth',
      category: 'business',
    },
  },
};
