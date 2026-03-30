import React from 'react';

import { projectData } from 'shared/utils/mockData/project';

import ProjectBoardIssueDetails from './index';

export default {
  title: 'Project/Board/IssueDetails',
  component: ProjectBoardIssueDetails,
  parameters: {
    layout: 'padded',
  },
};

// Mock functions for props
const mockFetchProject = () => Promise.resolve();
const mockUpdateLocalProjectIssues = () => {};
const mockModalClose = () => {};

// Issue 103 has comments for a richer view
export const Default = () => (
  <div style={{ width: '100%', maxWidth: '900px', background: '#fff', padding: '20px', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
    <ProjectBoardIssueDetails
      issueId="103"
      projectUsers={projectData.users}
      fetchProject={mockFetchProject}
      updateLocalProjectIssues={mockUpdateLocalProjectIssues}
      modalClose={mockModalClose}
    />
  </div>
);

// Task issue type
export const TaskIssue = () => (
  <div style={{ width: '100%', maxWidth: '900px', background: '#fff', padding: '20px', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
    <ProjectBoardIssueDetails
      issueId="101"
      projectUsers={projectData.users}
      fetchProject={mockFetchProject}
      updateLocalProjectIssues={mockUpdateLocalProjectIssues}
      modalClose={mockModalClose}
    />
  </div>
);

// Bug issue type
export const BugIssue = () => (
  <div style={{ width: '100%', maxWidth: '900px', background: '#fff', padding: '20px', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
    <ProjectBoardIssueDetails
      issueId="102"
      projectUsers={projectData.users}
      fetchProject={mockFetchProject}
      updateLocalProjectIssues={mockUpdateLocalProjectIssues}
      modalClose={mockModalClose}
    />
  </div>
);

// Done status issue
export const DoneIssue = () => (
  <div style={{ width: '100%', maxWidth: '900px', background: '#fff', padding: '20px', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
    <ProjectBoardIssueDetails
      issueId="104"
      projectUsers={projectData.users}
      fetchProject={mockFetchProject}
      updateLocalProjectIssues={mockUpdateLocalProjectIssues}
      modalClose={mockModalClose}
    />
  </div>
);
