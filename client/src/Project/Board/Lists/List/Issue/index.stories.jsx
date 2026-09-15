import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';

import ProjectBoardListIssue from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockUsers = [
  { id: 1, name: 'Alice Johnson', avatarUrl: null },
  { id: 2, name: 'Bob Smith', avatarUrl: null },
  { id: 3, name: 'Carol Williams', avatarUrl: null },
];

const StoryWrapper = ({ children }) => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route
      path='/project/1'
      render={() => (
        <GlobalLinkReset />
      )}
    />
    <Route
      path='/project/1'
      render={() => (
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId='story-droppable'>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  background: '#f4f5f7',
                  padding: '10px',
                  borderRadius: '4px',
                  width: '260px',
                }}
              >
                {children}
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
  title: 'Project/Board/Issue Card',
  parameters: {
    layout: 'centered',
    docs: { canvas: { sourceState: 'shown' } },
  },
};

export const BugHighPriority = {
  name: 'Bug · High Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 101,
          title: 'Login page crashes when password field is left empty',
          type: 'bug',
          priority: '4',
          userIds: [1],
        }}
        index={0}
      />
    </StoryWrapper>
  ),
};

export const StoryMediumPriority = {
  name: 'Story · Medium Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 102,
          title: 'As a user I want to filter issues by assignee on the board',
          type: 'story',
          priority: '3',
          userIds: [2],
        }}
        index={0}
      />
    </StoryWrapper>
  ),
};

export const TaskLowPriority = {
  name: 'Task · Low Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 103,
          title: 'Update README with new deployment instructions',
          type: 'task',
          priority: '2',
          userIds: [3],
        }}
        index={0}
      />
    </StoryWrapper>
  ),
};

export const MultipleAssignees = {
  name: 'Multiple Assignees',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 104,
          title: 'Implement dark mode across all dashboard components',
          type: 'task',
          priority: '5',
          userIds: [1, 2, 3],
        }}
        index={0}
      />
    </StoryWrapper>
  ),
};

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 101,
          title: 'Login page crashes when password field is left empty',
          type: 'bug',
          priority: '4',
          userIds: [1],
        }}
        index={0}
      />
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 102,
          title: 'As a user I want to filter issues by assignee on the board',
          type: 'story',
          priority: '3',
          userIds: [2],
        }}
        index={1}
      />
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 103,
          title: 'Update README with new deployment instructions',
          type: 'task',
          priority: '2',
          userIds: [3],
        }}
        index={2}
      />
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 104,
          title: 'Implement dark mode across all dashboard components',
          type: 'task',
          priority: '5',
          userIds: [1, 2, 3],
        }}
        index={3}
      />
    </StoryWrapper>
  ),
};
