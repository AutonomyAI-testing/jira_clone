import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import useMergeState from 'shared/hooks/mergeState';
import { Breadcrumbs } from 'shared/components';

import Header from './Header';
import Filters from './Filters';
import Lists from './Lists';
import ListView from './ListView';
import GanttView from './GanttView';
import ViewSwitcher from './ViewSwitcher';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
};

const ProjectBoard = ({ project, fetchProject, updateLocalProjectIssues }) => {
  const [filters, mergeFilters] = useMergeState(defaultFilters);
  const [currentView, setCurrentView] = useState('kanban');

  return (
    <Fragment>
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
      {currentView === 'kanban' && (
        <Lists
          project={project}
          filters={filters}
          updateLocalProjectIssues={updateLocalProjectIssues}
        />
      )}
      {currentView === 'list' && (
        <ListView
          project={project}
          filters={filters}
          currentUserId={project.users[0] && project.users[0].id}
        />
      )}
      {currentView === 'gantt' && (
        <GanttView
          project={project}
          filters={filters}
          currentUserId={project.users[0] && project.users[0].id}
        />
      )}
    </Fragment>
  );
};

ProjectBoard.propTypes = propTypes;

export default ProjectBoard;
