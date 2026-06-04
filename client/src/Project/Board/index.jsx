import React, { Fragment, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Route, useRouteMatch, useHistory } from 'react-router-dom';

import useMergeState from 'shared/hooks/mergeState';
import useCurrentUser from 'shared/hooks/currentUser';
import { Breadcrumbs, Modal } from 'shared/components';
import filterIssues from 'shared/utils/filterIssues';

import Header from './Header';
import Filters from './Filters';
import Lists from './Lists';
import ListView from './ListView';
import GanttView from './GanttView';
import ViewSwitcher from './ViewSwitcher';
import IssueDetails from './IssueDetails';
import Statistics from './Statistics';

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
  statuses: [],
  priorities: [],
  types: [],
  dueDateRange: { from: null, to: null },
};

const ProjectBoard = ({ project, fetchProject, updateLocalProjectIssues }) => {
  const match = useRouteMatch();
  const history = useHistory();
  const { currentUserId } = useCurrentUser();

  const [filters, mergeFilters] = useMergeState(defaultFilters);
  const [currentView, setCurrentView] = useState('kanban');

  // Calculate filtered issues based on all filter criteria
  const filteredIssues = useMemo(
    () => filterIssues(project.issues, filters, currentUserId),
    [project.issues, filters, currentUserId],
  );

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
      <Statistics issues={filteredIssues} />
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
          currentUserId={currentUserId}
        />
      )}
      {currentView === 'gantt' && (
        <GanttView
          project={project}
          filters={filters}
          currentUserId={currentUserId}
        />
      )}
      <Route
        path={`${match.path}/issues/:issueId`}
        render={routeProps => (
          <Modal
            isOpen
            testid="modal:issue-details"
            width={1040}
            withCloseIcon={false}
            onClose={() => history.push(match.url)}
            renderContent={modal => (
              <IssueDetails
                issueId={routeProps.match.params.issueId}
                projectUsers={project.users}
                fetchProject={fetchProject}
                updateLocalProjectIssues={updateLocalProjectIssues}
                modalClose={modal.close}
              />
            )}
          />
        )}
      />
    </Fragment>
  );
};

ProjectBoard.propTypes = propTypes;

export default ProjectBoard;
