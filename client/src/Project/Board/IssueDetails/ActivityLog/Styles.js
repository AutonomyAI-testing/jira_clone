import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const ActivityCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ActivityItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid ${color.borderLightest};

  &:last-child {
    border-bottom: none;
  }
`;

export const ActivityUser = styled.div`
  flex-shrink: 0;
`;

export const ActivityContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ActivityAction = styled.div`
  ${font.size(13)}
  color: ${color.textDarkest};
  line-height: 1.4;

  strong {
    font-weight: 500;
  }
`;

export const ActivityTimestamp = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
`;

export const FieldChange = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  background-color: ${color.backgroundLight};
  border-radius: 3px;
  margin-top: 4px;
  width: fit-content;
`;

export const OldValue = styled.span`
  ${font.size(12)}
  color: ${color.textMedium};
  text-decoration: line-through;
`;

export const NewValue = styled.span`
  ${font.size(12)}
  color: ${color.textDark};
  font-weight: 500;
`;
