import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import useApi from 'shared/hooks/api';
import { Icon, AboutTooltip } from 'shared/components';
import NotificationPanel from 'Project/NotificationPanel';

import { NavLeft, LogoLink, StyledLogo, Bottom, Item, ItemText, NotificationBadge } from './Styles';

const propTypes = {
  issueSearchModalOpen: PropTypes.func.isRequired,
  issueCreateModalOpen: PropTypes.func.isRequired,
};

const ProjectNavbarLeft = ({ issueSearchModalOpen, issueCreateModalOpen }) => {
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const notificationItemRef = useRef(null);
  const [{ data }] = useApi.get('/activities');
  
  const activities = data?.activities || [];
  const unreadCount = activities.filter(a => !a.isRead).length;
  
  return (
  <NavLeft>
    <LogoLink to="/">
      <StyledLogo color="#fff" />
    </LogoLink>

    <Item onClick={issueSearchModalOpen}>
      <Icon type="search" size={22} top={1} left={3} />
      <ItemText>Search issues</ItemText>
    </Item>

    <Item onClick={issueCreateModalOpen}>
      <Icon type="plus" size={27} />
      <ItemText>Create Issue</ItemText>
    </Item>

    <Item ref={notificationItemRef} onClick={() => setIsNotificationPanelOpen(true)}>
      <Icon type="feedback" size={22} top={1} left={3} />
      {unreadCount > 0 && (
        <NotificationBadge>{unreadCount > 9 ? '9+' : unreadCount}</NotificationBadge>
      )}
      <ItemText>Notifications</ItemText>
    </Item>

    {isNotificationPanelOpen && (
      <NotificationPanel
        activities={activities}
        onClose={() => setIsNotificationPanelOpen(false)}
        triggerRef={notificationItemRef}
      />
    )}

    <Bottom>
      <AboutTooltip
        placement="right"
        offset={{ top: -218 }}
        renderLink={linkProps => (
          <Item {...linkProps}>
            <Icon type="help" size={25} />
            <ItemText>About</ItemText>
          </Item>
        )}
      />
    </Bottom>
  </NavLeft>
  );
};

ProjectNavbarLeft.propTypes = propTypes;

export default ProjectNavbarLeft;
