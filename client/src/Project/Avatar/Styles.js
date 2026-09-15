import styled from 'styled-components';

import { font } from 'shared/utils/styles';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 36px 40px 50px;
  overflow-y: auto;
  background: #fff;
`;

export const PageHeader = styled.div`
  margin-bottom: 32px;
`;

export const PageTitle = styled.h1`
  ${font.size(24)}
  ${font.bold}
  color: red;
  margin: 0 0 8px;
`;

export const PageSubtitle = styled.p`
  ${font.size(15)}
  color: #5e6c84;
  margin: 0;
`;

export const ContentGrid = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const GallerySection = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SectionTitle = styled.h2`
  ${font.size(13)}
  ${font.bold}
  color: #5e6c84;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 16px;
`;

export const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AvatarCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px 14px;
  border-radius: 8px;
  border: 2px solid ${props => (props.isSelected ? '#0052CC' : '#dfe1e6')};
  background: ${props => (props.isSelected ? '#e9f0fb' : '#fafbfc')};
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;
  user-select: none;

  &:hover {
    border-color: ${props => (props.isSelected ? '#0052CC' : '#b3bac5')};
    box-shadow: 0 2px 8px rgba(0, 82, 204, 0.12);
    background: ${props => (props.isSelected ? '#e9f0fb' : '#f4f5f7')};
  }

  &:focus-visible {
    outline: 2px solid #0052CC;
    outline-offset: 2px;
  }
`;

export const FeaturedBadge = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  ${font.size(10)}
  ${font.bold}
  background: #ff9800;
  color: #fff;
  padding: 2px 7px;
  border-radius: 20px;
  letter-spacing: 0.03em;
`;

export const SelectedCheckmark = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #0052CC;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  ${font.size(11)}
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.15s;
`;

export const CardLabel = styled.span`
  margin-top: 10px;
  ${font.size(12)}
  color: #172b4d;
  text-align: center;
`;

export const LetterAvatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: ${props => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  ${font.bold}
  ${font.size(26)}
  text-transform: uppercase;
  flex-shrink: 0;
`;

export const PreviewPanel = styled.div`
  width: 260px;
  flex-shrink: 0;
  border: 1px solid #dfe1e6;
  border-radius: 8px;
  padding: 24px 20px;
  background: #fafbfc;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PreviewTitle = styled.h2`
  ${font.size(13)}
  ${font.bold}
  color: #5e6c84;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 20px;
`;

export const PreviewSizes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;
`;

export const PreviewSizeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const SizeLabel = styled.span`
  ${font.size(11)}
  color: #97a0af;
  width: 48px;
  flex-shrink: 0;
`;

export const PreviewLetterAvatar = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: ${props => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  ${font.bold}
  font-size: ${props => Math.round(props.size / 1.7)}px;
  text-transform: uppercase;
  flex-shrink: 0;
  overflow: hidden;
`;

export const ApplyButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background: #0052CC;
  color: #fff;
  border: none;
  border-radius: 4px;
  ${font.size(14)}
  ${font.bold}
  cursor: pointer;
  transition: background 0.15s;
  letter-spacing: 0.01em;

  &:hover {
    background: #0747a6;
  }

  &:active {
    background: #0044aa;
  }

  &:disabled {
    background: #b3bac5;
    cursor: not-allowed;
  }
`;

export const AppliedBanner = styled.div`
  margin-top: 12px;
  padding: 8px 12px;
  background: #e3fcef;
  color: #006644;
  border-radius: 4px;
  ${font.size(13)}
  text-align: center;
  border: 1px solid #abe2cc;
`;
