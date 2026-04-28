import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Section = styled.div`
  margin-top: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.div`
  ${font.size(18)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const IssueCount = styled.span`
  margin-left: 8px;
  ${font.size(14)}
  color: ${color.textMedium};
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const Issues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 100px;
`;

export const EmptyState = styled.div`
  padding: 60px 40px;
  text-align: center;
  color: ${color.textMedium};
  ${font.size(15)}
  background: ${color.backgroundLightest};
  border-radius: 4px;
`;
