import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import { IssueTypeIcon, IssuePriorityIcon, Icon } from 'shared/components';
import api from 'shared/utils/api';

import InlineIssueEditor from '../../InlineIssueEditor';

import { IssueLink, Issue, Title, Bottom, Assignees, AssigneeAvatar } from './Styles';

const propTypes = {
  projectUsers: PropTypes.array.isRequired,
  issue: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

const ProjectBoardListIssue = ({ projectUsers, issue, index, updateLocalProjectIssues }) => {
  const match = useRouteMatch();
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);

  const assignees = issue.userIds.map(userId => projectUsers.find(user => user.id === userId));

  const handleDoubleClick = event => {
    event.preventDefault();
    event.stopPropagation();
    setIsEditing(true);
  };

  const handleExpandClick = event => {
    event.preventDefault();
    event.stopPropagation();
    history.push(`${match.url}/issues/${issue.id}`);
  };

  const updateIssue = updatedFields => {
    api.optimisticUpdate(`/issues/${issue.id}`, {
      updatedFields,
      currentFields: issue,
      setLocalData: fields => updateLocalProjectIssues(issue.id, fields),
    });
  };

  return (
    <Draggable draggableId={issue.id.toString()} index={index} isDragDisabled={isEditing}>
      {(provided, snapshot) => {
        if (isEditing) {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              data-testid="list-issue"
            >
              <Issue isEditing>
                <InlineIssueEditor
                  issue={issue}
                  projectUsers={projectUsers}
                  updateIssue={updateIssue}
                  onClose={() => setIsEditing(false)}
                />
              </Issue>
            </div>
          );
        }

        return (
          <IssueLink
            to={`${match.url}/issues/${issue.id}`}
            ref={provided.innerRef}
            data-testid="list-issue"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onDoubleClick={handleDoubleClick}
          >
            <Issue isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}>
              <Icon
                type="chevron-right"
                size={16}
                className="expand-icon"
                onClick={handleExpandClick}
              />
              <Title>{issue.title}</Title>
              <Bottom>
                <div>
                  <IssueTypeIcon type={issue.type} />
                  <IssuePriorityIcon priority={issue.priority} top={-1} left={4} />
                </div>
                <Assignees>
                  {assignees.map(user => (
                    <AssigneeAvatar
                      key={user.id}
                      size={24}
                      avatarUrl={user.avatarUrl}
                      name={user.name}
                    />
                  ))}
                </Assignees>
              </Bottom>
            </Issue>
          </IssueLink>
        );
      }}
    </Draggable>
  );
};

ProjectBoardListIssue.propTypes = propTypes;

export default ProjectBoardListIssue;
