import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import { IssueTypeIcon, IssuePriorityIcon } from 'shared/components';

import {
  IssueLink,
  Issue,
  Title,
  Bottom,
  Assignees,
  AssigneeAvatar,
  QuickActionButton,
  QuickActionIcon,
} from './Styles';

const propTypes = {
  projectUsers: PropTypes.array.isRequired,
  issue: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const ProjectBoardListIssue = ({ projectUsers, issue, index }) => {
  const match = useRouteMatch();
  const history = useHistory();
  const [showQuickAction, setShowQuickAction] = useState(false);

  const assignees = issue.userIds.map(userId => projectUsers.find(user => user.id === userId));

  const handleQuickAction = e => {
    e.preventDefault();
    // Navigate to issue details with a query param to focus on status change
    history.push(`${match.url}/issues/${issue.id}?focus=status`);
  };

  return (
    <Draggable draggableId={issue.id.toString()} index={index}>
      {(provided, snapshot) => (
        <IssueLink
          to={`${match.url}/issues/${issue.id}`}
          ref={provided.innerRef}
          data-testid="list-issue"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Issue
            isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}
            onMouseEnter={() => setShowQuickAction(true)}
            onMouseLeave={() => setShowQuickAction(false)}
          >
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
            {showQuickAction && (
              <QuickActionButton onClick={handleQuickAction} aria-label="Quick action - edit status">
                <QuickActionIcon role="img" aria-hidden="true">⚡</QuickActionIcon>
              </QuickActionButton>
            )}
          </Issue>
        </IssueLink>
      )}
    </Draggable>
  );
};

ProjectBoardListIssue.propTypes = propTypes;

export default ProjectBoardListIssue;
