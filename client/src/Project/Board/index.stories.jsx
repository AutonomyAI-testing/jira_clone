import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { projectData } from 'shared/utils/mockData/project';
import Board from './index';

export default {
  title: 'Project/Board',
  component: Board,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/project/1/board']}>
        <Route path="/project/:projectId/board">
          <Story />
        </Route>
      </MemoryRouter>
    ),
  ],
};

const noop = () => {};

export const Default = {
  args: {
    project: projectData,
    fetchProject: noop,
    updateLocalProjectIssues: noop,
  },
};

export const KanbanView = {
  args: {
    project: projectData,
    fetchProject: noop,
    updateLocalProjectIssues: noop,
  },
};
