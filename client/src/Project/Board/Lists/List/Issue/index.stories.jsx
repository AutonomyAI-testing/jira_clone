import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';

import ProjectBoardListIssue from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

// Mock project users — use name-only (no avatarUrl) so Avatar renders as colored letter circles
const mockUsers = [
  { id: 1, name: 'Alice Chen' },
  { id: 2, name: 'Bob Tanaka' },
  { id: 3, name: 'Carlos Rivera' },
  { id: 4, name: 'Diana Park' },
];

const mockIssues = {
  task: {
    id: 101,
    title: 'Implement drag-and-drop reordering for board list items',
    type: 'task',
    priority: '3', // Medium
    userIds: [1, 2],
  },
  bug: {
    id: 102,
    title: 'Fix broken link navigation on issue detail page',
    type: 'bug',
    priority: '5', // Highest
    userIds: [3],
  },
  story: {
    id: 103,
    title: 'As a user, I want to filter issues by assignee on the board',
    type: 'story',
    priority: '4', // High
    userIds: [1, 3, 4],
  },
  multiAssignee: {
    id: 104,
    title: 'Upgrade authentication flow to support OAuth2 providers',
    type: 'task',
    priority: '2', // Low
    userIds: [1, 2, 3, 4],
  },
  shortTitle: {
    id: 105,
    title: 'Update README',
    type: 'task',
    priority: '1', // Lowest
    userIds: [2],
  },
};

// Wrapper that provides DnD context required by react-beautiful-dnd
const DndWrapper = ({ children }) => (
  <DragDropContext onDragEnd={() => {}}>
    <Droppable droppableId="story-droppable">
      {provided => (
        <div ref={provided.innerRef} {...provided.droppableProps} style={{ padding: '8px' }}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

// Full router + dnd + style-reset wrapper
const StoryWrapper = ({ children }) => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route
      path="/project/1"
      render={() => (
        <>
          <GlobalLinkReset />
          <DndWrapper>{children}</DndWrapper>
        </>
      )}
    />
  </MemoryRouter>
);

export default {
  title: 'Project/Board/ProjectBoardListIssue',
  component: ProjectBoardListIssue,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div style={{ maxWidth: 280, margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

// Task card with 2 assignees and medium priority
export const TaskCard = {
  name: 'Task - Medium Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={mockIssues.task}
        index={0}
      />
    </StoryWrapper>
  ),
};

// Bug card with single assignee and highest priority
export const BugCard = {
  name: 'Bug - Highest Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={mockIssues.bug}
        index={0}
      />
    </StoryWrapper>
  ),
};

// Story card with 3 assignees and high priority
export const StoryCard = {
  name: 'Story - High Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={mockIssues.story}
        index={0}
      />
    </StoryWrapper>
  ),
};

// Multiple cards stacked like a real kanban list
export const KanbanList = {
  name: 'Kanban List (Multiple Cards)',
  render: () => (
    <MemoryRouter initialEntries={['/project/1/board']}>
      <Route
        path="/project/1"
        render={() => (
          <>
            <GlobalLinkReset />
            <DragDropContext onDragEnd={() => {}}>
              <Droppable droppableId="story-droppable-list">
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      background: '#f4f5f7',
                      borderRadius: 3,
                      padding: '8px',
                      minHeight: 100,
                    }}
                  >
                    <ProjectBoardListIssue
                      projectUsers={mockUsers}
                      issue={mockIssues.task}
                      index={0}
                    />
                    <ProjectBoardListIssue
                      projectUsers={mockUsers}
                      issue={mockIssues.bug}
                      index={1}
                    />
                    <ProjectBoardListIssue
                      projectUsers={mockUsers}
                      issue={mockIssues.story}
                      index={2}
                    />
                    <ProjectBoardListIssue
                      projectUsers={mockUsers}
                      issue={mockIssues.multiAssignee}
                      index={3}
                    />
                    <ProjectBoardListIssue
                      projectUsers={mockUsers}
                      issue={mockIssues.shortTitle}
                      index={4}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </>
        )}
      />
    </MemoryRouter>
  ),
};
