import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const GanttContainer = styled.div`
  margin-top: 24px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${color.borderLightest};
  overflow-x: auto;
`;

export const GanttHeader = styled.div`
  display: flex;
  border-bottom: 2px solid ${color.borderLight};
  background: ${color.backgroundLight};
`;

export const TaskRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${color.borderLightest};
  min-height: 56px;

  &:hover {
    background: ${color.backgroundLightest};
  }
`;

export const TaskListContainer = styled.div`
  width: 400px;
  min-width: 400px;
  border-right: 1px solid ${color.borderLightest};
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const TaskInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    color: ${color.primary};
  }
`;

export const TaskName = styled.div`
  ${font.size(14)}
  color: ${color.textDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TaskMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`;

export const AssigneesContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const TimelineContainer = styled.div`
  flex: 1;
  overflow-x: auto;
  position: relative;
`;

export const TimelineHeader = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
`;

export const MonthCell = styled.div`
  width: ${props => props.width}px;
  min-width: ${props => props.width}px;
  padding: 12px 8px;
  text-align: center;
  ${font.size(13)}
  ${font.medium}
  color: ${color.textMedium};
  border-right: 1px solid ${color.borderLightest};
`;

export const Timeline = styled.div`
  width: ${props => props.width}px;
  min-width: ${props => props.width}px;
  height: 56px;
  position: relative;
  display: flex;
`;

export const DayCell = styled.div`
  width: ${props => props.width}px;
  min-width: ${props => props.width}px;
  height: 100%;
  border-right: 1px solid ${color.backgroundMedium};
`;

export const TaskBar = styled.div`
  position: absolute;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  height: 32px;
  top: 12px;
  background: ${props => {
    switch (props.status) {
      case 'done':
        return color.success;
      case 'inprogress':
        return color.primary;
      case 'selected':
        return '#FFB800';
      default:
        return color.textMedium;
    }
  }};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;

export const TaskBarInner = styled.div`
  padding: 0 8px;
  line-height: 32px;
  color: white;
  ${font.size(12)}
  ${font.medium}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DependencyLine = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const EditTaskRow = styled.div`
  border-bottom: 1px solid ${color.borderLightest};
  background: ${color.backgroundLightest};
`;

export const EditContent = styled.div`
  padding: 16px;
`;

export const EditLabel = styled.label`
  display: block;
  ${font.size(12.5)}
  font-weight: 500;
  color: ${color.textMedium};
  margin-bottom: 6px;
`;

export const EditInput = styled.input`
  width: 100%;
  ${font.size(14)}
  padding: 8px 10px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
  }
`;

export const EditActions = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 4px;
`;

export const SaveButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  background: ${color.primary};
  color: #fff;
  ${font.size(14)}
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: ${color.primaryDark};
  }
`;

export const CancelButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  background: ${color.backgroundMedium};
  color: ${color.textDark};
  ${font.size(14)}
  cursor: pointer;
  &:hover {
    background: ${color.backgroundLight};
  }
`;
