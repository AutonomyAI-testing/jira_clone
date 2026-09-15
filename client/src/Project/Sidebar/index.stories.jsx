import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import ProjectSidebar from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockSoftwareProject = {
  id: 1,
  name: 'Project Jira Clone',
  url: '',
  description: 'A project management tool',
  category: 'software',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
  users: [],
};

const mockMarketingProject = {
  id: 2,
  name: 'Campaign Tracker',
  url: '',
  description: 'Marketing campaign management',
  category: 'marketing',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
  users: [],
};

const mockBusinessProject = {
  id: 3,
  name: 'Business Operations',
  url: '',
  description: 'Business operations management',
  category: 'business',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
  users: [],
};

// Wrapper providing MemoryRouter + Route for useRouteMatch and NavLink
const SidebarWrapper = ({ project, activePath }) => (
  <MemoryRouter initialEntries={[`/project/1${activePath}`]}>
    <Route
      path="/project/1"
      render={() => (
        <>
          <GlobalLinkReset />
          <ProjectSidebar project={project} />
        </>
      )}
    />
  </MemoryRouter>
);

export default {
  title: 'Project/Sidebar/ProjectSidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div style={{ minWidth: 1200, minHeight: 600, position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
};

// Default: Software project with Board active
export const BoardActive = {
  name: 'Board Active (Software Project)',
  render: () => (
    <SidebarWrapper project={mockSoftwareProject} activePath="/board" />
  ),
};

// Settings active
export const SettingsActive = {
  name: 'Settings Active',
  render: () => (
    <SidebarWrapper project={mockSoftwareProject} activePath="/settings" />
  ),
};

// Marketing project
export const MarketingProject = {
  name: 'Marketing Project',
  render: () => (
    <SidebarWrapper project={mockMarketingProject} activePath="/board" />
  ),
};

// Business project
export const BusinessProject = {
  name: 'Business Project',
  render: () => (
    <SidebarWrapper project={mockBusinessProject} activePath="/board" />
  ),
};
