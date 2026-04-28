import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Button } from 'shared/components';

import ColumnCard from './ColumnCard';
import { ColumnsContainer, AddButton } from './Styles';

const propTypes = {
  columns: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isUpdating: PropTypes.bool,
};

const defaultProps = {
  isUpdating: false,
};

const ColumnEditor = ({ columns, onChange, isUpdating }) => {
  const handleDragEnd = result => {
    if (!result.destination) return;

    const reorderedColumns = Array.from(columns);
    const [movedColumn] = reorderedColumns.splice(result.source.index, 1);
    reorderedColumns.splice(result.destination.index, 0, movedColumn);

    // Update positions
    const updatedColumns = reorderedColumns.map((col, index) => ({
      ...col,
      position: index,
    }));

    onChange(updatedColumns);
  };

  const handleColumnUpdate = (columnId, updatedFields) => {
    const updatedColumns = columns.map(col =>
      col.id === columnId ? { ...col, ...updatedFields } : col,
    );
    onChange(updatedColumns);
  };

  const handleColumnDelete = columnId => {
    const updatedColumns = columns.filter(col => col.id !== columnId);
    onChange(updatedColumns);
  };

  const handleAddColumn = () => {
    const newColumn = {
      id: `status_${Date.now()}`,
      title: 'New Status',
      color: '#dfe1e6',
      wipLimit: 0,
      position: columns.length,
    };
    onChange([...columns, newColumn]);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="columns" direction="horizontal">
          {provided => (
            <ColumnsContainer ref={provided.innerRef} {...provided.droppableProps}>
              {columns.map((column, index) => (
                <Draggable key={column.id} draggableId={column.id} index={index}>
                  {(dragProvided, dragSnapshot) => (
                    <ColumnCard
                      column={column}
                      provided={dragProvided}
                      isDragging={dragSnapshot.isDragging}
                      onUpdate={updatedFields => handleColumnUpdate(column.id, updatedFields)}
                      onDelete={() => handleColumnDelete(column.id)}
                      allColumns={columns}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ColumnsContainer>
          )}
        </Droppable>
      </DragDropContext>

      <AddButton variant="secondary" icon="plus" onClick={handleAddColumn} disabled={isUpdating}>
        Add Column
      </AddButton>
    </div>
  );
};

ColumnEditor.propTypes = propTypes;
ColumnEditor.defaultProps = defaultProps;

export default ColumnEditor;
