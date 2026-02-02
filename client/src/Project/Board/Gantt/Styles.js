import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const GanttContainer = styled.div`
  margin-top: 20px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 1px 4px 0px rgba(9, 30, 66, 0.15);
  overflow-x: auto;
`;

export const GanttHeader = styled.div`
  display: flex;
  border-bottom: 2px solid ${color.borderLight};
  background: ${color.backgroundLightest};
`;

export const TaskColumn = styled.div`
  min-width: 250px;
  width: 250px;
  flex-shrink: 0;
  padding: 15px;
  border-right: 1px solid ${color.borderLight};
  font-weight: 600;
  ${font.size(13)}
  color: ${color.textDark};
`;

export const TimelineColumn = styled.div`
  flex: 1;
  padding: 15px;
  font-weight: 600;
  ${font.size(13)}
  color: ${color.textDark};
`;

export const MonthsRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const MonthCell = styled.div`
  padding: 10px;
  text-align: center;
  border-right: 1px solid ${color.borderLightest};
  font-weight: 600;
  ${font.size(12)}
  color: ${color.textDark};
  background: ${color.backgroundLight};
`;

export const DaysRow = styled.div`
  display: flex;
`;

export const DayCell = styled.div`
  padding: 8px 4px;
  text-align: center;
  border-right: 1px solid ${color.borderLightest};
  ${font.size(11)}
  color: ${color.textMedium};
  min-width: 40px;
  background: ${props => props.isToday ? color.backgroundMedium : 'transparent'};
`;

export const GanttBody = styled.div`
  max-height: 600px;
  overflow-y: auto;
`;

export const TaskRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${color.borderLightest};
  min-height: 60px;
  
  &:hover {
    background: ${color.backgroundLightest};
  }
`;

export const TaskInfo = styled.div`
  min-width: 250px;
  width: 250px;
  flex-shrink: 0;
  padding: 10px 15px;
  border-right: 1px solid ${color.borderLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TaskTitle = styled.div`
  ${font.size(14)}
  color: ${color.textDark};
  margin-bottom: 5px;
`;

export const TaskMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 5px;
`;

export const TaskStatus = styled.span`
  padding: 2px 8px;
  border-radius: 3px;
  ${font.size(11)}
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => props.statusColor || color.backgroundMedium};
  color: ${props => props.textColor || color.textDark};
`;

export const TimelineArea = styled.div`
  flex: 1;
  position: relative;
  padding: 10px 0;
`;

export const TimelineGrid = styled.div`
  display: flex;
  height: 100%;
`;

export const TimelineGridCell = styled.div`
  min-width: 40px;
  border-right: 1px solid ${color.borderLightest};
  background: ${props => props.isToday ? 'rgba(0, 82, 204, 0.05)' : 'transparent'};
`;

export const TaskBar = styled.div`
  position: absolute;
  height: 28px;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.color || color.primary};
  border-radius: 4px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  color: #fff;
  ${font.size(12)}
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }
`;

export const EmptyState = styled.div`
  padding: 60px 20px;
  text-align: center;
  color: ${color.textMedium};
  ${font.size(15)}
`;
