import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';

import ProjectBoardListIssue from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

// Wrapper that provides required context for the issue card component
// - MemoryRouter: Enables useRouteMatch() hook used by ProjectBoardListIssue
// - DragDropContext + Droppable: Required for the Draggable component wrapper
// - GlobalLinkReset: Removes default link styling so react-router-dom links appear as plain text
const StoryWrapper = ({ children }) => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route
      path='/project/1'
      render={() => (
        <>
          <GlobalLinkReset />
          <DragDropContext onDragEnd={() => {}}>
            <Droppable droppableId='story-droppable'>
              {provided => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ padding: 16, background: '#F4F5F7', minWidth: 280, maxWidth: 340 }}
                >
                  {children}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </>
      )}
    />
  </MemoryRouter>
);

const mockProjectUsers = [
  { id: 1, name: 'Lord Gaben', avatarUrl: null },
  { id: 2, name: 'Pickle Rick', avatarUrl: null },
  { id: 3, name: 'Baby Yoda', avatarUrl: null },
];

export default {
  title: 'Project/Board/Issue',
  component: ProjectBoardListIssue,
  parameters: {
    layout: 'padded',
  },
};

export const StoryIssue = {
  name: 'Story issue',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        issue={{
          id: 1,
          title: 'Enable analytics tracking for user actions across all pages',
          type: 'story',
          priority: '3',
          userIds: [1],
        }}
        projectUsers={mockProjectUsers}
        index={0}
      />
    </StoryWrapper>
  ),
};

export const BugIssue = {
  name: 'Bug issue',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        issue={{
          id: 2,
          title: 'Fix crash on login when email contains special characters',
          type: 'bug',
          priority: '5',
          userIds: [2],
        }}
        projectUsers={mockProjectUsers}
        index={0}
      />
    </StoryWrapper>
  ),
};

export const TaskIssue = {
  name: 'Task with multiple assignees',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        issue={{
          id: 3,
          title: 'Refactor authentication middleware to support OAuth2',
          type: 'task',
          priority: '4',
          userIds: [1, 2, 3],
        }}
        projectUsers={mockProjectUsers}
        index={0}
      />
    </StoryWrapper>
  ),
};

export const LowPriorityIssue = {
  name: 'Low priority story',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        issue={{
          id: 4,
          title: 'Update README with new setup instructions',
          type: 'story',
          priority: '1',
          userIds: [3],
        }}
        projectUsers={mockProjectUsers}
        index={0}
      />
    </StoryWrapper>
  ),
};
