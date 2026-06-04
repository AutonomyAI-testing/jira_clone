import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { xor } from 'lodash';

import {
  Filters,
  SearchInput,
  Avatars,
  AvatarIsActiveBorder,
  StyledAvatar,
  StyledButton,
  ClearAll,
  AdvancedFiltersToggle,
  FilterBarContainer,
} from './Styles';
import AdvancedFilters from './AdvancedFilters';
import FilterChips from './FilterChips';

const propTypes = {
  projectUsers: PropTypes.array.isRequired,
  defaultFilters: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  mergeFilters: PropTypes.func.isRequired,
};

const ProjectBoardFilters = ({ projectUsers, defaultFilters, filters, mergeFilters }) => {
  const [isAdvancedFiltersExpanded, setIsAdvancedFiltersExpanded] = useState(false);
  const {
    searchTerm,
    userIds,
    myOnly,
    recent,
    statuses = [],
    priorities = [],
    types = [],
    dueDateRange = {},
  } = filters;

  const areBasicFiltersCleared = !searchTerm && userIds.length === 0 && !myOnly && !recent;
  const areAdvancedFiltersActive =
    statuses.length > 0 ||
    priorities.length > 0 ||
    types.length > 0 ||
    (dueDateRange && (dueDateRange.from || dueDateRange.to));
  const areAllFiltersCleared = areBasicFiltersCleared && !areAdvancedFiltersActive;

  return (
    <Fragment>
      <Filters data-testid="board-filters">
        <FilterBarContainer>
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
          <AdvancedFiltersToggle
            variant="empty"
            isActive={areAdvancedFiltersActive}
            onClick={() => setIsAdvancedFiltersExpanded(!isAdvancedFiltersExpanded)}
          >
            Advanced Filters {isAdvancedFiltersExpanded ? '▲' : '▼'}
          </AdvancedFiltersToggle>
          {!areAllFiltersCleared && (
            <ClearAll onClick={() => mergeFilters(defaultFilters)}>Clear all</ClearAll>
          )}
        </FilterBarContainer>
      </Filters>
      <AdvancedFilters
        filters={filters}
        mergeFilters={mergeFilters}
        isExpanded={isAdvancedFiltersExpanded}
      />
      <FilterChips filters={filters} mergeFilters={mergeFilters} />
    </Fragment>
  );
};

ProjectBoardFilters.propTypes = propTypes;

export default ProjectBoardFilters;
