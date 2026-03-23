import React, { useState, Fragment } from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Breadcrumbs } from 'shared/components';
import { IssueStatus } from 'shared/constants/issues';
import { projectData } from 'shared/utils/mockData/project';

import Header from './Header';
import Filters from './Filters';
import Lists from './Lists';
import ListViewComponent from './ListView';
import GanttViewComponent from './GanttView';
import ViewSwitcher from './ViewSwitcher';
import List from './Lists/List';
import { Lists as ListsContainer } from './Lists/Styles';

export default {
  title: 'Project/Board',
  parameters: {
    layout: 'fullscreen',
  },
};

// Deep clone the project data to avoid mutation between stories
const getProjectData = () => JSON.parse(JSON.stringify(projectData));

// Wrapper that provides routing context and state management for inline editing
const BoardWrapper = ({ initialView = 'kanban', children }) => {
  const [project, setProject] = useState(getProjectData);
  const [filters, setFilters] = useState({
    searchTerm: '',
    userIds: [],
    myOnly: false,
    recent: false,
  });
  const [currentView, setCurrentView] = useState(initialView);

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setProject(prevProject => ({
      ...prevProject,
      issues: prevProject.issues.map(issue =>
        issue.id === issueId ? { ...issue, ...updatedFields } : issue
      ),
    }));
  };

  const mergeFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  // Default filters for reset
  const defaultFilters = {
    searchTerm: '',
    userIds: [],
    myOnly: false,
    recent: false,
  };

  const fetchProject = () => {
    // No-op for storybook
  };

  return (
    <MemoryRouter initialEntries={['/project/board']}>
      <Route path="/project/board">
        <div style={{ padding: '20px', minHeight: '100vh', background: '#fff' }}>
          <Breadcrumbs items={['Projects', project.name, 'Board']} />
          <Header>
            <ViewSwitcher currentView={currentView} onViewChange={setCurrentView} />
          </Header>
          <Filters
            projectUsers={project.users}
            defaultFilters={defaultFilters}
            filters={filters}
            mergeFilters={mergeFilters}
          />
          {typeof children === 'function' 
            ? children({ 
                project, 
                filters, 
                currentView, 
                updateLocalProjectIssues, 
                fetchProject,
                setCurrentView 
              })
            : children
          }
        </div>
      </Route>
    </MemoryRouter>
  );
};

// Custom Lists component that doesn't use useCurrentUser hook
const MockLists = ({ project, filters, updateLocalProjectIssues }) => {
  const currentUserId = project.users[0]?.id || 1;

  const handleIssueDrop = ({ draggableId, destination, source }) => {
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const issueId = Number(draggableId);
    updateLocalProjectIssues(issueId, {
      status: destination.droppableId,
    });
  };

  return (
    <DragDropContext onDragEnd={handleIssueDrop}>
      <ListsContainer>
        {Object.values(IssueStatus).map(status => (
          <List
            key={status}
            status={status}
            project={project}
            filters={filters}
            currentUserId={currentUserId}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        ))}
      </ListsContainer>
    </DragDropContext>
  );
};

// Story: Kanban View (default)
export const KanbanView = () => (
  <BoardWrapper initialView="kanban">
    {({ project, filters, currentView, updateLocalProjectIssues, setCurrentView }) => (
      <Fragment>
        {currentView === 'kanban' && (
          <MockLists
            project={project}
            filters={filters}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
        {currentView === 'list' && (
          <ListViewComponent
            project={project}
            filters={filters}
            currentUserId={project.users[0]?.id}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
        {currentView === 'gantt' && (
          <GanttViewComponent
            project={project}
            filters={filters}
            currentUserId={project.users[0]?.id}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
      </Fragment>
    )}
  </BoardWrapper>
);

KanbanView.storyName = 'Kanban View';

// Story: List View
export const ListViewStory = () => (
  <BoardWrapper initialView="list">
    {({ project, filters, currentView, updateLocalProjectIssues, setCurrentView }) => (
      <Fragment>
        {currentView === 'kanban' && (
          <MockLists
            project={project}
            filters={filters}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
        {currentView === 'list' && (
          <ListViewComponent
            project={project}
            filters={filters}
            currentUserId={project.users[0]?.id}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
        {currentView === 'gantt' && (
          <GanttViewComponent
            project={project}
            filters={filters}
            currentUserId={project.users[0]?.id}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
      </Fragment>
    )}
  </BoardWrapper>
);

ListViewStory.storyName = 'List View';

// Story: Gantt View
export const GanttViewStory = () => (
  <BoardWrapper initialView="gantt">
    {({ project, filters, currentView, updateLocalProjectIssues, setCurrentView }) => (
      <Fragment>
        {currentView === 'kanban' && (
          <MockLists
            project={project}
            filters={filters}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
        {currentView === 'list' && (
          <ListViewComponent
            project={project}
            filters={filters}
            currentUserId={project.users[0]?.id}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
        {currentView === 'gantt' && (
          <GanttViewComponent
            project={project}
            filters={filters}
            currentUserId={project.users[0]?.id}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
      </Fragment>
    )}
  </BoardWrapper>
);

GanttViewStory.storyName = 'Gantt View';
