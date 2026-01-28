import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Icon } from 'shared/components';

import {
  Container,
  Heading,
  InputContainer,
  TaskInput,
  AddButton,
  TasksListContainer,
  TaskItem,
  Checkbox,
  TaskText,
  DeleteButton,
  EmptyState,
} from './Styles';

const propTypes = {
  initialTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ),
};

const defaultProps = {
  initialTasks: [],
};

const TasksList = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [inputValue, setInputValue] = useState('');
  const [nextId, setNextId] = useState(
    initialTasks.length > 0 ? Math.max(...initialTasks.map(t => t.id)) + 1 : 1,
  );

  const handleAddTask = useCallback(() => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      const newTask = {
        id: nextId,
        text: trimmedValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
      setNextId(nextId + 1);
    }
  }, [inputValue, nextId, tasks]);

  const handleDeleteTask = useCallback(
    taskId => {
      setTasks(tasks.filter(task => task.id !== taskId));
    },
    [tasks],
  );

  const handleToggleComplete = useCallback(
    taskId => {
      setTasks(
        tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)),
      );
    },
    [tasks],
  );

  const handleKeyPress = useCallback(
    event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleAddTask();
      }
    },
    [handleAddTask],
  );

  const handleDragEnd = useCallback(
    result => {
      const { destination, source } = result;

      // Dropped outside the list
      if (!destination) return;

      // No position change
      if (destination.index === source.index) return;

      const reorderedTasks = Array.from(tasks);
      const [movedTask] = reorderedTasks.splice(source.index, 1);
      reorderedTasks.splice(destination.index, 0, movedTask);

      setTasks(reorderedTasks);
    },
    [tasks],
  );

  return (
    <Container>
      <Heading>Tasks List</Heading>

      <InputContainer>
        <TaskInput
          type="text"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <AddButton variant="primary" icon="plus" onClick={handleAddTask} disabled={!inputValue.trim()}>
          Add Task
        </AddButton>
      </InputContainer>

      {tasks.length === 0 ? (
        <EmptyState>No tasks yet. Add your first task above!</EmptyState>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tasks-list">
            {provided => (
              <TasksListContainer {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided, snapshot) => (
                      <TaskItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isBeingDragged={snapshot.isDragging}
                      >
                        <Checkbox
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => handleToggleComplete(task.id)}
                        />
                        <TaskText completed={task.completed}>{task.text}</TaskText>
                        <DeleteButton onClick={() => handleDeleteTask(task.id)} title="Delete task">
                          <Icon type="trash" size={16} />
                        </DeleteButton>
                      </TaskItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </TasksListContainer>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </Container>
  );
};

TasksList.propTypes = propTypes;
TasksList.defaultProps = defaultProps;

export default TasksList;
