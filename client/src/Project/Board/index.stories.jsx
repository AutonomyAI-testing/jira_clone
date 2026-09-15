import React, { useState } from 'react';

import { projectData } from 'shared/utils/mockData/project';

import ProjectBoard from './index';

export default {
  title: 'Project/Board',
  component: ProjectBoard,
  parameters: {
    layout: 'fullscreen',
  },
};

// Wrapper component that simulates the project state management
const BoardWithState = () => {
  const [project, setProject] = useState(projectData);

  const fetchProject = () => {};

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setProject(prev => ({
      ...prev,
      issues: prev.issues.map(issue =>
        issue.id === issueId ? { ...issue, ...updatedFields } : issue,
      ),
    }));
  };

  return (
    <div style={{ padding: '0', background: '#f4f5f7', minHeight: '100vh' }}>
      <ProjectBoard
        project={project}
        fetchProject={fetchProject}
        updateLocalProjectIssues={updateLocalProjectIssues}
      />
    </div>
  );
};

export const KanbanView = {
  name: 'Kanban View',
  render: () => <BoardWithState />,
};
