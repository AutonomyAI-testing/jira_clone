import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

import ProjectBoardHeader from './index';
import ViewSwitcher from '../ViewSwitcher';

export default {
  title: 'Project/Board/Header',
  component: ProjectBoardHeader,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/project/1/board']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => {
  const [currentView, setCurrentView] = useState('kanban');
  return (
    <ProjectBoardHeader>
      <ViewSwitcher currentView={currentView} onViewChange={setCurrentView} />
    </ProjectBoardHeader>
  );
};
Default.storyName = 'Board Header (Red Title)';
