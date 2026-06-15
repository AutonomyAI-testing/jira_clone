import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import ProjectSidebar from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockProject = {
  id: '1',
  name: 'Jira Clone',
  category: 'software',
  description: 'A full-featured project management tool built with React and Node.js.',
};

export default {
  title: 'Project/Sidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

const SidebarWrapper = ({ activePath, children }) => (
  <MemoryRouter initialEntries={[`/project/1${activePath}`]}>
    <GlobalLinkReset />
    <Route
      path="/project/1"
      render={() => (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f5f7' }}>
          {/* Spacer for the left nav bar (the app has a fixed left nav) */}
          <div style={{ width: '64px', background: '#0052cc', flexShrink: 0 }} />
          {children}
        </div>
      )}
    />
  </MemoryRouter>
);

export const BoardActive = {
  name: 'Kanban Board Active',
  render: () => (
    <SidebarWrapper activePath="/board">
      <ProjectSidebar project={mockProject} />
    </SidebarWrapper>
  ),
};

export const SettingsActive = {
  name: 'Settings Active',
  render: () => (
    <SidebarWrapper activePath="/settings">
      <ProjectSidebar project={mockProject} />
    </SidebarWrapper>
  ),
};
