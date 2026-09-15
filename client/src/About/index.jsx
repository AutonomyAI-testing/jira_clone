import React from 'react';

import {
  AboutPage,
  PageInner,
  Hero,
  HeroTitle,
  HeroSubtitle,
  Section,
  SectionTitle,
  Paragraph,
  TwoColumns,
  Column,
  ColumnTitle,
  BulletList,
  BulletItem,
  ContactBlock,
  ContactRow,
  ContactLabel,
  ContactLink,
} from './Styles';

const About = () => (
  <AboutPage>
    <PageInner>
      <Hero>
        <HeroTitle>About SuddenlySpaces</HeroTitle>
        <HeroSubtitle>
          Connecting space owners with people looking for unique places to work, meet, and create.
        </HeroSubtitle>
      </Hero>

      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <Paragraph>
          SuddenlySpaces was born from a simple observation: incredible spaces sit empty while people
          search desperately for the perfect place to work, create, or gather. We saw unused studios,
          quiet coffee shops during off-hours, beautiful home offices, and inspiring coworking corners
          that could serve so many more people.
        </Paragraph>
        <Paragraph>
          We believe that spaces have stories and potential beyond their traditional use. A
          photographer&apos;s studio can become a podcast recording space. A quiet café corner can
          transform into a focused workspace. A home office can welcome a creative collaboration.
        </Paragraph>
        <Paragraph>
          Our mission is to unlock this potential by creating a trusted platform where space owners
          can share their spaces and seekers can discover exactly what they need, when they need it.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>What We Offer</SectionTitle>
        <TwoColumns>
          <Column>
            <ColumnTitle>For Space Owners</ColumnTitle>
            <BulletList>
              <BulletItem>Easy listing creation with photos and detailed descriptions</BulletItem>
              <BulletItem>Flexible scheduling and availability management</BulletItem>
              <BulletItem>Secure payment processing and booking system</BulletItem>
              <BulletItem>Connect with verified, quality seekers</BulletItem>
              <BulletItem>Generate income from underutilized spaces</BulletItem>
            </BulletList>
          </Column>
          <Column>
            <ColumnTitle>For Space Seekers</ColumnTitle>
            <BulletList>
              <BulletItem>Discover unique spaces tailored to your specific needs</BulletItem>
              <BulletItem>Search by location, amenities, and availability</BulletItem>
              <BulletItem>Book instantly with transparent pricing</BulletItem>
              <BulletItem>Read reviews from verified users</BulletItem>
              <BulletItem>
                Access professional spaces without long-term commitments
              </BulletItem>
            </BulletList>
          </Column>
        </TwoColumns>
      </Section>

      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <Paragraph>
          We&apos;re a passionate team of designers, developers, and space enthusiasts who believe in
          the power of place. Our diverse backgrounds span real estate, technology, hospitality, and
          community building.
        </Paragraph>
        <Paragraph>
          What unites us is a shared vision: making amazing spaces accessible to everyone, creating
          economic opportunities for space owners, and building connections within local communities.
        </Paragraph>
        <Paragraph>
          We&apos;re headquartered in the heart of a vibrant city, working from—you guessed it—a
          shared space that embodies everything we believe in.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Get in Touch</SectionTitle>
        <Paragraph>
          We&apos;d love to hear from you! Whether you have questions about listing your space, need
          help finding the perfect location, or just want to share feedback, we&apos;re here to help.
        </Paragraph>
        <ContactBlock>
          <ContactRow>
            <ContactLabel>Email us: </ContactLabel>
            <ContactLink href="mailto:hello@suddenlyspaces.com">
              hello@suddenlyspaces.com
            </ContactLink>
          </ContactRow>
          <ContactRow>
            <ContactLabel>Support: </ContactLabel>
            <ContactLink href="mailto:support@suddenlyspaces.com">
              support@suddenlyspaces.com
            </ContactLink>
          </ContactRow>
          <ContactRow>
            <ContactLabel>Partnerships: </ContactLabel>
            <ContactLink href="mailto:partners@suddenlyspaces.com">
              partners@suddenlyspaces.com
            </ContactLink>
          </ContactRow>
        </ContactBlock>
        <Paragraph style={{ marginTop: '20px' }}>
          Follow our journey and stay updated on new features, spaces, and community stories.
          We&apos;re building something special, and we&apos;d love for you to be part of it.
        </Paragraph>
      </Section>
    </PageInner>
  </AboutPage>
);

export default About;
