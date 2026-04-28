import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import { Button } from 'shared/components';

import IssueCard from '../IssueCard';
import SprintCreate from '../SprintCreate';
import { Section, Header, Title, IssueCount, Actions, Issues, EmptyState } from './Styles';

const propTypes = {
  issues: PropTypes.array.isRequired,
  projectUsers: PropTypes.array.isRequired,
  fetchProject: PropTypes.func.isRequired,
  fetchSprints: PropTypes.func.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
  addNewSprint: PropTypes.func.isRequired,
};

const BacklogSection = ({
  issues,
  projectUsers,
  fetchProject,
  fetchSprints,
  updateLocalProjectIssues,
  addNewSprint,
}) => {
  return (
    <Section>
      <Header>
        <div>
          <Title>Backlog</Title>
          <IssueCount>{issues.length} issues</IssueCount>
        </div>
        <Actions>
          <SprintCreate fetchSprints={fetchSprints} addNewSprint={addNewSprint} />
        </Actions>
      </Header>

      <Droppable droppableId="backlog">
        {provided => (
          <Issues ref={provided.innerRef} {...provided.droppableProps}>
            {issues.length === 0 ? (
              <EmptyState>No issues in backlog. Create new issues to get started.</EmptyState>
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
    </Section>
  );
};

BacklogSection.propTypes = propTypes;

export default BacklogSection;
