import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const PageCont = styled.div`
  padding: 0;
`;

// Main page heading with red color for emphasis (intentional design choice to match spec)
export const PageHeading = styled.h1`
  ${font.size(24)}
  ${font.medium}
  margin: 0 0 24px 0;
  color: #ff0000;
`;

export const Section = styled.div`
  margin-bottom: 48px;
`;

export const SectionHeading = styled.h2`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDark};
  margin: 0 0 16px 0;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  background: white;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  padding: 24px;
  max-width: 640px;
`;

export const CardAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.div`
  ${font.size(18)}
  ${font.medium}
  color: ${color.textDarkest};
  margin: 0;
`;

export const UserEmail = styled.div`
  ${font.size(14)}
  color: ${color.textMedium};
  margin-top: 4px;
`;

// Role badge styling (available for future use if team member roles are displayed)
export const UserRole = styled.div`
  ${font.size(12)}
  color: ${color.textLight};
  padding: 2px 8px;
  background: ${color.backgroundLightest};
  border-radius: 3px;
  display: inline-block;
  margin-top: 8px;
  width: fit-content;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

export const TeamCard = styled.div`
  background: white;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    ${mixin.boxShadowMedium}
    border-color: ${color.borderLight};
  }
`;

export const AvatarSizesSection = styled(Section)``;

export const AvatarSizeRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const SizeSwatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SizeLabel = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
  text-align: center;
  margin-top: 8px;
`;

export const ChangeAvatarButton = styled(Button)`
  margin-top: 16px;
`;
