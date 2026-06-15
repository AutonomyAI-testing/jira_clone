import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { ProjectCategory } from 'shared/constants/projects';
import ProjectSidebar from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockProject = {
  id: '1',
  name: 'Jira Clone',
  category: ProjectCategory.SOFTWARE,
  description: 'A simplified Jira clone built with React and Node.js',
};

export default {
  title: 'Project/ProjectSidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

// Wrapper that provides router context + static path so useRouteMatch works
// and NavLink active state renders correctly.
// The sidebar is fixed-positioned (left: 64px), so we give it a relative container
// that makes the full sidebar visible.
const SidebarWrapper = ({ activePath, children }) => (
  <MemoryRouter initialEntries={[`/project/1${activePath}`]}>
    <GlobalLinkReset />
    {/* Offset container to account for the fixed sidebar's left: 64px positioning */}
    <div style={{ paddingLeft: 64, minHeight: '100vh', background: '#F4F5F7' }}>
      <Route
        path="/project/1"
        render={() => children}
      />
    </div>
  </MemoryRouter>
);

export const BoardActive = {
  name: 'Board Active',
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

export const NoActiveLink = {
  name: 'No Active Link',
  render: () => (
    <SidebarWrapper activePath="">
      <ProjectSidebar project={mockProject} />
    </SidebarWrapper>
  ),
};
