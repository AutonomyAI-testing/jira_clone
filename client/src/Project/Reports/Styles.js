import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const ReportsPage = styled.div`
  padding: 25px 30px 50px;
  max-width: 1600px;
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  margin-bottom: 20px;
`;

export const PageTitle = styled.h1`
  padding: 0 0 5px;
  ${font.size(24)}
  ${font.medium}
`;

export const FilterBar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
  background: ${props => (props.active ? color.primary : 'white')};
  color: ${props => (props.active ? 'white' : color.textDark)};
  ${font.size(14)}
  ${font.medium}
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background: ${props => (props.active ? color.primary : color.backgroundLight)};
  }
`;

export const SummaryRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${color.borderLightest};
  text-align: center;
  border-left: 4px solid
    ${props => {
      if (props.accent === 'success') return color.success;
      if (props.accent === 'primary') return color.primary;
      if (props.accent === 'warning') return color.warning;
      return color.borderLightest;
    }};
`;

export const SummaryValue = styled.div`
  ${font.size(32)}
  ${font.bold}
  color: ${color.textDarkest};
  margin-bottom: 8px;
`;

export const SummaryLabel = styled.div`
  ${font.size(13)}
  ${font.medium}
  color: ${color.textMedium};
  text-transform: uppercase;
`;

export const WidgetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Widget = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${color.borderLightest};
`;

export const WidgetHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const WidgetTitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12.5)}
  ${font.bold}
`;

export const WidgetBody = styled.div`
  padding: 24px;
`;

// Issues by Status styles
export const StatusBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StatusBarSegment = styled.div`
  height: 32px;
  background: ${props => props.color};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => Math.max(props.width, 8)}%;
  transition: all 0.2s;
`;

export const StatusBarLabel = styled.span`
  color: ${color.textDarkest};
  ${font.size(14)}
  ${font.medium}
  padding: 0 8px;
`;

// Issues by Type styles
export const TypeBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TypeBarSegment = styled.div`
  height: 32px;
  background: ${props => props.color};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => Math.max(props.width, 8)}%;
  transition: all 0.2s;
`;

export const TypeBarLabel = styled.span`
  color: white;
  ${font.size(14)}
  ${font.medium}
  padding: 0 8px;
`;

// Priority Distribution styles
export const PriorityBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PriorityBarLabel = styled.div`
  width: 80px;
  ${font.size(13)}
  ${font.medium}
  color: ${color.textDark};
`;

export const PriorityBarFill = styled.div`
  flex: 1;
  height: 28px;
  background: ${props => props.color};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: white;
  ${font.size(13)}
  ${font.medium}
  width: ${props => Math.max(props.width, 15)}%;
  transition: all 0.2s;
`;

// Workload by Assignee styles
export const WorkloadItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const WorkloadUserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  flex-shrink: 0;
`;

export const WorkloadUserName = styled.div`
  margin-left: 12px;
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const WorkloadBar = styled.div`
  flex: 1;
  height: 28px;
  background: ${color.backgroundLight};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

export const WorkloadBarFill = styled.div`
  height: 100%;
  background: ${color.primary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  width: ${props => Math.max(props.width, 12)}%;
  transition: all 0.2s;
`;

export const WorkloadCount = styled.span`
  color: white;
  ${font.size(13)}
  ${font.medium}
`;

// Time Tracking Overview styles
export const TimeTrackingStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
`;

export const TimeTrackingStat = styled.div`
  text-align: center;
`;

export const TimeTrackingStatValue = styled.div`
  ${font.size(28)}
  ${font.bold}
  color: ${color.textDarkest};
  margin-bottom: 4px;
`;

export const TimeTrackingStatLabel = styled.div`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textMedium};
  text-transform: uppercase;
`;

export const TimeTrackingProgressBar = styled.div`
  height: 12px;
  background: ${color.backgroundLight};
  border-radius: 6px;
  overflow: hidden;
`;

export const TimeTrackingProgressBarFill = styled.div`
  height: 100%;
  background: ${color.primary};
  border-radius: 6px;
  width: ${props => props.width}%;
  transition: all 0.3s;
`;

// Recently Updated Issues styles
export const IssueTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IssueRow = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid ${color.borderLightest};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const IssueInfo = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const IssueTitle = styled.div`
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 6px;
`;

export const IssueMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const IssueStatusBadge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 3px;
  background: ${props => props.color};
  color: ${color.textDarkest};
  ${font.size(11)}
  ${font.medium}
  text-transform: uppercase;
`;

export const IssueTimestamp = styled.span`
  ${font.size(12)}
  color: ${color.textMedium};
`;
