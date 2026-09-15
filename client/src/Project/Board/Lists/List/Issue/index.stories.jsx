import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';

import ProjectBoardListIssue from './index';

const GlobalStyles = createGlobalStyle`
  body { background: #f4f5f7; font-family: 'CircularStdBook', sans-serif; }
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

// Mock project users - one uses the reference avatar image (served via staticDirs)
const projectUsers = [
  {
    id: 1,
    name: 'Mob Psycho',
    avatarUrl: '/avatar.png',
  },
  {
    id: 2,
    name: 'Lord Gaben',
    avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
  },
  {
    id: 3,
    name: 'Baby Yoda',
    avatarUrl: null,
  },
];

// Wrapper providing routing + dnd context
const StoryWrapper = ({ children }) => (
  <MemoryRouter initialEntries={['/project/board']}>
    <GlobalStyles />
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="story-droppable">
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ padding: '16px', minHeight: '200px', maxWidth: '280px' }}
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </MemoryRouter>
);

export default {
  title: 'Project/Board/Issue Card',
  component: ProjectBoardListIssue,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'board',
      values: [{ name: 'board', value: '#f4f5f7' }],
    },
  },
  decorators: [
    Story => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
};

// Standard task issue with single assignee (reference avatar)
export const TaskWithAvatar = {
  name: 'Task — Single Assignee',
  render: () => (
    <ProjectBoardListIssue
      projectUsers={projectUsers}
      issue={{
        id: 101,
        title: 'Implement user authentication flow with OAuth2 provider',
        type: 'task',
        priority: '4',
        userIds: [1],
      }}
      index={0}
    />
  ),
};

// Bug issue with two assignees including the reference avatar
export const BugWithMultipleAssignees = {
  name: 'Bug — Multiple Assignees',
  render: () => (
    <ProjectBoardListIssue
      projectUsers={projectUsers}
      issue={{
        id: 102,
        title: 'Fix broken drag-and-drop on Firefox when using touch events',
        type: 'bug',
        priority: '5',
        userIds: [1, 3],
      }}
      index={1}
    />
  ),
};

// Story-type issue with medium priority
export const StoryIssue = {
  name: 'Story — Medium Priority',
  render: () => (
    <ProjectBoardListIssue
      projectUsers={projectUsers}
      issue={{
        id: 103,
        title: 'As a user I can filter issues by assignee in the board view',
        type: 'story',
        priority: '3',
        userIds: [3],
      }}
      index={2}
    />
  ),
};

// Dragging state — wraps the real component in an outer div that applies the same CSS
// the Issue styled component applies when isBeingDragged=true (rotate + shadow).
// react-beautiful-dnd cannot set isDragging=true programmatically, so we replicate
// the visual by rendering the real component inside a transform wrapper.
export const BeingDragged = {
  name: 'Being Dragged',
  render: () => (
    <MemoryRouter initialEntries={['/project/board']}>
      <GlobalStyles />
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="dragged-droppable">
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                padding: '16px',
                minHeight: '200px',
                maxWidth: '280px',
                // Apply the same CSS the Issue styled component uses when isDragging
                transform: 'rotate(3deg)',
                filter: 'drop-shadow(5px 10px 30px rgba(9,30,66,0.15))',
              }}
            >
              <ProjectBoardListIssue
                projectUsers={projectUsers}
                issue={{
                  id: 104,
                  title: 'Add real-time collaboration via WebSockets',
                  type: 'task',
                  priority: '4',
                  userIds: [1],
                }}
                index={0}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </MemoryRouter>
  ),
};
