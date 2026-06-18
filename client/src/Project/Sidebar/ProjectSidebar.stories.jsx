import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import ProjectSidebar from './index';

export default {
  title: 'Project/ProjectSidebar',
  component: ProjectSidebar,
};

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Plan, track, and manage your agile and software development projects.',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: [
    {
      id: 1,
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
    },
    {
      id: 2,
      name: 'Pickle Rick',
      avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
    },
  ],
};

const withRouter = (path, Story) => (
  <MemoryRouter initialEntries={[path]}>
    <Route path="/project/:projectId">
      <Story />
    </Route>
  </MemoryRouter>
);

export const Default = () =>
  withRouter('/project/1/board', () => <ProjectSidebar project={mockProject} />);

Default.storyName = 'Default';
