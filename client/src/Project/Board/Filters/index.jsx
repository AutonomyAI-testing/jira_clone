import React from 'react';
import PropTypes from 'prop-types';
import { xor } from 'lodash';

import UserWorkloadTooltip from '../UserWorkloadTooltip';
import {
  Filters,
  SearchInput,
  Avatars,
  AvatarIsActiveBorder,
  StyledAvatar,
  StyledButton,
  ClearAll,
} from './Styles';

const propTypes = {
  projectUsers: PropTypes.array.isRequired,
  defaultFilters: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  mergeFilters: PropTypes.func.isRequired,
  allIssues: PropTypes.array,
};

const defaultProps = {
  allIssues: [],
};

const ProjectBoardFilters = ({ projectUsers, defaultFilters, filters, mergeFilters, allIssues }) => {
  const { searchTerm, userIds, myOnly, recent } = filters;

  const areFiltersCleared = !searchTerm && userIds.length === 0 && !myOnly && !recent;

  return (
    <Filters data-testid="board-filters">
      <SearchInput
        icon="search"
        value={searchTerm}
        onChange={value => mergeFilters({ searchTerm: value })}
      />
      <Avatars>
        {projectUsers.map(user => {
          const userTasks = allIssues.filter(i => i.userIds.includes(user.id));
          return (
            <AvatarIsActiveBorder key={user.id} isActive={userIds.includes(user.id)}>
              <UserWorkloadTooltip user={user} userTasks={userTasks}>
                <StyledAvatar
                  avatarUrl={user.avatarUrl}
                  name={user.name}
                  onClick={() => mergeFilters({ userIds: xor(userIds, [user.id]) })}
                />
              </UserWorkloadTooltip>
            </AvatarIsActiveBorder>
          );
        })}
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
      {!areFiltersCleared && (
        <ClearAll onClick={() => mergeFilters(defaultFilters)}>Clear all</ClearAll>
      )}
    </Filters>
  );
};

ProjectBoardFilters.propTypes = propTypes;
ProjectBoardFilters.defaultProps = defaultProps;

export default ProjectBoardFilters;
