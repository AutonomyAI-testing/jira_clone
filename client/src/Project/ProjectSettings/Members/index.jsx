import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useCurrentUser from 'shared/hooks/currentUser';

import {
  SectionHeading,
  SectionContent,
  SectionDivider,
  MembersContainer,
  MembersList,
} from '../Styles';
import MemberRow from './MemberRow';
import InviteForm from './InviteForm';

const propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          email: PropTypes.string,
          avatarUrl: PropTypes.string,
        }),
        role: PropTypes.string,
      }),
    ),
  }).isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const Members = ({ project, fetchProject }) => {
  const { currentUserId } = useCurrentUser();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const members = project.members || [];
  const ownerMember = members.find(m => m.role === 'Owner');
  const isCurrentUserOwner = currentUserId === (ownerMember && ownerMember.user && ownerMember.user.id);

  const handleMemberUpdate = () => {
    fetchProject();
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <SectionContent>
      <SectionHeading>Project Members ({members.length})</SectionHeading>

      <MembersContainer>
        {members.length > 0 ? (
          <>
            <MembersList>
              {members.map(member => {
                const isOwner = member.role === 'Owner';
                const isCurrentUser = currentUserId === (member.user && member.user.id);
                const canRemove = !isOwner && !isCurrentUser;

                return (
                  <MemberRow
                    key={member.id}
                    member={member}
                    isOwner={isOwner}
                    canRemove={canRemove}
                    onMemberUpdate={handleMemberUpdate}
                  />
                );
              })}
            </MembersList>

            <SectionDivider />
          </>
        ) : (
          <>
            <p>No members yet.</p>
            <SectionDivider />
          </>
        )}

        <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
          Invite New Member
        </h3>
        <InviteForm projectId={project.id} onInviteSent={handleMemberUpdate} />
      </MembersContainer>
    </SectionContent>
  );
};

Members.propTypes = propTypes;

export default Members;
