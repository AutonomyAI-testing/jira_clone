import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { IssueType, IssuePriority } from 'shared/constants/issues';
import ProjectBoardListIssue from './index';

const mockUsers = [
  { id: 1, name: 'Alice Johnson', avatarUrl: null },
  { id: 2, name: 'Bob Smith', avatarUrl: null },
  { id: 3, name: 'Charlie Brown', avatarUrl: null },
];

const StoryWrapper = ({ children }) => (
  <DragDropContext onDragEnd={() => {}}>
    <Droppable droppableId="story-droppable">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{ width: 280, padding: 8, background: '#ebecf0', borderRadius: 4 }}
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

export default {
  title: 'Project/Board/ProjectBoardListIssue',
  component: ProjectBoardListIssue,
  parameters: {
    layout: 'padded',
  },
};

// Bug + High priority + one assignee
export const BugHighPriority = {
  name: 'Bug – High Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 101,
          title: 'Login page crashes when password contains special characters',
          type: IssueType.BUG,
          priority: IssuePriority.HIGH,
          userIds: [1],
        }}
        index={0}
      />
    </StoryWrapper>
  ),
};

// Story + Medium priority + two assignees
export const StoryMediumPriority = {
  name: 'Story – Medium Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 102,
          title: 'As a user, I want to filter issues by assignee so I can focus on my work',
          type: IssueType.STORY,
          priority: IssuePriority.MEDIUM,
          userIds: [1, 2],
        }}
        index={0}
      />
    </StoryWrapper>
  ),
};

// Task + Low priority + no assignee
export const TaskLowPriority = {
  name: 'Task – Low Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 103,
          title: 'Update README with new setup instructions',
          type: IssueType.TASK,
          priority: IssuePriority.LOW,
          userIds: [],
        }}
        index={0}
      />
    </StoryWrapper>
  ),
};

// All three cards in a column
export const KanbanColumn = {
  name: 'Kanban Column (All Variants)',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 201,
          title: 'Login page crashes when password contains special characters',
          type: IssueType.BUG,
          priority: IssuePriority.HIGH,
          userIds: [1],
        }}
        index={0}
      />
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 202,
          title: 'As a user, I want to filter issues by assignee so I can focus on my work',
          type: IssueType.STORY,
          priority: IssuePriority.MEDIUM,
          userIds: [1, 2],
        }}
        index={1}
      />
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 203,
          title: 'Update README with new setup instructions',
          type: IssueType.TASK,
          priority: IssuePriority.LOW,
          userIds: [],
        }}
        index={2}
      />
      <ProjectBoardListIssue
        projectUsers={mockUsers}
        issue={{
          id: 204,
          title: 'Add unit tests for authentication service',
          type: IssueType.TASK,
          priority: IssuePriority.HIGHEST,
          userIds: [3],
        }}
        index={3}
      />
    </StoryWrapper>
  ),
};
