import React from 'react';
import { Route } from 'react-router-dom';

import ProjectSidebar from './index';

// Story setup notes:
// - Global preview.jsx wraps all stories with MemoryRouter at '/project/1/board'
// - We wrap the component with Route so useRouteMatch() has a non-null match object
// - Using path="/project/1" (static, not dynamic :param) ensures:
//   * match.path === match.url === '/project/1'
//   * NavLink components with to="/project/1/..." correctly show the active CSS class

// Mock project data for stories
const mockProject = {
  id: '1',
  name: 'Jira Clone',
  url: '',
  description: 'A simplified Jira clone built with React and Node.js',
  category: 'software',
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:00.000Z',
  issues: [],
  users: [],
};

/** @type { import('@storybook/react-vite').Meta } */
export default {
  title: 'Project/ProjectSidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
};

// Board page active
export const KanbanBoardActive = {
  name: 'Kanban Board Active',
  render: () => <Route path="/project/1" render={() => <ProjectSidebar project={mockProject} />} />,
};

// Settings page active
export const ProjectSettingsActive = {
  name: 'Project Settings Active',
  render: () => (
    <Route path="/project/1" render={() => <ProjectSidebar project={{ ...mockProject }} />} />
  ),
};

// Marketing project variant
export const MarketingProject = {
  name: 'Marketing Project',
  render: () => (
    <Route
      path="/project/1"
      render={() => (
        <ProjectSidebar
          project={{
            ...mockProject,
            name: 'Marketing Campaign 2024',
            category: 'marketing',
          }}
        />
      )}
    />
  ),
};

// Business project variant
export const BusinessProject = {
  name: 'Business Project',
  render: () => (
    <Route
      path="/project/1"
      render={() => (
        <ProjectSidebar
          project={{
            ...mockProject,
            name: 'Q4 Business Planning',
            category: 'business',
          }}
        />
      )}
    />
  ),
};
