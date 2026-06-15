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
};

// Wrapper that positions the sidebar properly since it uses position: fixed
// and is offset by the app nav bar width (left: 64px)
const SidebarPositioner = ({ children }) => (
  <div style={{ position: 'relative', height: '100vh', minWidth: '340px', background: '#f4f5f7' }}>
    <div style={{ position: 'absolute', left: 0, top: 0, height: '100vh', width: '220px', background: '#fff', borderRight: '1px solid #ebecf0' }}>
      {children}
    </div>
  </div>
);

export default {
  title: 'Project/Sidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

// Board link active
export const BoardActive = {
  name: 'Board Active',
  render: () => (
    <MemoryRouter initialEntries={['/project/1/board']}>
      <GlobalLinkReset />
      <Route
        path="/project/1"
        render={() => (
          <SidebarPositioner>
            <ProjectSidebar project={mockProject} />
          </SidebarPositioner>
        )}
      />
    </MemoryRouter>
  ),
};

// Settings link active
export const SettingsActive = {
  name: 'Settings Active',
  render: () => (
    <MemoryRouter initialEntries={['/project/1/settings']}>
      <GlobalLinkReset />
      <Route
        path="/project/1"
        render={() => (
          <SidebarPositioner>
            <ProjectSidebar project={mockProject} />
          </SidebarPositioner>
        )}
      />
    </MemoryRouter>
  ),
};
