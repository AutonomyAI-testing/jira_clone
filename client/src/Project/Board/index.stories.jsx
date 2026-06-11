import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import ProjectBoard from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const projectUsers = [
  {
    id: 1,
    name: 'Lord Gaben',
    avatarUrl: null,
  },
  {
    id: 2,
    name: 'Pickle Rick',
    avatarUrl: null,
  },
  {
    id: 3,
    name: 'Baby Yoda',
    avatarUrl: null,
  },
];

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'A Jira Clone',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: projectUsers,
  issues: [
    {
      id: 101,
      title: 'Add new navigation component',
      type: 'task',
      status: 'backlog',
      priority: '3',
      listPosition: 1,
      userIds: [1, 2],
      users: [projectUsers[0], projectUsers[1]],
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 102,
      title: 'Improve performance on the dashboard',
      type: 'bug',
      status: 'backlog',
      priority: '5',
      listPosition: 2,
      userIds: [2],
      users: [projectUsers[1]],
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 103,
      title: 'Fix login form validation',
      type: 'bug',
      status: 'selected',
      priority: '2',
      listPosition: 1,
      userIds: [2],
      users: [projectUsers[1]],
      createdAt: '2020-06-02T00:00:00.000Z',
      updatedAt: '2020-06-02T00:00:00.000Z',
    },
    {
      id: 104,
      title: 'Write end-to-end tests for auth flow',
      type: 'task',
      status: 'selected',
      priority: '4',
      listPosition: 2,
      userIds: [3],
      users: [projectUsers[2]],
      createdAt: '2020-06-02T00:00:00.000Z',
      updatedAt: '2020-06-02T00:00:00.000Z',
    },
    {
      id: 105,
      title: 'Implement dark mode',
      type: 'story',
      status: 'inprogress',
      priority: '3',
      listPosition: 1,
      userIds: [1, 3],
      users: [projectUsers[0], projectUsers[2]],
      createdAt: '2020-06-03T00:00:00.000Z',
      updatedAt: '2020-06-03T00:00:00.000Z',
    },
    {
      id: 106,
      title: 'Update API documentation',
      type: 'task',
      status: 'done',
      priority: '4',
      listPosition: 1,
      userIds: [3],
      users: [projectUsers[2]],
      createdAt: '2020-06-04T00:00:00.000Z',
      updatedAt: '2020-06-04T00:00:00.000Z',
    },
    {
      id: 107,
      title: 'Refactor database queries',
      type: 'task',
      status: 'done',
      priority: '2',
      listPosition: 2,
      userIds: [1],
      users: [projectUsers[0]],
      createdAt: '2020-06-04T00:00:00.000Z',
      updatedAt: '2020-06-04T00:00:00.000Z',
    },
  ],
};

// Project with only some columns populated — to show empty state in "Selected" column
const sparseProject = {
  ...mockProject,
  issues: mockProject.issues.filter(i => i.status !== 'selected'),
};

const BoardWrapper = ({ project }) => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route
      path="/project/1/board"
      render={() => (
        <React.Fragment>
          <GlobalLinkReset />
          <div style={{ padding: '25px 32px 50px 32px' }}>
            <ProjectBoard
              project={project}
              fetchProject={() => Promise.resolve()}
              updateLocalProjectIssues={() => {}}
            />
          </div>
        </React.Fragment>
      )}
    />
  </MemoryRouter>
);

const meta = {
  title: 'Project/Board',
  component: ProjectBoard,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const KanbanDefault = {
  name: 'Kanban – Default',
  render: () => <BoardWrapper project={mockProject} />,
};

export const KanbanWithEmptyColumn = {
  name: 'Kanban – Empty Column (Selected)',
  render: () => <BoardWrapper project={sparseProject} />,
};
