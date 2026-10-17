import React from 'react';
import PropTypes from 'prop-types';
import { xor } from 'lodash';

import { IssueLabel, IssueLabelCopy } from 'shared/constants/issues';
import { issueLabelColors } from 'shared/utils/styles';

import {
  Filters,
  SearchInput,
  Avatars,
  AvatarIsActiveBorder,
  StyledAvatar,
  StyledButton,
  LabelSelect,
  LabelDot,
  LabelOption,
  LabelValueItem,
  ClearAll,
} from './Styles';

const labelOptions = Object.values(IssueLabel).map(label => ({
  value: label,
  label: IssueLabelCopy[label],
}));

const propTypes = {
  projectUsers: PropTypes.array.isRequired,
  defaultFilters: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  mergeFilters: PropTypes.func.isRequired,
};

const ProjectBoardFilters = ({ projectUsers, defaultFilters, filters, mergeFilters }) => {
  const { searchTerm, userIds, myOnly, recent, labels } = filters;

  const areFiltersCleared =
    !searchTerm && userIds.length === 0 && !myOnly && !recent && labels.length === 0;

  return (
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
      <LabelSelect
        isMulti
        variant="empty"
        name="labels"
        placeholder="Labels"
        dropdownWidth={220}
        value={labels}
        options={labelOptions}
        onChange={newLabels => mergeFilters({ labels: newLabels })}
        renderValue={({ value: label, removeOptionValue }) => (
          <LabelValueItem key={label} onClick={removeOptionValue}>
            <LabelDot color={issueLabelColors[label]} />
            {IssueLabelCopy[label]}
          </LabelValueItem>
        )}
        renderOption={({ value: label }) => (
          <LabelOption>
            <LabelDot color={issueLabelColors[label]} />
            {IssueLabelCopy[label]}
          </LabelOption>
        )}
      />
      {!areFiltersCleared && (
        <ClearAll onClick={() => mergeFilters(defaultFilters)}>Clear all</ClearAll>
      )}
    </Filters>
  );
};

ProjectBoardFilters.propTypes = propTypes;

export default ProjectBoardFilters;
