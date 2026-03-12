import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'shared/components';
import { formatDateTimeConversational } from 'shared/utils/dateTime';

import { SectionTitle } from '../Styles';
import {
  ActivityCont,
  ActivityItem,
  ActivityUser,
  ActivityContent,
  ActivityTimestamp,
  ActivityAction,
  FieldChange,
  OldValue,
  NewValue,
} from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
};

const ProjectBoardIssueDetailsActivityLog = ({ issue }) => {
  const activities = issue.activity || [];

  if (activities.length === 0) {
    return null;
  }

  return (
    <Fragment>
      <SectionTitle>Activity</SectionTitle>
      <ActivityCont>
        {activities.map(activity => (
          <ActivityItem key={activity.id}>
            <ActivityUser>
              <Avatar
                avatarUrl={activity.user.avatarUrl}
                name={activity.user.name}
                size={32}
              />
            </ActivityUser>
            <ActivityContent>
              <ActivityAction>
                <strong>{activity.user.name}</strong>
                {' '}
                {renderActivityMessage(activity)}
              </ActivityAction>
              {activity.field && (
                <FieldChange>
                  {activity.oldValue && (
                    <OldValue>{activity.oldValue}</OldValue>
                  )}
                  {activity.newValue && (
                    <NewValue>{activity.newValue}</NewValue>
                  )}
                </FieldChange>
              )}
              <ActivityTimestamp>
                {formatDateTimeConversational(activity.timestamp)}
              </ActivityTimestamp>
            </ActivityContent>
          </ActivityItem>
        ))}
      </ActivityCont>
    </Fragment>
  );
};

const renderActivityMessage = (activity) => {
  const { action, field } = activity;

  if (action === 'created') {
    return 'created this issue';
  }

  if (action === 'changed' && field) {
    return `changed ${field}`;
  }

  if (action === 'commented') {
    return 'added a comment';
  }

  return 'updated this issue';
};

ProjectBoardIssueDetailsActivityLog.propTypes = propTypes;

export default ProjectBoardIssueDetailsActivityLog;
