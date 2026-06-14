import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import ProjectBoardListIssue from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockUsers = [
  { id: 1, name: 'Lord Gaben', avatarUrl: null },
  { id: 2, name: 'Baby Yoda', avatarUrl: null },
  { id: 3, name: 'Alice Chen', avatarUrl: null },
];

const IssueWrapper = ({ issue, projectUsers = mockUsers }) => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route
      path="/project/1"
      render={() => (
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId="story-droppable">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  padding: '16px',
                  maxWidth: '260px',
                  background: '#f4f5f7',
                  borderRadius: '4px',
                }}
              >
                <GlobalLinkReset />
                <ProjectBoardListIssue projectUsers={projectUsers} issue={issue} index={0} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    />
  </MemoryRouter>
);

const allIssues = [
  {
    id: 101,
    title: 'Login button unresponsive on Safari 16',
    type: 'bug',
    priority: '4',
    userIds: [1],
  },
  {
    id: 102,
    title: 'Implement drag-and-drop reordering for board columns',
    type: 'story',
    priority: '3',
    userIds: [2, 3],
  },
  {
    id: 103,
    title: 'Update README with local development setup instructions',
    type: 'task',
    priority: '1',
    userIds: [],
  },
  {
    id: 104,
    title: 'Critical data loss on issue deletion in production environment',
    type: 'bug',
    priority: '5',
    userIds: [1, 2, 3],
  },
];

const AllVariantsWrapper = () => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route
      path="/project/1"
      render={() => (
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId="all-variants-droppable">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  padding: '16px',
                  width: '280px',
                  background: '#f4f5f7',
                  borderRadius: '4px',
                }}
              >
                <GlobalLinkReset />
                {allIssues.map((issue, i) => (
                  <ProjectBoardListIssue
                    key={issue.id}
                    projectUsers={mockUsers}
                    issue={issue}
                    index={i}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    />
  </MemoryRouter>
);

export default {
  title: 'Project/BoardListIssue',
  component: ProjectBoardListIssue,
  parameters: { layout: 'padded' },
};

export const BugHighPriority = {
  name: 'Bug – High Priority',
  render: () => (
    <IssueWrapper
      issue={{
        id: 101,
        title: 'Login button unresponsive on Safari 16',
        type: 'bug',
        priority: '4',
        userIds: [1],
      }}
    />
  ),
};

export const StoryMediumPriority = {
  name: 'Story – Medium Priority',
  render: () => (
    <IssueWrapper
      issue={{
        id: 102,
        title: 'Implement drag-and-drop reordering for board columns',
        type: 'story',
        priority: '3',
        userIds: [2, 3],
      }}
    />
  ),
};

export const TaskLowestPriority = {
  name: 'Task – Lowest Priority',
  render: () => (
    <IssueWrapper
      issue={{
        id: 103,
        title: 'Update README with local development setup instructions',
        type: 'task',
        priority: '1',
        userIds: [],
      }}
    />
  ),
};

export const BugHighestPriority = {
  name: 'Bug – Highest Priority with Multiple Assignees',
  render: () => (
    <IssueWrapper
      issue={{
        id: 104,
        title: 'Critical data loss on issue deletion in production environment',
        type: 'bug',
        priority: '5',
        userIds: [1, 2, 3],
      }}
    />
  ),
};

export const AllVariants = {
  name: 'All Variants – Red Title',
  render: () => <AllVariantsWrapper />,
};
