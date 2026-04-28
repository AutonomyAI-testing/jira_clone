import React, { Fragment, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Breadcrumbs, Button } from 'shared/components';

// Import the actual subcomponents
import TransitionMatrix from './TransitionMatrix';
import TransitionDiagram from './TransitionDiagram';
import { Container, Header, Section, SectionTitle } from './Styles';
import { ColumnsContainer, AddButton } from './ColumnEditor/Styles';
import ColumnCard from './ColumnEditor/ColumnCard';

export default {
  title: 'Project/WorkflowSettings',
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock workflow data with 5 columns as specified
const mockWorkflow = {
  columns: [
    { id: 'backlog', title: 'Backlog', color: '#dfe1e6', wipLimit: 0, position: 0 },
    { id: 'selected_for_dev', title: 'Selected for Dev', color: '#0052cc', wipLimit: 5, position: 1 },
    { id: 'in_progress', title: 'In Progress', color: '#FF991F', wipLimit: 3, position: 2 },
    { id: 'in_review', title: 'In Review', color: '#6554C0', wipLimit: 2, position: 3 },
    { id: 'done', title: 'Done', color: '#0B875B', wipLimit: 0, position: 4 },
  ],
  transitions: {
    'backlog': ['selected_for_dev'],
    'selected_for_dev': ['in_progress', 'backlog'],
    'in_progress': ['in_review', 'selected_for_dev'],
    'in_review': ['done', 'in_progress'],
    'done': ['in_review'],
  },
};

const mockProject = {
  id: 1,
  name: 'My Jira Project',
  workflow: mockWorkflow,
};

// Story component that implements the workflow settings without useApi hook
const WorkflowSettingsStory = () => {
  const [workflow, setWorkflow] = useState(mockProject.workflow);

  const handleColumnsChange = (newColumns) => {
    setWorkflow((prev) => ({ ...prev, columns: newColumns }));
  };

  const handleTransitionsChange = (newTransitions) => {
    setWorkflow((prev) => ({ ...prev, transitions: newTransitions }));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedColumns = Array.from(workflow.columns);
    const [movedColumn] = reorderedColumns.splice(result.source.index, 1);
    reorderedColumns.splice(result.destination.index, 0, movedColumn);

    const updatedColumns = reorderedColumns.map((col, index) => ({
      ...col,
      position: index,
    }));

    handleColumnsChange(updatedColumns);
  };

  const handleColumnUpdate = (columnId, updatedFields) => {
    const updatedColumns = workflow.columns.map((col) =>
      col.id === columnId ? { ...col, ...updatedFields } : col,
    );
    handleColumnsChange(updatedColumns);
  };

  const handleColumnDelete = (columnId) => {
    const updatedColumns = workflow.columns.filter((col) => col.id !== columnId);
    // Also clean up transitions
    const updatedTransitions = { ...workflow.transitions };
    delete updatedTransitions[columnId];
    Object.keys(updatedTransitions).forEach((key) => {
      updatedTransitions[key] = updatedTransitions[key].filter((id) => id !== columnId);
    });
    setWorkflow({ columns: updatedColumns, transitions: updatedTransitions });
  };

  const handleAddColumn = () => {
    const newColumn = {
      id: `status_${Date.now()}`,
      title: 'New Status',
      color: '#dfe1e6',
      wipLimit: 0,
      position: workflow.columns.length,
    };
    handleColumnsChange([...workflow.columns, newColumn]);
  };

  return (
    <Container>
      <Breadcrumbs items={['Projects', mockProject.name, 'Workflow Settings']} />
      <Header>Workflow Settings</Header>

      <Section>
        <SectionTitle>Board Columns</SectionTitle>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="columns" direction="horizontal">
            {(provided) => (
              <ColumnsContainer ref={provided.innerRef} {...provided.droppableProps}>
                {workflow.columns.map((column, index) => (
                  <Draggable key={column.id} draggableId={column.id} index={index}>
                    {(dragProvided, dragSnapshot) => (
                      <ColumnCard
                        column={column}
                        provided={dragProvided}
                        isDragging={dragSnapshot.isDragging}
                        onUpdate={(updatedFields) => handleColumnUpdate(column.id, updatedFields)}
                        onDelete={() => handleColumnDelete(column.id)}
                        allColumns={workflow.columns}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ColumnsContainer>
            )}
          </Droppable>
        </DragDropContext>
        <AddButton variant="secondary" icon="plus" onClick={handleAddColumn}>
          Add Column
        </AddButton>
      </Section>

      <Section>
        <SectionTitle>Transition Rules</SectionTitle>
        <TransitionMatrix
          columns={workflow.columns}
          transitions={workflow.transitions}
          onChange={handleTransitionsChange}
        />
        <TransitionDiagram
          columns={workflow.columns}
          transitions={workflow.transitions}
        />
      </Section>
    </Container>
  );
};

export const Default = {
  render: () => <WorkflowSettingsStory />,
};
