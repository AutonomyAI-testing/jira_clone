import React from 'react';

import { IssueType, IssuePriority } from 'shared/constants/issues';
import ProjectIssueCreatePage from './index';

export default {
  title: 'Project/IssueCreatePage',
  component: ProjectIssueCreatePage,
};

// Mock project data for testing the form with multiple users and dependencies
const mockProject = {
  id: 1,
  name: 'JIRA Clone',
  // Users available for reporter and assignee selection
  // IDs use numbers to match the currentUser mock (id: 1) so Reporter auto-selects
  users: [
    {
      id: 1,
      name: 'Alice Johnson',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Bob Smith',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Charlie Davis',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },
  ],
  // Existing issues available as dependencies for new issue
  issues: [
    {
      id: 101,
      title: 'Update authentication flow',
      type: IssueType.TASK,
      status: 'backlog',
    },
    {
      id: 102,
      title: 'Fix login page bug',
      type: IssueType.BUG,
      status: 'inprogress',
    },
    {
      id: 103,
      title: 'Implement dark mode feature',
      type: IssueType.STORY,
      status: 'backlog',
    },
  ],
};

// Default story showing the complete issue creation form
export const Default = () => (
  <ProjectIssueCreatePage project={mockProject} fetchProject={() => {}} />
);
