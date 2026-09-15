import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import ProjectSidebar from './index';

export default {
  title: 'Project/ProjectSidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: 1200 }}>
        <Story />
      </div>
    ),
  ],
};

const defaultProject = {
  id: 1,
  name: 'Singularity 1.0',
  category: 'software',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Track and manage your agile software development projects.',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: [
    { id: 1, name: 'Lord Gaben', email: 'gaben@jira.guest' },
    { id: 2, name: 'Pickle Rick', email: 'pickle.rick@jira.guest' },
  ],
};

const marketingProject = {
  id: 2,
  name: 'Q4 Go-to-Market Campaign',
  category: 'marketing',
  url: 'https://example.com',
  description: 'Plan and execute the Q4 go-to-market strategy.',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: [
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Bob Smith', email: 'bob@example.com' },
  ],
};

const longNameProject = {
  id: 3,
  name: 'Enterprise Resource Planning & Workflow Automation Platform v2.0',
  category: 'business',
  url: 'https://example.com',
  description: 'A comprehensive enterprise platform for managing workflows.',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: [
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com' },
  ],
};

const SidebarWrapper = ({ project, activePath = '/board' }) => (
  <MemoryRouter initialEntries={[`/project/1${activePath}`]}>
    <Route
      path="/project/1"
      render={() => <ProjectSidebar project={project} />}
    />
  </MemoryRouter>
);

export const Default = {
  name: 'Default (Software Project)',
  render: () => <SidebarWrapper project={defaultProject} activePath="/board" />,
};

export const SettingsActive = {
  name: 'Settings Active',
  render: () => <SidebarWrapper project={defaultProject} activePath="/settings" />,
};

export const MarketingProject = {
  name: 'Marketing Project',
  render: () => <SidebarWrapper project={marketingProject} activePath="/board" />,
};

export const LongProjectName = {
  name: 'Long Project Name (overflow test)',
  render: () => <SidebarWrapper project={longNameProject} activePath="/board" />,
};
