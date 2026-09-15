import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'shared/components';
import { formatDate } from 'shared/utils/dateTime';

import {
  MembersSection,
  SectionHeading,
  MemberCount,
  MembersList,
  MemberRow,
  MemberInfo,
  MemberName,
  MemberEmail,
  MemberJoined,
  EmptyMembers,
} from './Styles';

const propTypes = {
  project: PropTypes.shape({
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string,
        createdAt: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

const MembersTab = ({
  project,
}) => {
  const { users = [] } = project;

  if (users.length === 0) {
    return (
      <MembersSection>
        <SectionHeading>
          Team Members
          <MemberCount>0</MemberCount>
        </SectionHeading>
        <EmptyMembers>No members found.</EmptyMembers>
      </MembersSection>
    );
  }

  return (
    <MembersSection>
      <SectionHeading>
        Team Members
        <MemberCount>{users.length}</MemberCount>
      </SectionHeading>
      <MembersList>
        {users.map(user => (
          <MemberRow key={user.id}>
            <Avatar avatarUrl={user.avatarUrl} name={user.name} size={36} />
            <MemberInfo>
              <MemberName>{user.name}</MemberName>
              <MemberEmail>{user.email}</MemberEmail>
            </MemberInfo>
            <MemberJoined>{formatDate(user.createdAt)}</MemberJoined>
          </MemberRow>
        ))}
      </MembersList>
    </MembersSection>
  );
};

MembersTab.propTypes = propTypes;

export default MembersTab;
