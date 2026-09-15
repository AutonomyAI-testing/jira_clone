import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

// Main layout
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 860px;
`;

export const Header = styled.h1`
  padding: 6px 0 20px;
  ${font.size(24)}
  ${font.medium}
`;

// Tabs navigation
export const TabsNav = styled.div`
  display: flex;
  border-bottom: 1px solid ${color.borderLightest};
  margin-bottom: 32px;
`;

export const TabNavItem = styled.div`
  padding: 10px 20px;
  margin-bottom: -1px;
  cursor: pointer;
  ${font.size(14.5)}
  border-bottom: 3px solid transparent;
  color: ${color.textMedium};
  user-select: none;
  transition: color 0.15s, border-color 0.15s;
  
  &:hover {
    color: ${color.textDark};
  }
  
  ${props =>
    props.isActive &&
    `
    color: ${color.primary};
    border-bottom-color: ${color.primary};
    ${font.medium}
  `}
`;

export const TabContent = styled.div``;

// General tab
export const FormCont = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const FormElement = styled(Form.Element)`
  width: 100%;
  max-width: 640px;
`;

export const ActionButton = styled(Button)`
  margin-top: 30px;
`;

export const MetaSection = styled.div`
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid ${color.borderLightest};
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const MetaLabel = styled.span`
  width: 120px;
  color: ${color.textMedium};
  ${font.size(13)}
`;

export const MetaValue = styled.span`
  color: ${color.textDark};
  ${font.size(13)}
`;

// Members tab
export const MembersSection = styled.div`
  max-width: 640px;
`;

export const SectionHeading = styled.h2`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDark};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MemberCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  border-radius: 12px;
  background: ${color.backgroundMedium};
  color: ${color.textMedium};
  ${font.size(12)}
`;

export const MembersList = styled.div`
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  overflow: hidden;
`;

export const MemberRow = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid ${color.borderLightest};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: ${color.backgroundLightest};
  }
`;

export const MemberInfo = styled.div`
  margin-left: 14px;
  flex: 1;
`;

export const MemberName = styled.div`
  color: ${color.textDark};
  ${font.size(14)}
  ${font.medium}
`;

export const MemberEmail = styled.div`
  color: ${color.textMedium};
  ${font.size(12)}
  margin-top: 2px;
`;

export const MemberJoined = styled.div`
  color: ${color.textLight};
  ${font.size(12)}
`;

export const EmptyMembers = styled.div`
  padding: 40px;
  text-align: center;
  color: ${color.textMedium};
  ${font.size(14)}
`;

// Danger Zone
export const DangerZoneSection = styled.div`
  margin-top: 48px;
  padding: 24px;
  border: 1px solid ${color.danger};
  border-radius: 4px;
  max-width: 640px;
  background: #fff5f5;
`;

export const DangerHeading = styled.h2`
  ${font.size(16)}
  ${font.medium}
  color: ${color.danger};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DangerDescription = styled.p`
  color: ${color.textMedium};
  ${font.size(13)}
  margin-bottom: 20px;
  margin-top: 0;
`;

export const DangerButton = styled(Button)``;

// Delete modal
export const DeleteModalCont = styled.div`
  padding: 24px 28px;
`;

export const DeleteModalTitle = styled.h2`
  ${font.size(20)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 12px;
  margin-top: 0;
`;

export const DeleteModalWarning = styled.p`
  color: ${color.textMedium};
  ${font.size(14)}
  margin-bottom: 20px;
  line-height: 1.6;
`;

export const DeleteModalInstruction = styled.p`
  ${font.size(13)}
  ${font.medium}
  color: ${color.textDark};
  margin-bottom: 8px;
  margin-top: 0;
`;

export const DeleteModalInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${color.borderLight};
  border-radius: 3px;
  ${font.size(14)}
  color: ${color.textDarkest};
  outline: none;
  margin-bottom: 20px;
  box-sizing: border-box;
  
  &:focus {
    border-color: ${color.borderInputFocus};
    box-shadow: 0 0 0 2px rgba(76, 154, 255, 0.2);
  }
`;

export const DeleteModalActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
