import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Droppable } from 'react-beautiful-dnd';
import { intersection } from 'lodash';

import { IssueStatusCopy, IssuePriority } from 'shared/constants/issues';
import { Icon } from 'shared/components';

import Issue from './Issue';
import EmptyState from './EmptyState';
import {
  List,
  Title,
  IssuesCount,
  Issues,
  TitleContainer,
  SortDropdown,
  SortButton,
  SortOption,
} from './Styles';

const propTypes = {
  status: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  currentUserId: PropTypes.number,
  sortBy: PropTypes.string,
  onSortChange: PropTypes.func.isRequired,
};

const defaultProps = {
  currentUserId: null,
  sortBy: null,
};

const SORT_OPTIONS = [
  { value: null, label: 'Default (List order)' },
  { value: 'priority', label: 'Priority (Highest first)' },
  { value: 'title', label: 'Title (A to Z)' },
  { value: 'created', label: 'Created (Newest first)' },
];

const ProjectBoardList = ({ status, project, filters, currentUserId, sortBy, onSortChange }) => {
  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);

  const filteredIssues = filterIssues(project.issues, filters, currentUserId);
  const filteredListIssues = getSortedListIssues(filteredIssues, status);
  const allListIssues = getSortedListIssues(project.issues, status);

  const sortedFilteredIssues = applySorting(filteredListIssues, sortBy);

  const handleSortChange = newSort => {
    onSortChange(newSort);
    setSortDropdownOpen(false);
  };

  return (
    <Droppable key={status} droppableId={status}>
      {provided => (
        <List>
          <TitleContainer>
            <Title>
              {`${IssueStatusCopy[status]} `}
              <IssuesCount>{formatIssuesCount(allListIssues, filteredListIssues)}</IssuesCount>
            </Title>
            <SortDropdown>
              <SortButton onClick={() => setSortDropdownOpen(!isSortDropdownOpen)}>
                <Icon type="arrow-down" size={14} />
              </SortButton>
              {isSortDropdownOpen && (
                <div style={{ position: 'absolute', top: '100%', right: 0, zIndex: 10, marginTop: '4px' }}>
                  {SORT_OPTIONS.map(option => (
                    <SortOption
                      key={option.value || 'default'}
                      isActive={sortBy === option.value}
                      onClick={() => handleSortChange(option.value)}
                    >
                      {option.label}
                    </SortOption>
                  ))}
                </div>
              )}
            </SortDropdown>
          </TitleContainer>
          <Issues
            {...provided.droppableProps}
            ref={provided.innerRef}
            data-testid={`board-list:${status}`}
          >
            {sortedFilteredIssues.length === 0 ? (
              <EmptyState message="No spells cast here yet" />
            ) : (
              sortedFilteredIssues.map((issue, index) => (
                <Issue key={issue.id} projectUsers={project.users} issue={issue} index={index} />
              ))
            )}
            {provided.placeholder}
          </Issues>
        </List>
      )}
    </Droppable>
  );
};

const filterIssues = (projectIssues, filters, currentUserId) => {
  const { searchTerm, userIds, myOnly, recent } = filters;
  let issues = projectIssues;

  if (searchTerm) {
    issues = issues.filter(issue => issue.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  if (userIds.length > 0) {
    issues = issues.filter(issue => intersection(issue.userIds, userIds).length > 0);
  }
  if (myOnly && currentUserId) {
    issues = issues.filter(issue => issue.userIds.includes(currentUserId));
  }
  if (recent) {
    issues = issues.filter(issue => moment(issue.updatedAt).isAfter(moment().subtract(3, 'days')));
  }
  return issues;
};

const getSortedListIssues = (issues, status) =>
  issues.filter(issue => issue.status === status).sort((a, b) => a.listPosition - b.listPosition);

const applySorting = (issues, sortBy) => {
  if (!sortBy) return issues;

  const issueCopy = [...issues];

  switch (sortBy) {
    case 'priority':
      return issueCopy.sort((a, b) => {
        const priorityOrder = {
          [IssuePriority.HIGHEST]: 0,
          [IssuePriority.HIGH]: 1,
          [IssuePriority.MEDIUM]: 2,
          [IssuePriority.LOW]: 3,
          [IssuePriority.LOWEST]: 4,
        };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
    case 'title':
      return issueCopy.sort((a, b) => a.title.localeCompare(b.title));
    case 'created':
      return issueCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    default:
      return issueCopy;
  }
};

const formatIssuesCount = (allListIssues, filteredListIssues) => {
  if (allListIssues.length !== filteredListIssues.length) {
    return `${filteredListIssues.length} of ${allListIssues.length}`;
  }
  return allListIssues.length;
};

ProjectBoardList.propTypes = propTypes;
ProjectBoardList.defaultProps = defaultProps;

export default ProjectBoardList;
