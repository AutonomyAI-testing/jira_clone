import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { projectData } from 'shared/utils/mockData/project';

import ProjectBoard from './index';

export default {
  title: 'Project/Board',
  component: ProjectBoard,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/project/board']}>
        <Route path="/project/board">
          <div style={{ padding: '0', background: '#fff', minHeight: '100vh' }}>
            <Story />
          </div>
        </Route>
      </MemoryRouter>
    ),
  ],
};

const mockUpdateLocalProjectIssues = () => {
  // no-op in story
};

const mockFetchProject = () => {
  // no-op in story
};

export const KanbanView = {
  render: () => (
    <ProjectBoard
      project={projectData}
      fetchProject={mockFetchProject}
      updateLocalProjectIssues={mockUpdateLocalProjectIssues}
    />
  ),
  name: 'Kanban View',
};
