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
  url: 'https://jira-clone.example.com',
  description: 'A simplified Jira clone built with React and Node.js.',
  category: 'software',
  createdAt: '2023-01-15T08:00:00.000Z',
  updatedAt: '2024-03-10T14:22:00.000Z',
};

// Wrapper that provides MemoryRouter with a static path so useRouteMatch()
// returns a predictable match.path (no :param placeholders), which is required
// for NavLink active state to work correctly.
const SidebarWrapper = ({ activePath }) => (
  <MemoryRouter initialEntries={[`/project/1${activePath}`]}>
    <GlobalLinkReset />
    <Route
      path="/project/1"
      render={() => (
        <div style={{ position: 'relative', minHeight: '100vh', background: '#F4F5F7' }}>
          {/* marginLeft offsets the fixed appNavBar so the sidebar is visible */}
          <div style={{ marginLeft: 64 }}>
            <ProjectSidebar project={mockProject} />
          </div>
        </div>
      )}
    />
  </MemoryRouter>
);

export default {
  title: 'Project/Sidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

// Default view — no link is active
export const Default = {
  name: 'Default View',
  render: () => <SidebarWrapper activePath="" />,
};

// Kanban Board link highlighted as active
export const BoardActive = {
  name: 'Board Link Active',
  render: () => <SidebarWrapper activePath="/board" />,
};

// Settings link highlighted as active
export const SettingsActive = {
  name: 'Settings Link Active',
  render: () => <SidebarWrapper activePath="/settings" />,
};
