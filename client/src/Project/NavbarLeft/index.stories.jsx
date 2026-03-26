import React from 'react';
import ProjectNavbarLeft from './index';

export default {
  title: 'Project/NavbarLeft',
  component: ProjectNavbarLeft,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => (
  <ProjectNavbarLeft
    issueSearchModalOpen={() => {}}
    issueCreateModalOpen={() => {}}
  />
);

export const Hover = () => (
  <div style={{ height: '100vh' }}>
    <ProjectNavbarLeft
      issueSearchModalOpen={() => {}}
      issueCreateModalOpen={() => {}}
    />
    <div style={{ marginLeft: 200, padding: 20 }}>
      <p>Hover over the sidebar to see the expanded state with text labels.</p>
    </div>
  </div>
);
