import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const ActivityContainer = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid ${color.borderLightest};
`;

export const ActivityItem = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${color.borderLightest};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const ActivityContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ActivityHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
`;

export const ActivityUser = styled.span`
  font-weight: 500;
  color: ${color.textDarkest};
  ${font.size(13.5)}
`;

export const ActivityTime = styled.span`
  color: ${color.textMedium};
  ${font.size(12)}
`;

export const ActivityField = styled.div`
  color: ${color.textDark};
  ${font.size(13)}
  line-height: 1.4;

  strong {
    font-weight: 600;
  }
`;
