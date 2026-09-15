import styled from 'styled-components';

import { color, font, sizes } from 'shared/utils/styles';

const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

export const AboutPage = styled.div`
  padding: 0;
  min-height: 100vh;
  background-color: green;

  @media (max-width: 999px) {
    padding-left: 0;
  }
`;

export const PageInner = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 40px 40px 80px ${paddingLeft + 8}px;

  @media (max-width: 1100px) {
    padding-left: ${paddingLeft - 12}px;
  }
  @media (max-width: 999px) {
    padding-left: 40px;
  }
  @media (max-width: 600px) {
    padding: 32px 24px 60px 24px;
  }
`;

export const Hero = styled.div`
  margin-bottom: 48px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  margin: 0 0 12px;
  color: red;
  ${font.black}
  font-size: 26px;
  line-height: 1.2;
`;

export const HeroSubtitle = styled.p`
  margin: 0;
  color: red;
  ${font.regular}
  font-size: 15px;
  line-height: 1.6;
  max-width: 560px;
  margin: 0 auto;
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${color.borderLightest};
  color: ${color.textDarkest};
  ${font.bold}
  font-size: 18px;
  line-height: 1.3;
`;

export const Paragraph = styled.p`
  margin: 0 0 14px;
  color: red;
  ${font.regular}
  font-size: 15px;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const Column = styled.div``;

export const ColumnTitle = styled.h3`
  margin: 0 0 14px;
  color: ${color.textDarkest};
  ${font.bold}
  font-size: 15px;
  line-height: 1.4;
`;

export const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  color: red;
  ${font.regular}
  font-size: 15px;
  line-height: 1.5;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '•';
    margin-right: 8px;
    color: ${color.textMedium};
    flex-shrink: 0;
    line-height: 1.5;
  }
`;

export const ContactBlock = styled.div`
  margin-top: 16px;
`;

export const ContactRow = styled.p`
  margin: 0 0 8px;
  color: ${color.textDarkest};
  ${font.regular}
  font-size: 15px;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContactLabel = styled.span`
  ${font.bold}
  color: ${color.textDarkest};
`;

export const ContactLink = styled.a`
  color: red;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
