import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const Container = styled.div`
  padding: 30px 60px 60px;
  max-width: 900px;
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  margin-bottom: 40px;
`;

export const PageTitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const PageTitle = styled.h1`
  ${font.size(32)}
  ${font.bold}
  color: ${color.danger};
  margin: 0;
  line-height: 1;
`;

export const PageSubtitle = styled.p`
  ${font.size(15)}
  color: ${color.textMedium};
  margin: 8px 0 16px;
  line-height: 1.4;
`;

export const Section = styled.div`
  margin-bottom: 0;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 0;
`;

export const SectionTitle = styled.h2`
  ${font.size(18)}
  ${font.bold}
  color: ${color.textDarkest};
  margin: 0;
  padding: 0;
  line-height: 1;
`;

export const SectionContent = styled.div`
  padding: 20px 0;
`;

export const SectionDivider = styled.div`
  height: 1px;
  background: ${color.borderLightest};
  margin: 40px 0;
`;

/* Members Section */
export const MembersHeader = styled(SectionHeader)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MembersCount = styled.div`
  ${font.size(14)}
  color: ${color.textMedium};
  padding: 4px 8px;
  background: ${color.backgroundLightest};
  border-radius: 12px;
  ${font.medium}
  min-width: 32px;
  text-align: center;
`;

export const AddMemberButton = styled(Button)`
  margin-left: auto;
`;

export const MembersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const MemberRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid ${color.borderLightest};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${color.backgroundLightest};
    margin: 0 -8px;
    padding: 12px 8px;
    border-radius: 3px;
  }
`;

export const MemberAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${props => props.color};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${font.size(13)}
  ${font.bold}
`;

export const MemberInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MemberName = styled.div`
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const MemberRole = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
`;

export const MemberAction = styled(Button)`
  flex-shrink: 0;
`;

/* Danger Zone Section */
export const DangerSection = styled(Section)`
  border: 1px solid ${color.danger};
  border-radius: 4px;
  padding: 20px;
  background: rgba(225, 60, 60, 0.02);
`;

export const DangerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${color.borderLightest};
  }
`;

export const DangerItemContent = styled.div`
  flex: 1;
`;

export const DangerItemTitle = styled.div`
  ${font.size(15)}
  ${font.bold}
  color: ${color.textDarkest};
  margin-bottom: 4px;
`;

export const DangerItemDescription = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
  line-height: 1.4;
`;

export const DangerItemAction = styled(Button)`
  flex-shrink: 0;
`;
