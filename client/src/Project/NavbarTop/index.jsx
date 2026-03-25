import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Logo, Avatar } from 'shared/components';
import useCurrentUser from 'shared/hooks/currentUser';

import {
  NavbarTop,
  NavbarLeft,
  LogoContainer,
  LogoText,
  NavMenu,
  NavItem,
  NavbarRight,
  UserProfileButton,
  UserName,
  Separator,
} from './Styles';

const propTypes = {
  issueSearchModalOpen: PropTypes.func,
  issueCreateModalOpen: PropTypes.func,
};

const defaultProps = {
  issueSearchModalOpen: () => {},
  issueCreateModalOpen: () => {},
};

const ProjectNavbarTop = ({ issueSearchModalOpen, issueCreateModalOpen }) => {
  const history = useHistory();
  const { currentUser } = useCurrentUser();

  const handleLogoClick = () => {
    history.push('/project');
  };

  const handleSearchClick = () => {
    issueSearchModalOpen();
  };

  const handleCreateClick = () => {
    issueCreateModalOpen();
  };

  return (
    <NavbarTop>
      <NavbarLeft>
        <LogoContainer onClick={handleLogoClick}>
          <Logo size={32} style={{ color: '#fff' }} />
          <LogoText>Jira</LogoText>
        </LogoContainer>

        <NavMenu>
          <NavItem onClick={handleSearchClick} title="Search issues">
            Filters
          </NavItem>
          <NavItem onClick={handleCreateClick} title="Create new issue">
            Create
          </NavItem>
        </NavMenu>
      </NavbarLeft>

      <NavbarRight>
        {currentUser && (
          <>
            <UserProfileButton title={currentUser.name}>
              <Avatar
                avatarUrl={currentUser.avatarUrl}
                name={currentUser.name}
                size={28}
              />
              <UserName>{currentUser.name}</UserName>
            </UserProfileButton>
            <Separator />
          </>
        )}
      </NavbarRight>
    </NavbarTop>
  );
};

ProjectNavbarTop.propTypes = propTypes;
ProjectNavbarTop.defaultProps = defaultProps;

export default ProjectNavbarTop;
