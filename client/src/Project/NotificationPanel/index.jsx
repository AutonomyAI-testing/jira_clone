import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import api from 'shared/utils/api';
import { Avatar } from 'shared/components';
import useOnOutsideClick from 'shared/hooks/onOutsideClick';
import useOnEscapeKeyDown from 'shared/hooks/onEscapeKeyDown';
import { formatActivityDescription } from 'shared/utils/activity';

import {
  Panel,
  Header,
  HeaderTitle,
  MarkAllReadLink,
  Body,
  NotificationItem,
  NotificationContent,
  NotificationText,
  NotificationTime,
  Footer,
  ViewAllLink,
} from './Styles';

const propTypes = {
  activities: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  triggerRef: PropTypes.object.isRequired,
};

const NotificationPanel = ({ activities, onClose, triggerRef }) => {
  const panelRef = useRef(null);
  const history = useHistory();

  useOnOutsideClick([panelRef, triggerRef], true, onClose);
  useOnEscapeKeyDown(true, onClose);

  const handleMarkAllAsRead = async () => {
    try {
      await api.put('/activities/read');
      // Trigger a re-fetch by closing and reopening (simpler than managing state)
      window.location.reload();
    } catch (error) {
      // Silent fail
    }
  };

  const handleNotificationClick = async activity => {
    // Mark as read
    if (!activity.isRead) {
      try {
        await api.put(`/activities/${activity.id}/read`);
      } catch (error) {
        // Silent fail
      }
    }

    // Navigate to issue
    onClose();
    history.push(`/project/board/issues/${activity.issueId}`);
  };

  const handleViewAllActivity = () => {
    onClose();
    history.push('/project/activity');
  };

  // Show max 50 notifications
  const displayedActivities = activities.slice(0, 50);

  return (
    <Panel ref={panelRef}>
      <Header>
        <HeaderTitle>Notifications</HeaderTitle>
        <MarkAllReadLink onClick={handleMarkAllAsRead}>Mark all as read</MarkAllReadLink>
      </Header>
      <Body>
        {displayedActivities.length === 0 ? (
          <NotificationItem>
            <NotificationText>No notifications yet</NotificationText>
          </NotificationItem>
        ) : (
          displayedActivities.map(activity => (
            <NotificationItem
              key={activity.id}
              isRead={activity.isRead}
              onClick={() => handleNotificationClick(activity)}
            >
              <Avatar avatarUrl={activity.user.avatarUrl} name={activity.user.name} size={28} />
              <NotificationContent>
                <NotificationText>
                  {formatActivityDescription(activity, { showIssueLink: false })}
                </NotificationText>
                <NotificationTime>{moment(activity.createdAt).fromNow()}</NotificationTime>
              </NotificationContent>
            </NotificationItem>
          ))
        )}
      </Body>
      <Footer>
        <ViewAllLink onClick={handleViewAllActivity}>View all activity</ViewAllLink>
      </Footer>
    </Panel>
  );
};

NotificationPanel.propTypes = propTypes;

export default NotificationPanel;
