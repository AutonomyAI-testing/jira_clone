import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const TooltipContent = styled.div`
  padding: 16px;
`;

export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const UserName = styled.div`
  ${font.medium}
  ${font.size(15)}
  color: ${color.textDarkest};
`;

export const WorkloadSummary = styled.div`
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const AvailabilityRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  ${props => props.highlight && `
    margin-top: 8px;
    padding-top: 12px;
    border-top: 1px solid ${color.borderLight};
  `}
`;

export const AvailabilityLabel = styled.span`
  ${font.size(13)}
  color: ${color.textMedium};
`;

export const AvailabilityValue = styled.span`
  ${font.medium}
  ${font.size(13)}
  color: ${color.textDarkest};
`;

export const AvailableHours = styled.span`
  ${font.bold}
  ${font.size(14)}
  color: ${props => (props.isOverloaded ? '#E13C3C' : '#0B875B')};
`;

export const TaskList = styled.div`
  max-height: 240px;
  overflow-y: auto;
`;

export const TaskItem = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid ${color.backgroundMedium};
  
  &:last-child {
    border-bottom: none;
  }
`;

export const TaskTitle = styled.div`
  ${font.size(13)}
  color: ${color.textDarkest};
  margin-bottom: 4px;
  line-height: 1.4;
`;

export const TaskHours = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
`;
