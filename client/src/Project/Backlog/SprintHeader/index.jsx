import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from 'shared/components';
import useOnOutsideClick from 'shared/hooks/onOutsideClick';

import SprintComplete from '../SprintComplete';
import {
  Header,
  LeftSection,
  SprintName,
  SprintInfo,
  StatusBadge,
  IssueCount,
  ProgressBar,
  ProgressBarSegment,
  ProgressLabel,
  RightSection,
  MenuButton,
  Dropdown,
  DropdownItem,
  CollapseIcon,
} from './Styles';

const propTypes = {
  sprint: PropTypes.object.isRequired,
  issueCount: PropTypes.number.isRequired,
  totalEstimate: PropTypes.number.isRequired,
  doneCount: PropTypes.number.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  onToggleCollapse: PropTypes.func.isRequired,
  fetchSprints: PropTypes.func.isRequired,
  updateLocalSprintData: PropTypes.func.isRequired,
  removeSprintFromLocal: PropTypes.func.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

const SprintHeader = ({
  sprint,
  issueCount,
  totalEstimate,
  doneCount,
  isCollapsed,
  onToggleCollapse,
  fetchSprints,
  updateLocalSprintData,
  removeSprintFromLocal,
  updateLocalProjectIssues,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useOnOutsideClick([menuRef], isMenuOpen, () => setIsMenuOpen(false));

  const statusColors = {
    planning: '#DFE1E6',
    active: '#0052CC',
    completed: '#0B875B',
  };

  const statusLabels = {
    planning: 'Planning',
    active: 'Active',
    completed: 'Completed',
  };

  const donePercentage = issueCount > 0 ? (doneCount / issueCount) * 100 : 0;

  return (
    <div>
      <Header>
        <LeftSection>
          <CollapseIcon onClick={onToggleCollapse} isCollapsed={isCollapsed}>
            <Icon type="chevron-down" size={20} />
          </CollapseIcon>
          <SprintInfo>
            <SprintName>{sprint.name}</SprintName>
            <StatusBadge color={statusColors[sprint.status]}>
              {statusLabels[sprint.status]}
            </StatusBadge>
            <IssueCount>
              {issueCount} {issueCount === 1 ? 'issue' : 'issues'} · {totalEstimate}h
            </IssueCount>
          </SprintInfo>
        </LeftSection>

        <RightSection>
          <div style={{ position: 'relative' }} ref={menuRef}>
            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon type="more" size={18} />
            </MenuButton>
            {isMenuOpen && (
              <Dropdown>
                {sprint.status === 'planning' && (
                  <DropdownItem onClick={() => alert('Start Sprint functionality not implemented')}>
                    Start Sprint
                  </DropdownItem>
                )}
                {sprint.status === 'active' && (
                  <SprintComplete
                    sprint={sprint}
                    issueCount={issueCount}
                    doneCount={doneCount}
                    fetchSprints={fetchSprints}
                    updateLocalSprintData={updateLocalSprintData}
                    updateLocalProjectIssues={updateLocalProjectIssues}
                    onClose={() => setIsMenuOpen(false)}
                  />
                )}
                <DropdownItem onClick={() => alert('Edit Sprint functionality not implemented')}>
                  Edit Sprint
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    if (confirm(`Delete sprint "${sprint.name}"?`)) {
                      alert('Delete Sprint functionality not implemented');
                    }
                  }}
                >
                  Delete Sprint
                </DropdownItem>
              </Dropdown>
            )}
          </div>
        </RightSection>
      </Header>

      {!isCollapsed && sprint.status === 'active' && (
        <>
          <ProgressBar>
            <ProgressBarSegment width={donePercentage} color="#0B875B" />
            <ProgressBarSegment width={100 - donePercentage} color="#DFE1E6" />
          </ProgressBar>
          <ProgressLabel>
            {doneCount} of {issueCount} issues done
          </ProgressLabel>
        </>
      )}
    </div>
  );
};

SprintHeader.propTypes = propTypes;

export default SprintHeader;
