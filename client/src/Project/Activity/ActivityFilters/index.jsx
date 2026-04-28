import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'shared/components';

import { Filters, FilterGroup, FilterButton, UserFilters, UserFilterAvatar } from './Styles';

const propTypes = {
  typeFilter: PropTypes.string.isRequired,
  onTypeFilterChange: PropTypes.func.isRequired,
  userFilter: PropTypes.array.isRequired,
  onUserFilterChange: PropTypes.func.isRequired,
  projectUsers: PropTypes.array.isRequired,
};

const ActivityFilters = ({
  typeFilter,
  onTypeFilterChange,
  userFilter,
  onUserFilterChange,
  projectUsers,
}) => {
  const toggleUserFilter = userId => {
    if (userFilter.includes(userId)) {
      onUserFilterChange(userFilter.filter(id => id !== userId));
    } else {
      onUserFilterChange([...userFilter, userId]);
    }
  };

  return (
    <Filters>
      <FilterGroup>
        <FilterButton active={typeFilter === 'all'} onClick={() => onTypeFilterChange('all')}>
          All
        </FilterButton>
        <FilterButton
          active={typeFilter === 'status'}
          onClick={() => onTypeFilterChange('status')}
        >
          Status Changes
        </FilterButton>
        <FilterButton
          active={typeFilter === 'comments'}
          onClick={() => onTypeFilterChange('comments')}
        >
          Comments
        </FilterButton>
        <FilterButton
          active={typeFilter === 'assignments'}
          onClick={() => onTypeFilterChange('assignments')}
        >
          Assignments
        </FilterButton>
        <FilterButton
          active={typeFilter === 'created'}
          onClick={() => onTypeFilterChange('created')}
        >
          Created
        </FilterButton>
      </FilterGroup>

      <UserFilters>
        {projectUsers.map(user => (
          <UserFilterAvatar
            key={user.id}
            active={userFilter.includes(user.id)}
            onClick={() => toggleUserFilter(user.id)}
          >
            <Avatar avatarUrl={user.avatarUrl} name={user.name} size={32} />
          </UserFilterAvatar>
        ))}
      </UserFilters>
    </Filters>
  );
};

ActivityFilters.propTypes = propTypes;

export default ActivityFilters;
