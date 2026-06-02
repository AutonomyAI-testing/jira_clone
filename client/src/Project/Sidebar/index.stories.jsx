import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import ProjectSidebar from './index';

export default {
  title: 'Project/ProjectSidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/project/1']}>
        <Route path="/project/:id">
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Story />
          </div>
        </Route>
      </MemoryRouter>
    ),
  ],
};

const sampleProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description:
    'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
};

export const Default = {
  args: {
    project: sampleProject,
  },
};

export const MarketingProject = {
  args: {
    project: {
      ...sampleProject,
      id: 2,
      name: 'Growth Campaign 2024',
      category: 'marketing',
    },
  },
};

export const BusinessProject = {
  args: {
    project: {
      ...sampleProject,
      id: 3,
      name: 'Q4 Strategy',
      category: 'business',
    },
  },
};
