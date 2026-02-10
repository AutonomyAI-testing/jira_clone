import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components';

import { Header, BoardName, HeaderLeft } from './Styles';

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
      {children}
    </HeaderLeft>
    <a href="https://github.com/oldboyxx/jira_clone" target="_blank" rel="noreferrer noopener">
      <Button icon="github">Github Repo</Button>
    </a>
  </Header>
);

ProjectBoardHeader.propTypes = propTypes;
ProjectBoardHeader.defaultProps = defaultProps;

export default ProjectBoardHeader;
