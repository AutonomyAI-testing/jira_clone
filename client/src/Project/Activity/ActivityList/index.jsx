import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Button } from 'shared/components';

import ActivityItem from '../ActivityItem';
import DateSeparator from '../DateSeparator';
import { List, LoadMoreContainer, EmptyState } from './Styles';

const propTypes = {
  activities: PropTypes.array.isRequired,
};

const ITEMS_PER_PAGE = 20;

const ActivityList = ({ activities }) => {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  if (activities.length === 0) {
    return <EmptyState>No activity found</EmptyState>;
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

  const sortedDates = Object.keys(groupedActivities).sort((a, b) => new Date(b) - new Date(a));

  // Flatten for pagination
  let displayedItems = [];
  let itemCount = 0;

  for (const date of sortedDates) {
    if (itemCount >= displayCount) break;

    displayedItems.push({ type: 'date', date });

    for (const activity of groupedActivities[date]) {
      if (itemCount >= displayCount) break;
      displayedItems.push({ type: 'activity', activity });
      itemCount++;
    }
  }

  const hasMore = itemCount < activities.length;

  return (
    <div>
      <List>
        {displayedItems.map((item, index) =>
          item.type === 'date' ? (
            <DateSeparator key={`date-${item.date}`} date={item.date} />
          ) : (
            <ActivityItem key={item.activity.id} activity={item.activity} />
          ),
        )}
      </List>

      {hasMore && (
        <LoadMoreContainer>
          <Button variant="secondary" onClick={() => setDisplayCount(displayCount + ITEMS_PER_PAGE)}>
            Load more
          </Button>
        </LoadMoreContainer>
      )}
    </div>
  );
};

ActivityList.propTypes = propTypes;

export default ActivityList;
