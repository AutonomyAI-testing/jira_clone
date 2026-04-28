import React from 'react';
import styled from 'styled-components';

import { IssueStatusCopy, IssuePriorityCopy } from 'shared/constants/issues';
import { color, font, mixin, issueStatusColors, issueStatusBackgroundColors } from 'shared/utils/styles';

const Bold = styled.span`
  ${font.medium}
  color: ${color.textDarkest};
`;

const IssueLink = styled.span`
  ${font.medium}
  color: ${color.textDarkest};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StatusTag = styled.span`
  ${mixin.tag(
    issueStatusBackgroundColors[props => props.status],
    issueStatusColors[props => props.status],
  )}
  margin: 0 4px;
`;

const QuoteBlock = styled.div`
  margin-top: 6px;
  padding: 8px 12px;
  background: ${color.backgroundLightest};
  border-left: 3px solid ${color.borderLight};
  color: ${color.textMedium};
  ${font.size(13)}
  border-radius: 3px;
`;

export const formatActivityDescription = (activity, options = {}) => {
  const { showIssueLink = true, truncateComment = true } = options;
  const { type, user, data, issueTitle } = activity;
  const userName = <Bold>{user.name}</Bold>;
  const issue = showIssueLink ? <IssueLink>{issueTitle}</IssueLink> : <Bold>{issueTitle}</Bold>;

  switch (type) {
    case 'issue_created':
      return (
        <span>
          {userName} created {issue}
        </span>
      );

    case 'status_changed':
      return (
        <span>
          {userName} changed status of {issue} from{' '}
          <Bold>{IssueStatusCopy[data.fromStatus]}</Bold> to{' '}
          <Bold>{IssueStatusCopy[data.toStatus]}</Bold>
        </span>
      );

    case 'priority_changed':
      return (
        <span>
          {userName} changed priority of {issue} from{' '}
          <Bold>{IssuePriorityCopy[data.fromPriority]}</Bold> to{' '}
          <Bold>{IssuePriorityCopy[data.toPriority]}</Bold>
        </span>
      );

    case 'assignee_added':
      return (
        <span>
          {userName} assigned <Bold>{data.assigneeName}</Bold> to {issue}
        </span>
      );

    case 'assignee_removed':
      return (
        <span>
          {userName} removed <Bold>{data.assigneeName}</Bold> from {issue}
        </span>
      );

    case 'comment_added':
      return (
        <div>
          <div>
            {userName} commented on {issue}
          </div>
          {data.commentBody && truncateComment && (
            <QuoteBlock>{data.commentBody}</QuoteBlock>
          )}
        </div>
      );

    case 'estimate_changed':
      return (
        <span>
          {userName} changed estimate of {issue} from <Bold>{data.oldEstimate}h</Bold> to{' '}
          <Bold>{data.newEstimate}h</Bold>
        </span>
      );

    case 'issue_deleted':
      return (
        <span>
          {userName} deleted {issue}
        </span>
      );

    default:
      return (
        <span>
          {userName} updated {issue}
        </span>
      );
  }
};

export const activityTypeColors = {
  issue_created: '#0B875B',
  status_changed: '#0052cc',
  priority_changed: '#F89C1C',
  assignee_added: '#8777D9',
  assignee_removed: '#8777D9',
  comment_added: '#5E6C84',
  estimate_changed: '#00B8D9',
  issue_deleted: '#E13C3C',
};
