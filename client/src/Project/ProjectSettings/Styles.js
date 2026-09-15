import styled from 'styled-components';

import { font, color } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

export const FormCont = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormElement = styled(Form.Element)`
  width: 100%;
  max-width: 760px;
`;

export const ContentElement = styled.div`
  width: 100%;
  max-width: 760px;
`;

export const FormHeading = styled.h1`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
  color: red;
`;

export const SectionTitle = styled.h2`
  padding: 30px 0 10px;
  ${font.size(20)}
  ${font.medium}
  color: ${props => (props.danger ? color.danger : color.textDarkest)};
`;

export const SectionDesc = styled.p`
  padding: 0 0 20px;
  ${font.size(14)}
  color: ${color.textMedium};
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${color.borderLightest};
  margin: 40px 0;
`;

export const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
  padding: 15px;
  background-color: ${color.backgroundLightest};
  border-radius: 4px;
`;

export const AvatarDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectNameDisplay = styled.span`
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const MembersSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 16px;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  overflow: hidden;
`;

export const MemberRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: #fff;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${color.backgroundLightest};
  }
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const MemberName = styled.div`
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const MemberEmail = styled.div`
  ${font.size(12)}
  color: ${color.textLight};
`;

export const MembersCount = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
  margin-bottom: 12px;
`;

export const DangerZone = styled.div`
  padding: 20px;
  border: 2px solid ${color.danger};
  border-radius: 4px;
  background-color: rgba(225, 60, 60, 0.05);
`;

export const DangerZoneItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const DangerZoneItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const DangerZoneTitle = styled.div`
  ${font.size(16)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const DangerZoneDesc = styled.div`
  ${font.size(14)}
  color: ${color.textMedium};
  line-height: 1.4;
`;

export const ActionButton = styled(Button)`
  margin-top: 30px;
`;
