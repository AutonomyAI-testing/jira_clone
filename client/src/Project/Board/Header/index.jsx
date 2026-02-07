import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components';

import { Header, BoardName, ViewToggle } from './Styles';

const propTypes = {
  view: PropTypes.oneOf(['board', 'gantt']),
  onViewChange: PropTypes.func,
};

const defaultProps = {
  view: 'board',
  onViewChange: () => {},
};

const ProjectBoardHeader = ({ view, onViewChange }) => (
  <Header>
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <BoardName>Kanban board</BoardName>
      <ViewToggle>
        <Button
          variant={view === 'board' ? 'primary' : 'secondary'}
          onClick={() => onViewChange('board')}
        >
          Board View
        </Button>
        <Button
          variant={view === 'gantt' ? 'primary' : 'secondary'}
          onClick={() => onViewChange('gantt')}
        >
          Gantt View
        </Button>
      </ViewToggle>
    </div>
    <a href="https://github.com/oldboyxx/jira_clone" target="_blank" rel="noreferrer noopener">
      <Button icon="github">Github Repo</Button>
    </a>
  </Header>
);

ProjectBoardHeader.propTypes = propTypes;
ProjectBoardHeader.defaultProps = defaultProps;

export default ProjectBoardHeader;
