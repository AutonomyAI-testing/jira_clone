import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import ProjectBoardListIssue from './index';

const mockProjectUsers = [
  { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
  { id: 2, name: 'Pickle Rick', avatarUrl: null },
  { id: 3, name: 'Baby Yoda', avatarUrl: null },
];

const mockIssue = {
  id: 101,
  title: 'Implement green title color for board issues',
  type: 'task',
  status: 'inprogress',
  priority: '3',
  userIds: [1, 2],
};

// Container styling for the story preview
const DROPPABLE_CONTAINER_STYLE = {
  padding: 16,
  maxWidth: 280,
  background: '#f4f5f7',
  borderRadius: 4,
};

const DragDropWrapper = ({ children }) => (
  <DragDropContext onDragEnd={() => {}}>
    <Droppable droppableId="story-droppable">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} style={DROPPABLE_CONTAINER_STYLE}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

export default {
  title: 'Project/Board/Issue',
  component: ProjectBoardListIssue,
  parameters: {
    layout: 'padded',
  },
};

export const GreenTitle = {
  name: 'Green Title',
  render: () => (
    <DragDropWrapper>
      <ProjectBoardListIssue
        projectUsers={mockProjectUsers}
        issue={mockIssue}
        index={0}
      />
    </DragDropWrapper>
  ),
};

const multipleIssuesData = [
  { id: 201, title: 'Fix login form validation bug', type: 'bug', priority: '2', userIds: [2] },
  { id: 202, title: 'Add dark mode support', type: 'story', priority: '3', userIds: [1, 3] },
  { id: 203, title: 'Update API documentation', type: 'task', priority: '4', userIds: [] },
];

export const MultipleIssues = {
  name: 'Multiple Issues',
  render: () => (
    <DragDropWrapper>
      {multipleIssuesData.map((issue, index) => (
        <ProjectBoardListIssue
          key={issue.id}
          projectUsers={mockProjectUsers}
          issue={issue}
          index={index}
        />
      ))}
    </DragDropWrapper>
  ),
};
