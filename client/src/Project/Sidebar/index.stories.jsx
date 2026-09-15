import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import ProjectSidebar from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Plan, track, and manage your agile and software development projects.',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: [],
};

const SidebarWrapper = ({ activePath, project }) => (
  <MemoryRouter initialEntries={[`/project/1${activePath}`]}>
    <GlobalLinkReset />
    <Route
      path="/project/1"
      render={() => <ProjectSidebar project={project} />}
    />
  </MemoryRouter>
);

export default {
  title: 'Project/ProjectSidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const BoardActive = {
  name: 'Board Active',
  render: () => (
    <div style={{ marginLeft: 64, width: 240, height: '100vh', position: 'relative' }}>
      <SidebarWrapper activePath="/board" project={mockProject} />
    </div>
  ),
};

export const SettingsActive = {
  name: 'Settings Active',
  render: () => (
    <div style={{ marginLeft: 64, width: 240, height: '100vh', position: 'relative' }}>
      <SidebarWrapper activePath="/settings" project={mockProject} />
    </div>
  ),
};
