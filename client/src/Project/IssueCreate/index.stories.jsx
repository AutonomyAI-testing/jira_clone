import React from 'react';
import { projectData } from 'shared/utils/mockData/project';
import ProjectIssueCreate from './index';

export default {
  title: 'Project/IssueCreate',
  component: ProjectIssueCreate,
  parameters: { layout: 'padded' },
};

export const Default = () => (
  <ProjectIssueCreate
    project={projectData}
    fetchProject={() => Promise.resolve()}
    onCreate={() => {}}
    modalClose={() => {}}
  />
);
