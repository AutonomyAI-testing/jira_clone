import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import filterIssues from 'shared/utils/filterIssues';
import { IssueStatusCopy } from 'shared/constants/issues';

import Issue from './Issue';
import { List, Title, IssuesCount, Issues } from './Styles';

const propTypes = {
  status: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  currentUserId: PropTypes.number,
};

const defaultProps = {
  currentUserId: null,
};

const ProjectBoardList = ({ status, project, filters, currentUserId }) => {
  const filteredIssues = filterIssues(project.issues, filters, currentUserId);
  const filteredListIssues = getSortedListIssues(filteredIssues, status);
  const allListIssues = getSortedListIssues(project.issues, status);

  return (
    <Droppable key={status} droppableId={status}>
      {provided => (
        <List>
          <Title>
            {`${IssueStatusCopy[status]} `}
            <IssuesCount>{formatIssuesCount(allListIssues, filteredListIssues)}</IssuesCount>
          </Title>
          <Issues
            {...provided.droppableProps}
            ref={provided.innerRef}
            data-testid={`board-list:${status}`}
          >
            {filteredListIssues.map((issue, index) => (
              <Issue key={issue.id} projectUsers={project.users} issue={issue} index={index} />
            ))}
            {provided.placeholder}
          </Issues>
        </List>
      )}
    </Droppable>
  );
};



const getSortedListIssues = (issues, status) =>
  issues.filter(issue => issue.status === status).sort((a, b) => a.listPosition - b.listPosition);

const formatIssuesCount = (allListIssues, filteredListIssues) => {
  if (allListIssues.length !== filteredListIssues.length) {
    return `${filteredListIssues.length} of ${allListIssues.length}`;
  }
  return allListIssues.length;
};

ProjectBoardList.propTypes = propTypes;
ProjectBoardList.defaultProps = defaultProps;

export default ProjectBoardList;
