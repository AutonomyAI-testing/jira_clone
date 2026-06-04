import React from 'react';
import PropTypes from 'prop-types';

import { Select, DatePicker } from 'shared/components';
import {
  IssueStatus,
  IssueStatusCopy,
  IssuePriority,
  IssuePriorityCopy,
  IssueType,
  IssueTypeCopy,
} from 'shared/constants/issues';

import {
  AdvancedFiltersContainer,
  AdvancedFiltersContent,
  FilterSection,
  FilterLabel,
  DateRangeContainer,
  ClearAdvancedButton,
} from './Styles';

const propTypes = {
  filters: PropTypes.object.isRequired,
  mergeFilters: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

// Helper to build select options from constants
const buildOptions = (constantValues, copyLabels) =>
  Object.values(constantValues).map(value => ({
    value,
    label: copyLabels[value],
  }));

const AdvancedFilters = ({ filters, mergeFilters, isExpanded }) => {
  const { statuses = [], priorities = [], types = [], dueDateRange = {} } = filters;

  const statusOptions = buildOptions(IssueStatus, IssueStatusCopy);
  const priorityOptions = buildOptions(IssuePriority, IssuePriorityCopy);
  const typeOptions = buildOptions(IssueType, IssueTypeCopy);

  const areAdvancedFiltersActive =
    statuses.length > 0 ||
    priorities.length > 0 ||
    types.length > 0 ||
    (dueDateRange && (dueDateRange.from || dueDateRange.to));

  const handleClearAdvancedFilters = () => {
    mergeFilters({
      statuses: [],
      priorities: [],
      types: [],
      dueDateRange: { from: null, to: null },
    });
  };

  // Only render when expanded; container visibility controlled by parent
  if (!isExpanded) {
    return null;
  }

  return (
    <AdvancedFiltersContainer data-testid="advanced-filters">
      <AdvancedFiltersContent>
        <FilterSection>
          <FilterLabel>Status</FilterLabel>
          <Select
            name="status-filter"
            isMulti
            placeholder="Select statuses..."
            value={statuses}
            options={statusOptions}
            onChange={value => mergeFilters({ statuses: value })}
          />
        </FilterSection>

        <FilterSection>
          <FilterLabel>Priority</FilterLabel>
          <Select
            name="priority-filter"
            isMulti
            placeholder="Select priorities..."
            value={priorities}
            options={priorityOptions}
            onChange={value => mergeFilters({ priorities: value })}
          />
        </FilterSection>

        <FilterSection>
          <FilterLabel>Type</FilterLabel>
          <Select
            name="type-filter"
            isMulti
            placeholder="Select types..."
            value={types}
            options={typeOptions}
            onChange={value => mergeFilters({ types: value })}
          />
        </FilterSection>

        <FilterSection>
          <FilterLabel>Due Date Range</FilterLabel>
          <DateRangeContainer>
            <DatePicker
              placeholder="From"
              value={dueDateRange.from}
              withTime={false}
              onChange={from => mergeFilters({ dueDateRange: { ...dueDateRange, from } })}
            />
            <DatePicker
              placeholder="To"
              value={dueDateRange.to}
              withTime={false}
              onChange={to => mergeFilters({ dueDateRange: { ...dueDateRange, to } })}
            />
          </DateRangeContainer>
        </FilterSection>

        {areAdvancedFiltersActive && (
          <ClearAdvancedButton onClick={handleClearAdvancedFilters}>
            Clear advanced filters
          </ClearAdvancedButton>
        )}
      </AdvancedFiltersContent>
    </AdvancedFiltersContainer>
  );
};

AdvancedFilters.propTypes = propTypes;

export default AdvancedFilters;
