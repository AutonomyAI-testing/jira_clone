import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

export const PageCont = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageElement = styled(Form.Element)`
  width: 100%;
  max-width: 640px;
`;

export const PageHeading = styled.h2`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const AvatarWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserName = styled.div`
  ${font.size(20)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const UserEmail = styled.div`
  ${font.size(14)}
  color: ${color.textMedium};
`;

export const UserSince = styled.div`
  ${font.size(13)}
  color: ${color.textLight};
`;

export const SectionDivider = styled.div`
  border-bottom: 1px solid ${color.borderLightest};
  margin: 20px 0;
`;

export const ActionButton = styled(Button)`
  margin-top: 30px;
`;
