import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const Container = styled.div`
  width: 100%;
  max-width: 640px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const HeaderTitle = styled.h2`
  padding: 0;
  margin: 0;
  ${font.size(18)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const InviteButton = styled(Button)`
  flex-shrink: 0;
`;

export const MembersContent = styled.div`
  padding: 20px 0;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

export const EmptyStateTitle = styled.div`
  margin-bottom: 8px;
  ${font.size(16)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const EmptyStateTip = styled.div`
  ${font.size(14)}
  color: ${color.textMedium};
`;

export const MembersList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MemberItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid ${color.borderLightest};

  &:last-child {
    border-bottom: none;
  }
`;

export const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
`;

export const MemberAvatar = styled.div`
  flex-shrink: 0;
`;

export const MemberDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const MemberName = styled.div`
  ${font.size(14)}
  ${font.bold}
  color: ${color.textDarkest};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MemberEmail = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MemberRole = styled.div`
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  margin-right: 12px;
  border-radius: 4px;
  background: ${color.backgroundLight};
  ${font.size(12)}
  ${font.bold}
  color: ${color.textMedium};
  flex-shrink: 0;
`;

export const RemoveButton = styled(Button)`
  flex-shrink: 0;
  padding: 6px;
`;
