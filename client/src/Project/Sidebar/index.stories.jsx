import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import ProjectSidebar from './index';

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  category: 'software',
  url: 'https://example.com',
  description: 'Plan, track, and manage your agile and software development projects.',
  users: [],
};

const mockProjectMarketing = {
  id: 2,
  name: 'Brand Refresh Campaign',
  category: 'marketing',
  url: 'https://example.com',
  description: 'Rebrand campaign with new visual identity and messaging.',
  users: [],
};

const mockProjectBusiness = {
  id: 3,
  name: 'Q4 Growth Strategy',
  category: 'business',
  url: 'https://example.com',
  description: 'Business growth initiatives for Q4.',
  users: [],
};

// The Sidebar is fixed-position and uses left: 64px (appNavBarLeftWidth).
// We make the story container 64px wide on the left so the sidebar is visible.
const StoryContainer = styled.div`
  position: relative;
  width: 294px; /* 64px nav + 230px sidebar */
  height: 100vh;
  min-height: 600px;
  background: #f4f5f7;
`;

const GlobalFix = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
  #storybook-root { padding: 0 !important; }
`;

/** Wrapper that sets up MemoryRouter + Route so useRouteMatch works and NavLink gets active class */
const SidebarWrapper = ({ project, activePath = '/board' }) => (
  <MemoryRouter initialEntries={[`/project/1${activePath}`]}>
    <GlobalFix />
    <Route
      path="/project/1"
      render={() => (
        <StoryContainer>
          <ProjectSidebar project={project} />
        </StoryContainer>
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

export const BoardActive = {
  name: 'Board Active',
  render: () => <SidebarWrapper project={mockProject} activePath="/board" />,
};

export const SettingsActive = {
  name: 'Settings Active',
  render: () => <SidebarWrapper project={mockProject} activePath="/settings" />,
};

export const MarketingProject = {
  name: 'Marketing Project',
  render: () => <SidebarWrapper project={mockProjectMarketing} activePath="/board" />,
};

export const BusinessProject = {
  name: 'Business Project',
  render: () => <SidebarWrapper project={mockProjectBusiness} activePath="/board" />,
};
