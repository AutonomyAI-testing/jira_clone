import React from 'react';

import Avatar from 'shared/components/Avatar';
import { projectData } from 'shared/utils/mockData/project';

import {
  PageWrapper,
  ContentArea,
  PageTitle,
  PageSubtitle,
  Section,
  SectionTitle,
  SectionDescription,
  AvatarRow,
  AvatarItem,
  AvatarLabel,
  SizeTag,
} from './Styles';

const SIZES = [24, 32, 48, 64];
const LETTER_USERS = [
  { name: 'Alex Johnson' },
  { name: 'Beth Park' },
  { name: 'Carlos Reyes' },
  { name: 'Diana Wu' },
];

const AvatarPage = () => {
  const { users } = projectData;

  return (
    <PageWrapper>
      <ContentArea>
        <PageTitle>Avatar Component</PageTitle>
        <PageSubtitle>Showcase of sizes, variants, and fallback styles</PageSubtitle>

        {/* Section 1: Sizes */}
        <Section>
          <SectionTitle>Sizes</SectionTitle>
          <SectionDescription>
            Four standard sizes across all three project members.
          </SectionDescription>
          <AvatarRow>
            {SIZES.map(size =>
              users.map(user => (
                <AvatarItem key={`${size}-${user.id}`}>
                  <Avatar avatarUrl={user.avatarUrl} name={user.name} size={size} />
                  <AvatarLabel>{user.name.split(' ')[0]}</AvatarLabel>
                  <SizeTag>{size}px</SizeTag>
                </AvatarItem>
              )),
            )}
          </AvatarRow>
        </Section>

        {/* Section 2: Gradient Border Variant */}
        <Section>
          <SectionTitle>Gradient Border Variant</SectionTitle>
          <SectionDescription>
            A vibrant blue-to-purple gradient ring — works with image avatars and letter fallbacks.
          </SectionDescription>
          <AvatarRow>
            {users.map(user => (
              <AvatarItem key={user.id}>
                <Avatar
                  avatarUrl={user.avatarUrl}
                  name={user.name}
                  size={56}
                  variant="gradientBorder"
                />
                <AvatarLabel>{user.name.split(' ')[0]}</AvatarLabel>
              </AvatarItem>
            ))}
            {/* Letter fallback with gradient border */}
            <AvatarItem>
              <Avatar name="AB" size={56} variant="gradientBorder" />
              <AvatarLabel>Fallback</AvatarLabel>
            </AvatarItem>
            {/* Larger size */}
            <AvatarItem>
              <Avatar
                avatarUrl={users[0].avatarUrl}
                name={users[0].name}
                size={80}
                variant="gradientBorder"
              />
              <AvatarLabel>{users[0].name.split(' ')[0]}</AvatarLabel>
              <SizeTag>80px</SizeTag>
            </AvatarItem>
          </AvatarRow>
        </Section>

        {/* Section 3: Letter Fallback */}
        <Section>
          <SectionTitle>Letter Fallback</SectionTitle>
          <SectionDescription>
            When no avatarUrl is provided, the first letter of the name is shown on a colour
            derived from the name.
          </SectionDescription>
          <AvatarRow>
            {LETTER_USERS.map(user => (
              <AvatarItem key={user.name}>
                <Avatar name={user.name} size={48} />
                <AvatarLabel>{user.name.split(' ')[0]}</AvatarLabel>
              </AvatarItem>
            ))}
            {/* Letter fallbacks with gradient border */}
            {LETTER_USERS.map(user => (
              <AvatarItem key={`grad-${user.name}`}>
                <Avatar name={user.name} size={48} variant="gradientBorder" />
                <AvatarLabel>{user.name.split(' ')[0]}</AvatarLabel>
              </AvatarItem>
            ))}
          </AvatarRow>
        </Section>
      </ContentArea>
    </PageWrapper>
  );
};

export default AvatarPage;
