import React from 'react';
import ProjectIssueCreate from './index';

export default {
  title: 'Project/IssueCreate',
  component: ProjectIssueCreate,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '900px', padding: '20px', background: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const mockProject = {
  id: 1,
  name: 'Sample Project',
  users: [
    { id: 1, name: 'John Doe', avatarUrl: 'https://i.pravatar.cc/150?u=john' },
    { id: 2, name: 'Jane Smith', avatarUrl: 'https://i.pravatar.cc/150?u=jane' },
    { id: 3, name: 'Bob Wilson', avatarUrl: 'https://i.pravatar.cc/150?u=bob' },
  ],
  issues: [
    { id: 101, title: 'Fix login bug', type: 'bug' },
    { id: 102, title: 'Add user profile page', type: 'story' },
    { id: 103, title: 'Update documentation', type: 'task' },
  ],
};

const Template = (args) => <ProjectIssueCreate {...args} />;

export const Default = Template.bind({});
Default.args = {
  project: mockProject,
  fetchProject: () => Promise.resolve(),
  onCreate: () => console.log('Issue created'),
  modalClose: () => console.log('Modal closed'),
};
