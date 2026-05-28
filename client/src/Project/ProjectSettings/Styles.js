import styled, { css } from 'styled-components';

import { color, font, mixin, sizes } from 'shared/utils/styles';
import { Button, Form, Avatar } from 'shared/components';

// Layout
export const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: ${color.backgroundLightest};
  min-height: 100vh;
`;

export const SettingsLayout = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;
  max-width: 1400px;
  width: 100%;
`;

export const Sidebar = styled.div`
  width: ${sizes.secondarySideBarWidth}px;
  flex-shrink: 0;
`;

export const ContentArea = styled.div`
  flex: 1;
  min-width: 0;
`;

// Sidebar Navigation
export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const navItemBase = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  ${font.regular}
  ${font.size(15)}
  color: ${color.textMedium};
  border-left: 3px solid transparent;
  transition: all 0.15s;
  ${mixin.clickable}

  &:hover {
    background: ${color.backgroundLight};
    color: ${color.textDark};
  }

  i {
    font-size: 18px;
    flex-shrink: 0;
  }
`;

export const NavItem = styled.div`
  ${navItemBase}
`;

export const NavItemActive = styled(NavItem)`
  background: ${color.backgroundLight};
  color: ${color.primary};
  border-left-color: ${color.primary};
  ${font.medium}
`;

// Section Content
export const SectionHeading = styled.h2`
  ${font.bold}
  ${font.size(18)}
  color: ${color.textDarkest};
  margin: 0 0 20px 0;
  padding: 0;
`;

export const GeneralSectionHeading = styled(SectionHeading)`
  color: ${color.danger};
`;

export const SectionDescription = styled.p`
  ${font.regular}
  ${font.size(14)}
  color: ${color.textMedium};
  margin: 0 0 20px 0;
  line-height: 1.5;
`;

export const SectionContent = styled.div`
  background: white;
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
  padding: 24px;
`;

export const SectionDivider = styled.div`
  height: 1px;
  background: ${color.borderLightest};
  margin: 24px 0;
`;

export const FormElement = styled(Form.Element)`
  width: 100%;
  max-width: none;
`;

export const FormElementField = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const PrimaryButton = styled(Button)`
  min-width: 120px;
`;

// Members Section Styles
export const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MembersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const MemberRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-bottom: 1px solid ${color.borderLightest};
  transition: background 0.1s;

  &:hover {
    background: ${color.backgroundLightest};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const MemberAvatar = styled(Avatar)``;

export const MemberInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MemberName = styled.div`
  ${font.medium}
  ${font.size(14)}
  color: ${color.textDarkest};
  ${mixin.truncateText}
`;

export const MemberEmail = styled.div`
  ${font.regular}
  ${font.size(13)}
  color: ${color.textMedium};
  ${mixin.truncateText}
`;

export const MemberRole = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 100px;
`;

export const MemberRoleSelect = styled.select`
  padding: 4px 8px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  ${font.regular}
  ${font.size(13)}
  color: ${color.textDarkest};
  background: white;
  cursor: pointer;
  transition: border 0.15s;

  &:hover {
    border-color: ${color.borderLight};
  }

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    box-shadow: 0 0 0 2px ${mixin.rgba(color.primary, 0.1)};
  }

  &:disabled {
    background: ${color.backgroundLight};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const MemberRoleBadge = styled.div`
  ${font.regular}
  ${font.size(13)}
  color: ${color.textMedium};
  padding: 4px 8px;
  background: ${color.backgroundLight};
  border-radius: 3px;
`;

export const MemberActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
`;

export const RemoveButton = styled(Button)`
  min-width: auto;
  padding: 4px 8px;
  font-size: 12px;
`;

// Invite Form
export const InviteForm = styled.form`
  display: flex;
  gap: 12px;
  align-items: flex-end;
  padding-top: 12px;
  border-top: 1px solid ${color.borderLightest};
  margin-top: 12px;
`;

export const InviteField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;

  &:nth-child(2) {
    flex: 0 1 150px;
  }
`;

export const InviteLabel = styled.label`
  ${font.medium}
  ${font.size(13)}
  color: ${color.textDarkest};
`;

export const InviteInput = styled.input`
  padding: 6px 8px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  ${font.regular}
  ${font.size(13)}
  color: ${color.textDarkest};
  transition: border 0.15s;

  &:hover {
    border-color: ${color.borderLight};
  }

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    box-shadow: 0 0 0 2px ${mixin.rgba(color.primary, 0.1)};
  }

  &::placeholder {
    color: ${color.textLight};
  }
`;

export const InviteSelect = styled.select`
  padding: 6px 8px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  ${font.regular}
  ${font.size(13)}
  color: ${color.textDarkest};
  background: white;
  cursor: pointer;
  transition: border 0.15s;

  &:hover {
    border-color: ${color.borderLight};
  }

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    box-shadow: 0 0 0 2px ${mixin.rgba(color.primary, 0.1)};
  }
`;

export const InviteButton = styled(Button)`
  min-width: auto;
  padding: 6px 16px;
  font-size: 13px;
`;

// Danger Zone
export const DangerContainer = styled.div`
  background: ${mixin.rgba(color.danger, 0.05)};
  border: 1px solid ${mixin.rgba(color.danger, 0.2)};
  border-left: 3px solid ${color.danger};
  border-radius: 4px;
  padding: 24px;
`;

export const DangerWarning = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  ${font.regular}
  ${font.size(14)}
  color: ${color.danger};
  margin-bottom: 20px;

  i {
    font-size: 18px;
    flex-shrink: 0;
  }
`;

export const DangerAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DangerActionTitle = styled.h3`
  ${font.bold}
  ${font.size(14)}
  color: ${color.textDarkest};
  margin: 0;
`;

export const DangerActionDescription = styled.p`
  ${font.regular}
  ${font.size(13)}
  color: ${color.textMedium};
  margin: 0;
  line-height: 1.4;
`;

export const DangerButton = styled(Button)`
  min-width: auto;
  padding: 6px 16px;
  font-size: 13px;
`;
