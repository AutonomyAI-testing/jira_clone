import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

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
        <TasksListContainer>
          {tasks.map(task => (
            <TaskItem key={task.id}>
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
          ))}
        </TasksListContainer>
      )}
    </Container>
  );
};

TasksList.propTypes = propTypes;
TasksList.defaultProps = defaultProps;

export default TasksList;
