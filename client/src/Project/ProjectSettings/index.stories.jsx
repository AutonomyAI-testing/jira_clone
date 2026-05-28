import React from 'react';

import ProjectSettings from './index';

export default {
  title: 'Project/ProjectSettings',
  component: ProjectSettings,
  parameters: {
    layout: 'padded',
  },
};

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description:
    '<p>Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.</p>',
  category: 'software',
};

export const Default = {
  render: () => (
    <ProjectSettings
      project={mockProject}
      fetchProject={() => Promise.resolve()}
    />
  ),
};
