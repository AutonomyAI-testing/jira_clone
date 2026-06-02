import ProjectSettings from './index';

export default {
  title: 'Project/ProjectSettings',
  component: ProjectSettings,
  parameters: {
    layout: 'fullscreen',
  },
};

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description:
    'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
};

export const Default = {
  args: {
    project: mockProject,
    fetchProject: () => Promise.resolve(),
  },
};

export const MarketingProject = {
  args: {
    project: {
      ...mockProject,
      name: 'Q4 Marketing Campaign',
      url: 'https://example.com/marketing',
      category: 'marketing',
      description: 'Drive brand awareness and lead generation for Q4 product launches.',
    },
    fetchProject: () => Promise.resolve(),
  },
};
