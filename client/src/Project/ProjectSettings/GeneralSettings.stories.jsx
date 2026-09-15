import React from 'react';

import GeneralSettings from './GeneralSettings';

export default {
  title: 'Project/GeneralSettings',
  component: GeneralSettings,
  parameters: {
    layout: 'padded',
  },
};

const mockProject = {
  id: 'project-1',
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  category: 'software',
  description:
    'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
};

const fetchProject = () => Promise.resolve();

export const Default = () => (
  <GeneralSettings project={mockProject} fetchProject={fetchProject} />
);
Default.storyName = 'General Settings (Red Heading)';
