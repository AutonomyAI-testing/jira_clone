import React from 'react';
import PropTypes from 'prop-types';

import useCurrentUser from 'shared/hooks/currentUser';
import { Icon, AboutTooltip, Avatar } from 'shared/components';

import { NavLeft, LogoLink, StyledLogo, Bottom, Item, ItemText } from './Styles';

const propTypes = {
  issueSearchModalOpen: PropTypes.func.isRequired,
  issueCreateModalOpen: PropTypes.func.isRequired,
  avatarPickerModalOpen: PropTypes.func.isRequired,
};

const ProjectNavbarLeft = ({ issueSearchModalOpen, issueCreateModalOpen, avatarPickerModalOpen }) => {
  const { currentUser } = useCurrentUser();

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

    <Bottom>
      <Item onClick={avatarPickerModalOpen}>
        <Avatar
          avatarUrl={currentUser && currentUser.avatarUrl}
          name={(currentUser && currentUser.name) || ''}
          size={26}
          style={{ position: 'absolute', left: 18, top: 8 }}
        />
        <ItemText>My Avatar</ItemText>
      </Item>
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
