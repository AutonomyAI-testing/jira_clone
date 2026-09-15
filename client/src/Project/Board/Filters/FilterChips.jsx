import React from 'react';
import PropTypes from 'prop-types';

import {
  IssueStatusCopy,
  IssuePriorityCopy,
  IssueTypeCopy,
} from 'shared/constants/issues';

import { ChipsContainer, Chip, ChipLabel, ChipClose } from './Styles';

const propTypes = {
  filters: PropTypes.object.isRequired,
  mergeFilters: PropTypes.func.isRequired,
};

const FilterChips = ({ filters, mergeFilters }) => {
  const { statuses = [], priorities = [], types = [], dueDateRange = {} } = filters;

  const chips = [];

  // Add status chips
  statuses.forEach(status => {
    chips.push({
      id: `status-${status}`,
      label: IssueStatusCopy[status],
      onRemove: () => mergeFilters({ statuses: statuses.filter(s => s !== status) }),
    });
  });

  // Add priority chips
  priorities.forEach(priority => {
    chips.push({
      id: `priority-${priority}`,
      label: `Priority: ${IssuePriorityCopy[priority]}`,
      onRemove: () => mergeFilters({ priorities: priorities.filter(p => p !== priority) }),
    });
  });

  // Add type chips
  types.forEach(type => {
    chips.push({
      id: `type-${type}`,
      label: IssueTypeCopy[type],
      onRemove: () => mergeFilters({ types: types.filter(t => t !== type) }),
    });
  });

  // Add date range chips
  if (dueDateRange && dueDateRange.from) {
    chips.push({
      id: 'date-from',
      label: `From: ${dueDateRange.from}`,
      onRemove: () => mergeFilters({ dueDateRange: { ...dueDateRange, from: null } }),
    });
  }

  if (dueDateRange && dueDateRange.to) {
    chips.push({
      id: 'date-to',
      label: `To: ${dueDateRange.to}`,
      onRemove: () => mergeFilters({ dueDateRange: { ...dueDateRange, to: null } }),
    });
  }

  if (chips.length === 0) {
    return null;
  }

  return (
    <ChipsContainer data-testid="filter-chips">
      {chips.map(chip => (
        <Chip key={chip.id}>
          <ChipLabel>{chip.label}</ChipLabel>
          <ChipClose onClick={chip.onRemove}>×</ChipClose>
        </Chip>
      ))}
    </ChipsContainer>
  );
};

FilterChips.propTypes = propTypes;

export default FilterChips;
