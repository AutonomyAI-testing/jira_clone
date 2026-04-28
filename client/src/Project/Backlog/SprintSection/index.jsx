import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import SprintHeader from '../SprintHeader';
import IssueCard from '../IssueCard';
import { Section, Issues, EmptyState } from './Styles';

const propTypes = {
  sprint: PropTypes.object.isRequired,
  issues: PropTypes.array.isRequired,
  projectUsers: PropTypes.array.isRequired,
  fetchProject: PropTypes.func.isRequired,
  fetchSprints: PropTypes.func.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
  updateLocalSprintData: PropTypes.func.isRequired,
  removeSprintFromLocal: PropTypes.func.isRequired,
};

const SprintSection = ({
  sprint,
  issues,
  projectUsers,
  fetchProject,
  fetchSprints,
  updateLocalProjectIssues,
  updateLocalSprintData,
  removeSprintFromLocal,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const totalEstimate = issues.reduce((sum, issue) => sum + (issue.estimate || 0), 0);
  const doneIssues = issues.filter(issue => issue.status === 'done');
  const doneCount = doneIssues.length;

  return (
    <Section>
      <SprintHeader
        sprint={sprint}
        issueCount={issues.length}
        totalEstimate={totalEstimate}
        doneCount={doneCount}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        fetchSprints={fetchSprints}
        updateLocalSprintData={updateLocalSprintData}
        removeSprintFromLocal={removeSprintFromLocal}
        updateLocalProjectIssues={updateLocalProjectIssues}
      />

      {!isCollapsed && (
        <Droppable droppableId={sprint.id.toString()}>
          {provided => (
            <Issues ref={provided.innerRef} {...provided.droppableProps}>
              {issues.length === 0 ? (
                <EmptyState>
                  No issues in this sprint. Drag issues from the backlog below.
                </EmptyState>
              ) : (
                issues.map((issue, index) => (
                  <IssueCard
                    key={issue.id}
                    issue={issue}
                    projectUsers={projectUsers}
                    index={index}
                    updateLocalProjectIssues={updateLocalProjectIssues}
                  />
                ))
              )}
              {provided.placeholder}
            </Issues>
          )}
        </Droppable>
      )}
    </Section>
  );
};

SprintSection.propTypes = propTypes;

export default SprintSection;
