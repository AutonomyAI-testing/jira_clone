import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import ProjectSidebar from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockProject = {
  id: 1,
  name: 'Project Management',
  url: 'https://example.com',
  description: 'Track and manage your software development projects.',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: [],
  issues: [],
};

export default {
  title: 'Project/ProjectSidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

// Default: Kanban Board active
export const BoardActive = {
  name: 'Kanban Board Active',
  render: () => (
    <MemoryRouter initialEntries={['/project/1/board']}>
      <GlobalLinkReset />
      <Route
        path="/project/1"
        render={() => (
          <div style={{ width: '240px', position: 'relative', minHeight: '100vh' }}>
            <ProjectSidebar project={mockProject} />
          </div>
        )}
      />
    </MemoryRouter>
  ),
};

// Settings active
export const SettingsActive = {
  name: 'Project Settings Active',
  render: () => (
    <MemoryRouter initialEntries={['/project/1/settings']}>
      <GlobalLinkReset />
      <Route
        path="/project/1"
        render={() => (
          <div style={{ width: '240px', position: 'relative', minHeight: '100vh' }}>
            <ProjectSidebar project={mockProject} />
          </div>
        )}
      />
    </MemoryRouter>
  ),
};

// Marketing project category
export const MarketingProject = {
  name: 'Marketing Project',
  render: () => (
    <MemoryRouter initialEntries={['/project/2/board']}>
      <GlobalLinkReset />
      <Route
        path="/project/2"
        render={() => (
          <div style={{ width: '240px', position: 'relative', minHeight: '100vh' }}>
            <ProjectSidebar project={{ ...mockProject, name: 'Marketing Campaign', category: 'marketing' }} />
          </div>
        )}
      />
    </MemoryRouter>
  ),
};
