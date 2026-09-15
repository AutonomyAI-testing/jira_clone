import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

export const SectionContainer = styled.div`
  display: flex;
  gap: 40px;
  padding-top: 24px;
`;

export const SectionNav = styled.nav`
  width: 220px;
  flex-shrink: 0;
  @media (max-width: 999px) {
    display: none;
  }
`;

export const SectionNavHeading = styled.div`
  padding: 0 12px 8px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${color.textLight};
  ${font.bold}
  ${font.size(11)}
`;

export const SectionNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: ${props => (props.isActive ? color.primary : color.textDark)};
  background: ${props => (props.isActive ? color.backgroundLightPrimary : 'transparent')};
  ${font.size(14)};
  ${font.medium};
  i {
    color: ${props => (props.isActive ? color.primary : color.textMedium)};
  }
  &:hover {
    background: ${props => (props.isActive ? color.backgroundLightPrimary : color.backgroundLight)};
  }
`;

export const SectionContent = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 640px;
`;

export const SectionTitle = styled.h1`
  padding: 0 0 6px;
  ${font.size(24)};
  ${font.medium};
  color: ${color.textDarkest};
`;

export const SectionSubtitle = styled.p`
  margin-bottom: 24px;
  color: ${color.textMedium};
  ${font.size(14)};
`;

export const FormElement = styled(Form.Element)`
  width: 100%;
`;

export const ActionButton = styled(Button)`
  margin-top: 30px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 0 28px;
  border-bottom: 1px solid ${color.borderLightest};
  margin-bottom: 28px;
`;

export const AvatarMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AvatarLabel = styled.div`
  ${font.medium};
  ${font.size(14)};
  color: ${color.textDark};
`;

export const AvatarHint = styled.div`
  ${font.size(12)};
  color: ${color.textLight};
`;

export const MembersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MemberRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 12px;
  border-radius: 4px;
  &:hover {
    background: ${color.backgroundLightest};
  }
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MemberName = styled.div`
  ${font.medium};
  ${font.size(14)};
  color: ${color.textDarkest};
`;

export const MemberEmail = styled.div`
  ${font.size(12)};
  color: ${color.textLight};
`;

export const InviteButton = styled(Button)`
  margin-top: 16px;
`;

export const AccessInfoBox = styled.div`
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid ${color.borderLightest};
  background: ${color.backgroundLightest};
  margin-top: 8px;
`;

export const AccessInfoText = styled.div`
  ${font.size(14)};
  color: ${color.textDark};
  line-height: 1.6;
`;

export const DangerZoneBox = styled.div`
  border: 1px solid #ffd2d2;
  border-radius: 6px;
  padding: 20px 24px;
  margin-top: 8px;
`;

export const DangerZoneRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const DangerZoneLabel = styled.div`
  ${font.medium};
  ${font.size(14)};
  color: ${color.textDarkest};
`;

export const DangerZoneDesc = styled.div`
  ${font.size(13)};
  color: ${color.textMedium};
  margin-top: 4px;
`;
