import styled, { keyframes } from 'styled-components';

import { font } from 'shared/utils/styles';

const floatAnimation = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
  0%   { opacity: 0.7; }
  50%  { opacity: 1; }
  100% { opacity: 0.7; }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f0e8 0%, #ede4d0 40%, #e8ddc8 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image:
      radial-gradient(circle at 20% 20%, rgba(180, 160, 120, 0.08) 0%, transparent 60%),
      radial-gradient(circle at 80% 80%, rgba(100, 80, 60, 0.06) 0%, transparent 60%);
    pointer-events: none;
  }
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
`;

export const PageTitle = styled.h1`
  ${font.black}
  font-size: 38px;
  color: #e13c3c;
  margin: 0 0 12px;
  letter-spacing: -0.5px;
  text-shadow: 1px 2px 4px rgba(180, 20, 20, 0.15);
`;

export const PageSubtitle = styled.p`
  ${font.regular}
  font-size: 16px;
  color: #7a5c40;
  margin: 0;
  opacity: 0.85;
`;

export const ShowcaseSection = styled.section`
  width: 100%;
  max-width: 920px;
  margin-bottom: 48px;
  position: relative;
  z-index: 1;
`;

export const SectionLabel = styled.h2`
  ${font.medium}
  font-size: 12px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #9b7a54;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(155, 122, 84, 0.3);
`;

export const HeroCard = styled.div`
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(180, 150, 100, 0.3);
  border-radius: 24px;
  padding: 56px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  backdrop-filter: blur(8px);
  box-shadow:
    0 8px 32px rgba(100, 70, 30, 0.12),
    0 2px 8px rgba(100, 70, 30, 0.08),
    inset 0 1px 0 rgba(255,255,255,0.8);
`;

export const HeroAvatarWrapper = styled.div`
  animation: ${floatAnimation} 4s ease-in-out infinite;
  filter: drop-shadow(0 16px 32px rgba(60, 40, 20, 0.3));
`;

export const HeroAvatarRing = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size + 16}px;
  height: ${props => props.size + 16}px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e8c96a 0%, #c8953c 40%, #7b4ea0 100%);
  padding: 4px;
  animation: ${shimmer} 3s ease-in-out infinite;
`;

export const HeroAvatarInner = styled.div`
  border-radius: 50%;
  overflow: hidden;
  background: #f5f0e8;
`;

export const HeroName = styled.h3`
  ${font.bold}
  font-size: 22px;
  color: #3d2a1e;
  margin: 0;
`;

export const HeroRole = styled.p`
  ${font.regular}
  font-size: 14px;
  color: #9b7a54;
  margin: 0;
  opacity: 0.9;
`;

export const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #2d4a8a 0%, #4a2d8a 100%);
  color: #ffd966;
  ${font.medium}
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(45, 74, 138, 0.35);
`;

export const SizeGrid = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
`;

export const SizeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const SizeLabel = styled.span`
  ${font.medium}
  font-size: 11px;
  color: #9b7a54;
  letter-spacing: 0.5px;
`;

export const AvatarGroupCard = styled.div`
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(180, 150, 100, 0.3);
  border-radius: 20px;
  padding: 32px 36px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  backdrop-filter: blur(8px);
  box-shadow:
    0 4px 16px rgba(100, 70, 30, 0.1),
    inset 0 1px 0 rgba(255,255,255,0.8);
`;

export const AvatarStack = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarStackItem = styled.div`
  display: inline-block;
  margin-left: ${props => props.first ? '0' : '-14px'};
  border: 3px solid rgba(240, 230, 210, 0.9);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(60, 40, 20, 0.2);
  background: #f5f0e8;
  overflow: hidden;
  position: relative;
  z-index: ${props => props.zIndex};
`;

export const StackInfo = styled.div`
  margin-left: 16px;
`;

export const StackInfoTitle = styled.p`
  ${font.medium}
  font-size: 14px;
  color: #3d2a1e;
  margin: 0 0 4px;
`;

export const StackInfoSub = styled.p`
  ${font.regular}
  font-size: 12px;
  color: #9b7a54;
  margin: 0;
`;

export const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`;

export const ComparisonCard = styled.div`
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(180, 150, 100, 0.3);
  border-radius: 16px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  backdrop-filter: blur(8px);
  box-shadow:
    0 4px 12px rgba(100, 70, 30, 0.08),
    inset 0 1px 0 rgba(255,255,255,0.8);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: default;

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 8px 20px rgba(100, 70, 30, 0.16),
      inset 0 1px 0 rgba(255,255,255,0.8);
  }
`;

export const ComparisonName = styled.span`
  ${font.medium}
  font-size: 13px;
  color: #5a3d28;
  text-align: center;
`;

export const ComparisonTag = styled.span`
  ${font.regular}
  font-size: 10px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #9b7a54;
  background: rgba(155, 122, 84, 0.12);
  padding: 3px 8px;
  border-radius: 10px;
`;

export const DividerStar = styled.div`
  text-align: center;
  font-size: 20px;
  color: rgba(155, 122, 84, 0.5);
  margin: 8px 0;
  letter-spacing: 12px;
`;
