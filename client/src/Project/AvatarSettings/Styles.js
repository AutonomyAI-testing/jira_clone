import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const PageCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

export const PageHeading = styled.h1`
  padding: 12px 0 20px;
  ${font.size(24)}
  ${font.medium}
  color: red;
`;

export const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LargePreviewCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: ${color.backgroundLightest};
  border: 1px solid ${color.borderLightest};
  border-radius: 8px;
  width: 100%;
`;

export const PreviewLabel = styled.div`
  ${font.size(18)}
  ${font.medium}
  color: ${color.textDark};
  margin-top: 16px;
`;

export const PreviewSublabel = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
  margin-top: 6px;
`;

export const SectionTitle = styled.div`
  text-transform: uppercase;
  ${font.bold}
  ${font.size(12.5)}
  color: ${color.textMedium};
  margin-bottom: 12px;
  margin-top: 28px;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const SectionDivider = styled.div`
  border-top: 1px solid ${color.borderLightest};
  margin: 28px 0;
`;

export const AvatarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: 999px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AvatarCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px;
  border-radius: 6px;
  border: 2px solid ${props => (props.isSelected ? color.primary : color.borderLightest)};
  background: ${props => (props.isSelected ? color.backgroundLightPrimary : 'white')};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${color.backgroundLight};
    border-color: ${props => (props.isSelected ? color.primary : color.borderLight)};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const AvatarCardLabel = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
  margin-top: 8px;
  text-align: center;
  word-break: break-word;
`;

export const UploadArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UploadHint = styled.div`
  ${font.size(12.5)}
  color: ${color.textMedium};
`;

export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 32px;
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;
