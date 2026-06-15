import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import AvatarPage from './index';
import { projectData } from 'shared/utils/mockData/project';

export default {
  title: 'Project/AvatarPage',
  component: AvatarPage,
  parameters: {
    layout: 'padded',
  },
};

const mockFetchProject = () => Promise.resolve();

export const Default = {
  name: 'Default',
  render: () => (
    <MemoryRouter initialEntries={['/project/1/avatar']}>
      <Route
        path="/project/1"
        render={() => (
          <div style={{ padding: '20px', maxWidth: '800px' }}>
            <AvatarPage
              project={projectData}
              fetchProject={mockFetchProject}
            />
          </div>
        )}
      />
    </MemoryRouter>
  ),
};
