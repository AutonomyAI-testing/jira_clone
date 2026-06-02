import React from 'react';
import PropTypes from 'prop-types';

import toast from 'shared/utils/toast';
import { Avatar, Button, ConfirmModal } from 'shared/components';

import {
  Container,
  Header,
  HeaderTitle,
  InviteButton,
  MembersContent,
  EmptyState,
  EmptyStateTitle,
  EmptyStateTip,
  MembersList,
  MemberItem,
  MemberInfo,
  MemberAvatar,
  MemberDetails,
  MemberName,
  MemberEmail,
  MemberRole,
  RemoveButton,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ProjectSettingsMembers = ({ project }) => {
  const handleRemoveMember = () => {
    toast.warning('Member removal is coming soon.');
  };

  const handleInvite = () => {
    toast.warning('Member invitations are coming soon.');
  };

  const members = project.users || [];

  return (
    <Container>
      <Header>
        <HeaderTitle>Project Members</HeaderTitle>
        <InviteButton variant="primary" onClick={handleInvite}>
          Invite Member
        </InviteButton>
      </Header>

      <MembersContent>
        {members.length === 0 ? (
          <EmptyState>
            <EmptyStateTitle>No members yet</EmptyStateTitle>
            <EmptyStateTip>Invite teammates to collaborate on this project.</EmptyStateTip>
          </EmptyState>
        ) : (
          <MembersList>
            {members.map(member => (
              <MemberItem key={member.id}>
                <MemberInfo>
                  <MemberAvatar>
                    <Avatar avatarUrl={member.avatarUrl} name={member.name} size={32} />
                  </MemberAvatar>
                  <MemberDetails>
                    <MemberName>{member.name}</MemberName>
                    <MemberEmail>{member.email}</MemberEmail>
                  </MemberDetails>
                </MemberInfo>

                <MemberRole>Member</MemberRole>

                <ConfirmModal
                  title="Remove member"
                  message={`Are you sure you want to remove ${member.name} from this project?`}
                  confirmText="Remove"
                  variant="danger"
                  onConfirm={handleRemoveMember}
                  renderLink={({ open }) => (
                    <RemoveButton icon="trash" variant="empty" onClick={open} />
                  )}
                />
              </MemberItem>
            ))}
          </MembersList>
        )}
      </MembersContent>
    </Container>
  );
};

ProjectSettingsMembers.propTypes = propTypes;

export default ProjectSettingsMembers;
