import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { xor } from 'lodash';

import { IssueStatus } from 'shared/constants/issues';
import { Icon, Button } from 'shared/components';

import {
  Filters,
  SearchInput,
  Avatars,
  AvatarIsActiveBorder,
  StyledAvatar,
  StyledButton,
  ClearAll,
  ColumnVisibilityContainer,
  ColumnVisibilityPopup,
  ColumnCheckbox,
  ColumnLabel,
  SavedFiltersContainer,
  SavedFilterChip,
  SaveFilterButton,
} from './Styles';

const propTypes = {
  projectUsers: PropTypes.array.isRequired,
  defaultFilters: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  mergeFilters: PropTypes.func.isRequired,
  columnVisibility: PropTypes.object.isRequired,
  onColumnVisibilityChange: PropTypes.func.isRequired,
};

const ProjectBoardFilters = ({
  projectUsers,
  defaultFilters,
  filters,
  mergeFilters,
  columnVisibility,
  onColumnVisibilityChange,
}) => {
  const { searchTerm, userIds, myOnly, recent } = filters;
  const [isColumnVisibilityOpen, setColumnVisibilityOpen] = useState(false);
  const [savedFilters, setSavedFilters] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('board_saved_filters') || '[]');
    } catch {
      return [];
    }
  });

  const areFiltersCleared = !searchTerm && userIds.length === 0 && !myOnly && !recent;

  const handleSaveFilter = () => {
    // Using prompt for now - can be replaced with modal dialog in future
    // eslint-disable-next-line no-alert
    const filterName = prompt('Save filter as:');
    if (filterName) {
      const newSavedFilter = {
        id: Date.now(),
        name: filterName,
        filters: { ...filters },
      };
      const updated = [...savedFilters, newSavedFilter];
      setSavedFilters(updated);
      localStorage.setItem('board_saved_filters', JSON.stringify(updated));
    }
  };

  const handleApplySavedFilter = savedFilter => {
    mergeFilters(savedFilter.filters);
  };

  const handleDeleteSavedFilter = id => {
    const updated = savedFilters.filter(f => f.id !== id);
    setSavedFilters(updated);
    localStorage.setItem('board_saved_filters', JSON.stringify(updated));
  };

  const handleToggleColumnVisibility = status => {
    onColumnVisibilityChange({
      ...columnVisibility,
      [status]: !columnVisibility[status],
    });
  };

  return (
    <React.Fragment>
      <Filters data-testid="board-filters">
        <SearchInput
          icon="search"
          value={searchTerm}
          onChange={value => mergeFilters({ searchTerm: value })}
        />
        <Avatars>
          {projectUsers.map(user => (
            <AvatarIsActiveBorder key={user.id} isActive={userIds.includes(user.id)}>
              <StyledAvatar
                avatarUrl={user.avatarUrl}
                name={user.name}
                onClick={() => mergeFilters({ userIds: xor(userIds, [user.id]) })}
              />
            </AvatarIsActiveBorder>
          ))}
        </Avatars>
        <StyledButton
          variant="empty"
          isActive={myOnly}
          onClick={() => mergeFilters({ myOnly: !myOnly })}
        >
          Only My Issues
        </StyledButton>
        <StyledButton
          variant="empty"
          isActive={recent}
          onClick={() => mergeFilters({ recent: !recent })}
        >
          Recently Updated
        </StyledButton>
        <ColumnVisibilityContainer>
          <Button
            variant="empty"
            icon="more"
            onClick={() => setColumnVisibilityOpen(!isColumnVisibilityOpen)}
          />
          {isColumnVisibilityOpen && (
            <ColumnVisibilityPopup>
              {Object.entries(IssueStatus).map(([key, status]) => (
                <ColumnLabel key={status} role="button" tabIndex="0">
                  <ColumnCheckbox
                    type="checkbox"
                    checked={columnVisibility[status]}
                    onChange={() => handleToggleColumnVisibility(status)}
                  />
                  {key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                </ColumnLabel>
              ))}
            </ColumnVisibilityPopup>
          )}
        </ColumnVisibilityContainer>
        <SaveFilterButton onClick={handleSaveFilter}>Save Filter</SaveFilterButton>
        {!areFiltersCleared && (
          <ClearAll onClick={() => mergeFilters(defaultFilters)}>Clear all</ClearAll>
        )}
      </Filters>
      {savedFilters.length > 0 && (
        <SavedFiltersContainer>
          {savedFilters.map(savedFilter => (
            <SavedFilterChip key={savedFilter.id}>
              <span role="button" tabIndex="0" onClick={() => handleApplySavedFilter(savedFilter)}>
                {savedFilter.name}
              </span>
              <Icon
                type="close"
                size={12}
                onClick={() => handleDeleteSavedFilter(savedFilter.id)}
              />
            </SavedFilterChip>
          ))}
        </SavedFiltersContainer>
      )}
    </React.Fragment>
  );
};

ProjectBoardFilters.propTypes = propTypes;

export default ProjectBoardFilters;
