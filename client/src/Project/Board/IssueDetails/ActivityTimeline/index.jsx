import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import useApi from 'shared/hooks/api';
import { Avatar } from 'shared/components';
import { formatActivityDescription, activityTypeColors } from 'shared/utils/activity';

import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineHeader,
  TimelineText,
  TimelineTime,
  DateSeparator,
  DateText,
  EmptyState,
} from './Styles';

const propTypes = {
  issueId: PropTypes.number.isRequired,
};

const ActivityTimeline = ({ issueId }) => {
  const [{ data, error }, fetchActivities] = useApi.get('/activities', { issueId }, { lazy: true });

  useEffect(() => {
    fetchActivities({ issueId });
  }, [issueId, fetchActivities]);

  if (!data) return null;
  if (error) return <EmptyState>Failed to load activity</EmptyState>;

  const activities = data.activities || [];

  if (activities.length === 0) {
    return <EmptyState>No activity yet</EmptyState>;
  }

  // Group activities by date
  const groupedActivities = activities.reduce((groups, activity) => {
    const date = moment(activity.createdAt).format('YYYY-MM-DD');
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(activity);
    return groups;
  }, {});

  const formatDateSeparator = dateStr => {
    const date = moment(dateStr);
    const today = moment().startOf('day');
    const yesterday = moment().subtract(1, 'days').startOf('day');

    if (date.isSame(today, 'day')) {
      return 'Today';
    }
    if (date.isSame(yesterday, 'day')) {
      return 'Yesterday';
    }
    return date.format('MMMM D, YYYY');
  };

  return (
    <Timeline>
      {Object.keys(groupedActivities)
        .sort((a, b) => new Date(b) - new Date(a))
        .map(dateKey => (
          <div key={dateKey}>
            <DateSeparator>
              <DateText>{formatDateSeparator(dateKey)}</DateText>
            </DateSeparator>
            {groupedActivities[dateKey].map(activity => (
              <TimelineItem key={activity.id}>
                <TimelineDot color={activityTypeColors[activity.type]} />
                <TimelineContent>
                  <TimelineHeader>
                    <Avatar
                      avatarUrl={activity.user.avatarUrl}
                      name={activity.user.name}
                      size={24}
                    />
                    <TimelineText>
                      {formatActivityDescription(activity, {
                        showIssueLink: false,
                        truncateComment: false,
                      })}
                    </TimelineText>
                  </TimelineHeader>
                  <TimelineTime>{moment(activity.createdAt).fromNow()}</TimelineTime>
                </TimelineContent>
              </TimelineItem>
            ))}
          </div>
        ))}
    </Timeline>
  );
};

ActivityTimeline.propTypes = propTypes;

export default ActivityTimeline;
