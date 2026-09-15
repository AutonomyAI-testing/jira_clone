import React from 'react';

import { Avatar } from 'shared/components';

import {
  PageWrapper,
  PageHeader,
  PageTitle,
  PageSubtitle,
  ShowcaseSection,
  SectionLabel,
  HeroCard,
  HeroAvatarWrapper,
  HeroAvatarRing,
  HeroAvatarInner,
  HeroName,
  HeroRole,
  HeroBadge,
  SizeGrid,
  SizeItem,
  SizeLabel,
  AvatarGroupCard,
  AvatarStack,
  AvatarStackItem,
  StackInfo,
  StackInfoTitle,
  StackInfoSub,
  ComparisonGrid,
  ComparisonCard,
  ComparisonName,
  ComparisonTag,
  DividerStar,
} from './Styles';

const teamMembers = [
  { name: 'Alice', avatarUrl: null },
  { name: 'Bob', avatarUrl: null },
  { name: 'Carol', avatarUrl: null },
];

const AvatarPage = () => (
  <PageWrapper>
    <PageHeader>
      <PageTitle>✦ Avatar Gallery ✦</PageTitle>
      <PageSubtitle>Meet the Wizard Robot — your new favorite avatar variant</PageSubtitle>
    </PageHeader>

    {/* Hero showcase */}
    <ShowcaseSection>
      <SectionLabel>Featured Avatar</SectionLabel>
      <HeroCard>
        <HeroAvatarWrapper>
          <HeroAvatarRing size={180}>
            <HeroAvatarInner>
              <Avatar variant="wizardRobot" size={180} name="Wizard Robot" />
            </HeroAvatarInner>
          </HeroAvatarRing>
        </HeroAvatarWrapper>
        <HeroName>Wizard Robot</HeroName>
        <HeroRole>Senior Enchantment Engineer · AI Division</HeroRole>
        <HeroBadge><span role="img" aria-label="star">⭐</span> Arcane Intelligence <span role="img" aria-label="star">⭐</span></HeroBadge>
      </HeroCard>
    </ShowcaseSection>

    <DividerStar aria-hidden="true">★ ☽ ★</DividerStar>

    {/* Size variants */}
    <ShowcaseSection>
      <SectionLabel>Size Variants</SectionLabel>
      <AvatarGroupCard>
        <SizeGrid>
          {[24, 32, 48, 64, 96, 128].map(size => (
            <SizeItem key={size}>
              <Avatar variant="wizardRobot" size={size} name="Wizard Robot" />
              <SizeLabel>{size}px</SizeLabel>
            </SizeItem>
          ))}
        </SizeGrid>
      </AvatarGroupCard>
    </ShowcaseSection>

    {/* Stacked avatars */}
    <ShowcaseSection>
      <SectionLabel>Team Stack</SectionLabel>
      <AvatarGroupCard>
        <AvatarStack>
          <AvatarStackItem first zIndex={5}>
            <Avatar variant="wizardRobot" size={48} name="Wizard Robot" />
          </AvatarStackItem>
          {teamMembers.map((member, idx) => (
            <AvatarStackItem key={member.name} zIndex={4 - idx}>
              <Avatar size={48} name={member.name} avatarUrl={member.avatarUrl} />
            </AvatarStackItem>
          ))}
        </AvatarStack>
        <StackInfo>
          <StackInfoTitle>Wizard Robot + 3 others</StackInfoTitle>
          <StackInfoSub>Working on Sprint 7 · Enchantment Project</StackInfoSub>
        </StackInfo>
      </AvatarGroupCard>
    </ShowcaseSection>

    {/* Comparison with other avatar types */}
    <ShowcaseSection>
      <SectionLabel>All Avatar Types</SectionLabel>
      <ComparisonGrid>
        <ComparisonCard>
          <Avatar variant="wizardRobot" size={72} name="Wizard Robot" />
          <ComparisonName>Wizard Robot</ComparisonName>
          <ComparisonTag>wizardRobot variant</ComparisonTag>
        </ComparisonCard>
        <ComparisonCard>
          <Avatar
            size={72}
            name="Lord Kelvin"
            avatarUrl="https://i.pravatar.cc/150?img=12"
          />
          <ComparisonName>Lord Kelvin</ComparisonName>
          <ComparisonTag>avatarUrl variant</ComparisonTag>
        </ComparisonCard>
        <ComparisonCard>
          <Avatar size={72} name="Alice Arcane" />
          <ComparisonName>Alice Arcane</ComparisonName>
          <ComparisonTag>letter variant</ComparisonTag>
        </ComparisonCard>
        <ComparisonCard>
          <Avatar size={72} name="Marcus Spell" />
          <ComparisonName>Marcus Spell</ComparisonName>
          <ComparisonTag>letter variant</ComparisonTag>
        </ComparisonCard>
        <ComparisonCard>
          <Avatar size={72} name="Zelda Storm" />
          <ComparisonName>Zelda Storm</ComparisonName>
          <ComparisonTag>letter variant</ComparisonTag>
        </ComparisonCard>
      </ComparisonGrid>
    </ShowcaseSection>
  </PageWrapper>
);

export default AvatarPage;
