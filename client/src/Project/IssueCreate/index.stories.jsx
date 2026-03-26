import React, { useState } from 'react';
import ProjectIssueCreate from './index';

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description:
    'Plan, track, and manage your agile and software development projects in Jira.',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: [
    {
      id: 1,
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
      email: 'gaben@jira.guest',
    },
    {
      id: 2,
      name: 'Pickle Rick',
      avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
      email: 'pickle.rick@jira.guest',
    },
    {
      id: 3,
      name: 'Baby Yoda',
      avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
      email: 'baby.yoda@jira.guest',
    },
  ],
  issues: [
    {
      id: 101,
      title: 'Add new navigation component',
      type: 'task',
      status: 'backlog',
      priority: '3',
    },
    {
      id: 102,
      title: 'Fix login form validation',
      type: 'bug',
      status: 'selected',
      priority: '2',
    },
    {
      id: 103,
      title: 'Implement dark mode',
      type: 'story',
      status: 'inprogress',
      priority: '3',
    },
  ],
};

export default {
  title: 'Project/IssueCreate',
  component: ProjectIssueCreate,
  parameters: {
    layout: 'padded',
  },
};

// Quick mode story (default, 500px width)
export const QuickMode = () => {
  const [mode, setMode] = useState('quick');
  return (
    <div style={{ width: 500, border: '1px solid #dfe1e6', borderRadius: 4, background: '#fff' }}>
      <ProjectIssueCreate
        project={mockProject}
        fetchProject={() => Promise.resolve()}
        onCreate={() => {}}
        modalClose={() => {}}
        mode={mode}
        onModeChange={setMode}
      />
    </div>
  );
};

QuickMode.storyName = 'Quick Mode';

// Detailed mode story (800px width)
export const DetailedMode = () => {
  const [mode, setMode] = useState('detailed');
  return (
    <div style={{ width: 800, border: '1px solid #dfe1e6', borderRadius: 4, background: '#fff' }}>
      <ProjectIssueCreate
        project={mockProject}
        fetchProject={() => Promise.resolve()}
        onCreate={() => {}}
        modalClose={() => {}}
        mode={mode}
        onModeChange={setMode}
      />
    </div>
  );
};

DetailedMode.storyName = 'Detailed Mode';

// Interactive story — start in quick mode, switch to detailed via "More Options"
export const InteractiveModeSwitch = () => {
  const [mode, setMode] = useState('quick');
  const width = mode === 'quick' ? 500 : 800;
  return (
    <div
      style={{
        width,
        border: '1px solid #dfe1e6',
        borderRadius: 4,
        background: '#fff',
        transition: 'width 0.3s',
      }}
    >
      <ProjectIssueCreate
        project={mockProject}
        fetchProject={() => Promise.resolve()}
        onCreate={() => {}}
        modalClose={() => {}}
        mode={mode}
        onModeChange={setMode}
      />
    </div>
  );
};

InteractiveModeSwitch.storyName = 'Interactive Mode Switch';
