import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import { IssueTypeIcon, IssuePriorityIcon } from 'shared/components';
import { copyToClipboard } from 'shared/utils/browser';

import { IssueLink, Issue, Title, Bottom, Assignees, AssigneeAvatar, ShareButton } from './Styles';

const propTypes = {
  projectUsers: PropTypes.array.isRequired,
  issue: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const ProjectBoardListIssue = ({ projectUsers, issue, index }) => {
  const match = useRouteMatch();
  const [isLinkCopied, setLinkCopied] = useState(false);

  const assignees = issue.userIds.map(userId => projectUsers.find(user => user.id === userId));

  const handleShareClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const issueUrl = `${window.location.origin}${match.url}/issues/${issue.id}`;
    copyToClipboard(issueUrl);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
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
          <Issue isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}>
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
            <ShareButton
              icon="link"
              variant="empty"
              iconSize={16}
              onClick={handleShareClick}
              title={isLinkCopied ? 'Link copied!' : 'Share issue'}
            />
          </Issue>
        </IssueLink>
      )}
    </Draggable>
  );
};

ProjectBoardListIssue.propTypes = propTypes;

export default ProjectBoardListIssue;
