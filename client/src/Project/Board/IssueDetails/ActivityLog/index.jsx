import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'shared/components';
import { formatDateTimeConversational } from 'shared/utils/dateTime';

import { SectionTitle } from '../Styles';
import { ActivityContainer, ActivityItem, ActivityHeader, ActivityUser, ActivityTime, ActivityContent, ActivityField } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
};

const ProjectBoardIssueDetailsActivityLog = ({ issue }) => {
  const activities = issue.activity || [];

  if (activities.length === 0) {
    return null;
  }

  return (
    <div>
      <SectionTitle>Activity</SectionTitle>
      <ActivityContainer>
        {activities.map(activity => renderActivityItem(activity))}
      </ActivityContainer>
    </div>
  );
};

const renderActivityItem = activity => (
  <ActivityItem key={activity.id}>
    <Avatar avatarUrl={activity.user && activity.user.avatarUrl} name={activity.user && activity.user.name} size={32} />
    <ActivityContent>
      <ActivityHeader>
        <ActivityUser>{activity.user && activity.user.name}</ActivityUser>
        <ActivityTime>{formatDateTimeConversational(activity.timestamp)}</ActivityTime>
      </ActivityHeader>
      <ActivityField>
        {activity.action === 'created' && 'created this issue'}
        {activity.action === 'updated' && activity.field && (
          <>
            changed <strong>{activity.field}</strong> from {activity.oldValue} to {activity.newValue}
          </>
        )}
        {activity.action === 'commented' && 'commented on this issue'}
      </ActivityField>
    </ActivityContent>
  </ActivityItem>
);

ProjectBoardIssueDetailsActivityLog.propTypes = propTypes;

export default ProjectBoardIssueDetailsActivityLog;
