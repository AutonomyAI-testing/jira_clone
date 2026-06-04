import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components';

import { Header, HeaderLeft, BoardName, SprintBadge, HeaderRight } from './Styles';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ProjectBoardHeader = ({ children }) => (
  <Header>
    <HeaderLeft>
      <BoardName>Project Board</BoardName>
      <SprintBadge>Sprint 1</SprintBadge>
      {children}
    </HeaderLeft>
    <HeaderRight>
      <Button variant="primary" icon="plus">
        Create Issue
      </Button>
      <a href="https://github.com/oldboyxx/jira_clone" target="_blank" rel="noreferrer noopener">
        <Button icon="github">Github Repo</Button>
      </a>
    </HeaderRight>
  </Header>
);

ProjectBoardHeader.propTypes = propTypes;
ProjectBoardHeader.defaultProps = defaultProps;

export default ProjectBoardHeader;
