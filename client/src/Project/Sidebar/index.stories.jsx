import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import ProjectSidebar from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockProject = {
  name: 'Project Alpha',
  category: 'software',
  description: 'A software project management tool for modern teams.',
};

// Wrapper forces iframe to be wider than 999px so @media display:none doesn't fire
const SidebarWrapper = ({ activePath = '/board' }) => (
  <MemoryRouter initialEntries={[`/project/1${activePath}`]}>
    <GlobalLinkReset />
    <div style={{ width: 1200, minHeight: '100vh', position: 'relative' }}>
      <Route
        path="/project/1"
        render={() => <ProjectSidebar project={mockProject} />}
      />
    </div>
  </MemoryRouter>
);

export default {
  title: 'Project/Sidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const BoardActive = {
  name: 'Board Active',
  render: () => <SidebarWrapper activePath="/board" />,
};

export const SettingsActive = {
  name: 'Settings Active',
  render: () => <SidebarWrapper activePath="/settings" />,
};
