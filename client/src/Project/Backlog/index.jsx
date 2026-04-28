import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';

import useApi from 'shared/hooks/api';
import { PageLoader, PageError, Breadcrumbs } from 'shared/components';
import { updateArrayItemById } from 'shared/utils/javascript';
import toast from 'shared/utils/toast';
import api from 'shared/utils/api';

import SprintSection from './SprintSection';
import BacklogSection from './BacklogSection';
import { Page, Header, BoardName } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

const ProjectBacklog = ({ project, fetchProject, updateLocalProjectIssues }) => {
  const [{ data: sprintsResponse, error, setLocalData: setSprintsData }, fetchSprints] =
    useApi.get('/sprints');

  if (error) return <PageError />;
  if (!sprintsResponse) return <PageLoader />;

  const { sprints } = sprintsResponse;

  const activeSprint = sprints.find(sprint => sprint.status === 'active');
  const planningSprints = sprints.filter(sprint => sprint.status === 'planning');
  const backlogIssues = project.issues.filter(issue => issue.sprintId === null);
  const sprintIssues = activeSprint
    ? project.issues.filter(issue => issue.sprintId === activeSprint.id)
    : [];

  const handleIssueDrop = ({ draggableId, destination, source }) => {
    if (!destination) return;

    const issueId = Number(draggableId);
    const issue = project.issues.find(i => i.id === issueId);

    const sourceSprintId = source.droppableId === 'backlog' ? null : Number(source.droppableId);
    const destSprintId = destination.droppableId === 'backlog' ? null : Number(destination.droppableId);

    // If moving within the same list, no action needed for sprint assignment
    if (sourceSprintId === destSprintId && source.index === destination.index) {
      return;
    }

    // Update issue's sprintId
    const newSprintId = destination.droppableId === 'backlog' ? null : Number(destination.droppableId);

    api.optimisticUpdate(`/issues/${issueId}`, {
      updatedFields: { sprintId: newSprintId },
      currentFields: issue,
      setLocalData: fields => updateLocalProjectIssues(issueId, fields),
    });
  };

  const updateLocalSprintData = (sprintId, updatedFields) => {
    setSprintsData(currentData => ({
      sprints: updateArrayItemById(currentData.sprints, sprintId, updatedFields),
    }));
  };

  const addNewSprint = newSprint => {
    setSprintsData(currentData => ({
      sprints: [...currentData.sprints, newSprint],
    }));
  };

  const removeSprintFromLocal = sprintId => {
    setSprintsData(currentData => ({
      sprints: currentData.sprints.filter(sprint => sprint.id !== sprintId),
    }));
  };

  return (
    <Page>
      <Header>
        <Breadcrumbs items={['Projects', project.name, 'Backlog']} />
        <BoardName>Backlog</BoardName>
      </Header>

      <DragDropContext onDragEnd={handleIssueDrop}>
        {activeSprint && (
          <SprintSection
            sprint={activeSprint}
            issues={sprintIssues}
            projectUsers={project.users}
            fetchProject={fetchProject}
            fetchSprints={fetchSprints}
            updateLocalProjectIssues={updateLocalProjectIssues}
            updateLocalSprintData={updateLocalSprintData}
            removeSprintFromLocal={removeSprintFromLocal}
          />
        )}

        <BacklogSection
          issues={backlogIssues}
          projectUsers={project.users}
          fetchProject={fetchProject}
          fetchSprints={fetchSprints}
          updateLocalProjectIssues={updateLocalProjectIssues}
          addNewSprint={addNewSprint}
        />
      </DragDropContext>
    </Page>
  );
};

ProjectBacklog.propTypes = propTypes;

export default ProjectBacklog;
