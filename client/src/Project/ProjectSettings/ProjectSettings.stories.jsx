import React from 'react';
import { projectData } from 'shared/utils/mockData/project';
import ProjectSettings from './index';

export default {
  title: 'Project/ProjectSettings',
  component: ProjectSettings,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => (
  <div style={{ padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
    <ProjectSettings project={projectData} fetchProject={() => {}} />
  </div>
);
