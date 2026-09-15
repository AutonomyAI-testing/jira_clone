import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

export const FormCont = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormElement = styled(Form.Element)`
  width: 100%;
  max-width: 640px;
`;

export const FormHeading = styled.h1`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
`;

export const ActionButton = styled(Button)`
  margin-top: 30px;
`;

// Avatar Preview Section Styles
export const AvatarPreviewSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

export const AvatarPreview = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;

  /* Reveal overlay edit hint on hover */
  &:hover ${/* sc-selector */ 'div'} {
    opacity: 1;
  }
`;

export const AvatarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  opacity: 0;
  transition: opacity 0.2s;
  border-radius: 50%;
  /* Edit hint shown on avatar hover */
  ${mixin.clickable}
`;

export const AvatarInfo = styled.div`
  text-align: center;
`;

export const AvatarName = styled.div`
  ${font.size(18)}
  ${font.medium}
  color: red;
  margin-bottom: 4px;
`;

export const AvatarEmail = styled.div`
  ${font.size(14)}
  color: red;
`;

// Avatar URL Input Section
export const AvatarUrlInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    ${font.size(14)}
    ${font.medium}
    color: ${color.textDarkest};
  }
`;

export const AvatarUrlInput = styled.input`
  padding: 8px 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  ${font.size(14)}
  color: ${color.textDarkest};
  font-size: inherit;
  font-weight: inherit;

  &:focus {
    outline: none;
    border-color: ${color.primary};
    box-shadow: 0 0 0 2px ${color.primary}33;
  }

  &::placeholder {
    color: ${color.textLight};
  }
`;

export const AvatarUpdateButton = styled(Button)`
  align-self: flex-start;
  margin-top: 5px;
`;

// Profile Details Section
export const ProfileDetailsHeading = styled.h2`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
  padding: 20px 0 15px;
  margin: 20px 0 0;
`;

// Team Members Section
export const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid ${color.borderLightest};
`;

export const TeamSectionHeading = styled.h2`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 15px;
`;

export const TeamMembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TeamMemberRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${color.backgroundLight};
  }
`;

export const TeamMemberAvatar = styled.div`
  margin-right: 12px;
  flex-shrink: 0;
`;

export const TeamMemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`;

export const TeamMemberName = styled.div`
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const TeamMemberEmail = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
