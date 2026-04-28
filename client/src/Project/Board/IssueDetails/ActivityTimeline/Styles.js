import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Timeline = styled.div`
  position: relative;
  padding: 20px 0 20px 20px;
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-left: 40px;
  padding-bottom: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 10px;
    bottom: -10px;
    width: 2px;
    background: ${color.borderLight};
  }

  &:last-child::before {
    display: none;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 0;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.color || color.textMedium};
  z-index: 1;
`;

export const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TimelineHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const TimelineText = styled.div`
  flex: 1;
  ${font.size(14)}
  color: ${color.textDark};
  line-height: 1.5;
  padding-top: 2px;
`;

export const TimelineTime = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
  margin-left: 32px;
`;

export const DateSeparator = styled.div`
  position: relative;
  margin: 16px 0;
  text-align: center;
  ${font.size(13)}
  ${font.medium}
  color: ${color.textMedium};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: ${color.borderLightest};
  }
`;

export const DateText = styled.span`
  position: relative;
  background: white;
  padding: 0 12px;
`;

export const EmptyState = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: ${color.textMedium};
  ${font.size(14)}
`;
