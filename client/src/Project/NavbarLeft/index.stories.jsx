import React from 'react';
import ProjectNavbarLeft from './index';

export default {
  title: 'Project/NavbarLeft',
  component: ProjectNavbarLeft,
  parameters: { layout: 'fullscreen' },
};

export const Default = () => (
  <ProjectNavbarLeft
    issueSearchModalOpen={() => {}}
    issueCreateModalOpen={() => {}}
  />
);

export const Hover = () => (
  <div style={{ width: '200px' }}>
    <ProjectNavbarLeft
      issueSearchModalOpen={() => {}}
      issueCreateModalOpen={() => {}}
    />
  </div>
);
