import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';

import ProjectBoardListIssue from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockProjectUsers = [
  { id: 1, name: 'Samantha Chen', avatarUrl: null },
  { id: 2, name: 'Marcus Rivera', avatarUrl: null },
];

const mockIssueTask = {
  id: 101,
  title: 'Implement drag-and-drop reordering for kanban cards',
  type: 'task',
  priority: '3',
  userIds: [1],
};

const mockIssueBug = {
  id: 102,
  title: 'Login page crashes on Safari 15 when cookies are blocked',
  type: 'bug',
  priority: '5',
  userIds: [1, 2],
};

const mockIssueStory = {
  id: 103,
  title: 'As a user, I want to filter issues by assignee',
  type: 'story',
  priority: '4',
  userIds: [2],
};

const DndWrapper = ({ children }) => (
  <DragDropContext onDragEnd={() => {}}>
    <Droppable droppableId="story-droppable">
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{ padding: '8px', background: '#f4f5f7', borderRadius: '4px', minWidth: '260px' }}
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

const StoryWrapper = ({ children }) => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route
      path="/project/1"
      render={() => (
        <React.Fragment>
          <GlobalLinkReset />
          <DndWrapper>{children}</DndWrapper>
        </React.Fragment>
      )}
    />
  </MemoryRouter>
);

export default {
  title: 'Project/Board/Issue Card',
  component: ProjectBoardListIssue,
  parameters: {
    layout: 'padded',
  },
};

export const TaskMediumPriority = {
  name: 'Task – Medium Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue issue={mockIssueTask} projectUsers={mockProjectUsers} index={0} />
    </StoryWrapper>
  ),
};

export const BugHighestPriority = {
  name: 'Bug – Highest Priority (2 Assignees)',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue issue={mockIssueBug} projectUsers={mockProjectUsers} index={0} />
    </StoryWrapper>
  ),
};

export const StoryHighPriority = {
  name: 'Story – High Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue issue={mockIssueStory} projectUsers={mockProjectUsers} index={0} />
    </StoryWrapper>
  ),
};

export const MultipleCards = {
  name: 'Multiple Cards (Column View)',
  render: () => (
    <MemoryRouter initialEntries={['/project/1/board']}>
      <Route
        path="/project/1"
        render={() => (
          <React.Fragment>
            <GlobalLinkReset />
            <DragDropContext onDragEnd={() => {}}>
              <Droppable droppableId="story-droppable">
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      padding: '8px',
                      background: '#f4f5f7',
                      borderRadius: '4px',
                      minWidth: '260px',
                      maxWidth: '320px',
                    }}
                  >
                    <ProjectBoardListIssue
                      issue={mockIssueTask}
                      projectUsers={mockProjectUsers}
                      index={0}
                    />
                    <ProjectBoardListIssue
                      issue={mockIssueBug}
                      projectUsers={mockProjectUsers}
                      index={1}
                    />
                    <ProjectBoardListIssue
                      issue={mockIssueStory}
                      projectUsers={mockProjectUsers}
                      index={2}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </React.Fragment>
        )}
      />
    </MemoryRouter>
  ),
};
