import ProjectSettings from './index';

export default {
  title: 'Project/ProjectSettings',
  component: ProjectSettings,
  parameters: {
    layout: 'padded',
  },
};

const sampleProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description:
    '<p>Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.</p>',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
};

export const Default = {
  args: {
    project: sampleProject,
    fetchProject: () => Promise.resolve(),
  },
};
