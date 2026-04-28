import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { Avatar } from 'shared/components';
import { IssueStatusCopy, IssuePriorityCopy } from 'shared/constants/issues';
import { issueStatusBackgroundColors, issueStatusColors } from 'shared/utils/styles';
import { activityTypeColors } from 'shared/utils/activity';

import { Item, Content, Header, Description, Time, StatusTransition, StatusTag } from './Styles';

const propTypes = {
  activity: PropTypes.object.isRequired,
};

const ActivityItem = ({ activity }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/project/board/issues/${activity.issueId}`);
  };

  const renderDescription = () => {
    const { type, user, data, issueTitle } = activity;

    switch (type) {
      case 'issue_created':
        return (
          <Description>
            <strong>{user.name}</strong> created <strong>{issueTitle}</strong>
          </Description>
        );

      case 'status_changed':
        return (
          <div>
            <Description>
              <strong>{user.name}</strong> changed status of <strong>{issueTitle}</strong>
            </Description>
            <StatusTransition>
              <StatusTag
                background={issueStatusBackgroundColors[data.fromStatus]}
                color={issueStatusColors[data.fromStatus]}
              >
                {IssueStatusCopy[data.fromStatus]}
              </StatusTag>
              <span>→</span>
              <StatusTag
                background={issueStatusBackgroundColors[data.toStatus]}
                color={issueStatusColors[data.toStatus]}
              >
                {IssueStatusCopy[data.toStatus]}
              </StatusTag>
            </StatusTransition>
          </div>
        );

      case 'priority_changed':
        return (
          <Description>
            <strong>{user.name}</strong> changed priority of <strong>{issueTitle}</strong> from{' '}
            <strong>{IssuePriorityCopy[data.fromPriority]}</strong> to{' '}
            <strong>{IssuePriorityCopy[data.toPriority]}</strong>
          </Description>
        );

      case 'assignee_added':
        return (
          <Description>
            <strong>{user.name}</strong> assigned <strong>{data.assigneeName}</strong> to{' '}
            <strong>{issueTitle}</strong>
          </Description>
        );

      case 'assignee_removed':
        return (
          <Description>
            <strong>{user.name}</strong> removed <strong>{data.assigneeName}</strong> from{' '}
            <strong>{issueTitle}</strong>
          </Description>
        );

      case 'comment_added':
        return (
          <div>
            <Description>
              <strong>{user.name}</strong> commented on <strong>{issueTitle}</strong>
            </Description>
            {data.commentBody && (
              <Description style={{ marginTop: '8px', fontStyle: 'italic' }}>
                "{data.commentBody}"
              </Description>
            )}
          </div>
        );

      case 'estimate_changed':
        return (
          <Description>
            <strong>{user.name}</strong> changed estimate of <strong>{issueTitle}</strong> from{' '}
            <strong>{data.oldEstimate}h</strong> to <strong>{data.newEstimate}h</strong>
          </Description>
        );

      default:
        return (
          <Description>
            <strong>{user.name}</strong> updated <strong>{issueTitle}</strong>
          </Description>
        );
    }
  };

  return (
    <Item onClick={handleClick} activityType={activity.type}>
      <Avatar avatarUrl={activity.user.avatarUrl} name={activity.user.name} size={32} />
      <Content>
        <Header>{renderDescription()}</Header>
        <Time>
          {moment(activity.createdAt).fromNow()} · {moment(activity.createdAt).format('MMM D, h:mm A')}
        </Time>
      </Content>
    </Item>
  );
};

ActivityItem.propTypes = propTypes;

export default ActivityItem;
