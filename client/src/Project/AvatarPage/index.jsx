import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Button, Breadcrumbs } from 'shared/components';
import toast from 'shared/utils/toast';
import useCurrentUser from 'shared/hooks/currentUser';

import {
  PageCont,
  PageHeading,
  Section,
  SectionHeading,
  ProfileCard,
  UserInfo,
  UserName,
  UserEmail,
  UserRole,
  TeamGrid,
  TeamCard,
  CardContent,
  CardAvatar,
  CardInfo,
  AvatarSizesSection,
  AvatarSizeRow,
  SizeSwatch,
  SizeLabel,
  ChangeAvatarButton,
} from './Styles';

// Display sizes for avatar showcase
const AVATAR_SIZES = [20, 24, 32, 40, 48, 64, 96];

// Sample user data for avatar variant demonstrations
const URL_VARIANT_USER = {
  name: 'Lord Gaben',
  avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
};

const LETTER_VARIANT_USER = {
  name: 'Baby Yoda',
  avatarUrl: null,
};

const propTypes = {
  project: PropTypes.object.isRequired,
};

const AvatarPage = ({ project }) => {
  const { currentUser } = useCurrentUser();

  // Shows a demo message since avatar upload is not implemented
  const handleChangeAvatar = () => {
    toast.success('Avatar upload is not available in this demo.');
  };

  // Display current user from auth context, or fallback to default user if not logged in
  const displayUser = currentUser || { name: 'User', avatarUrl: null };

  return (
    <PageCont>
      <Breadcrumbs items={['Projects', project.name, 'Avatars']} />
      <PageHeading>Avatars</PageHeading>

      {/* Your Profile Section */}
      <Section>
        <SectionHeading>Your Profile</SectionHeading>
        <ProfileCard>
          <CardAvatar>
            <Avatar name={displayUser.name} avatarUrl={displayUser.avatarUrl} size={96} />
          </CardAvatar>
          <UserInfo>
            <UserName>{displayUser.name}</UserName>
            {displayUser.email && <UserEmail>{displayUser.email}</UserEmail>}
            <ChangeAvatarButton variant="secondary" onClick={handleChangeAvatar}>
              Change Avatar
            </ChangeAvatarButton>
          </UserInfo>
        </ProfileCard>
      </Section>

      {/* Team Members Section */}
      <Section>
        <SectionHeading>Team Members</SectionHeading>
        <TeamGrid>
          {project.users &&
            project.users.map(user => (
              <TeamCard key={user.id}>
                <CardContent>
                  <CardAvatar>
                    <Avatar name={user.name} avatarUrl={user.avatarUrl} size={48} />
                  </CardAvatar>
                  <CardInfo>
                    <UserName>{user.name}</UserName>
                    {user.email && <UserEmail>{user.email}</UserEmail>}
                  </CardInfo>
                </CardContent>
              </TeamCard>
            ))}
        </TeamGrid>
      </Section>

      {/* Avatar Sizes Showcase */}
      <AvatarSizesSection>
        <SectionHeading>Avatar Sizes - URL Variant</SectionHeading>
        <AvatarSizeRow>
          {AVATAR_SIZES.map(size => (
            <SizeSwatch key={`url-${size}`}>
              <Avatar
                name={URL_VARIANT_USER.name}
                avatarUrl={URL_VARIANT_USER.avatarUrl}
                size={size}
              />
              <SizeLabel>{size}px</SizeLabel>
            </SizeSwatch>
          ))}
        </AvatarSizeRow>
      </AvatarSizesSection>

      <AvatarSizesSection>
        <SectionHeading>Avatar Sizes - Letter Variant</SectionHeading>
        <AvatarSizeRow>
          {AVATAR_SIZES.map(size => (
            <SizeSwatch key={`letter-${size}`}>
              <Avatar
                name={LETTER_VARIANT_USER.name}
                avatarUrl={LETTER_VARIANT_USER.avatarUrl}
                size={size}
              />
              <SizeLabel>{size}px</SizeLabel>
            </SizeSwatch>
          ))}
        </AvatarSizeRow>
      </AvatarSizesSection>
    </PageCont>
  );
};

AvatarPage.propTypes = propTypes;

export default AvatarPage;
