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
  transition: all 0.2s ease;

  &:hover {
    background: ${props => (props.active ? color.primary : color.backgroundLight)};
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const AdvancedFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
  padding: 20px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${color.borderLightest};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterLabel = styled.label`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textMedium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 0 0 1px ${color.borderLight};
    transform: translateY(-2px);
  }
`;

export const WidgetHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const WidgetHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WidgetActions = styled.div`
  display: flex;
  gap: 8px;
  opacity: 0.6;
  transition: opacity 0.2s;

  ${Widget}:hover & {
    opacity: 1;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  color: ${color.textMedium};
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${color.backgroundLight};
    color: ${color.textDarkest};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CollapsedPlaceholder = styled.div`
  padding: 24px;
  text-align: center;
  color: ${color.textMedium};
  ${font.size(13)}
  font-style: italic;
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
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  &:hover {
    transform: scaleY(1.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
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
  transition: all 0.3s ease;

  &:hover {
    transform: scaleY(1.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
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
  transition: all 0.4s ease;

  &:hover {
    transform: scaleX(1.02);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  }
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
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
  }

  &:hover:after {
    animation: shimmer 1s forwards;
  }

  @keyframes shimmer {
    to {
      transform: translateX(100%);
    }
  }
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
  background: linear-gradient(90deg, ${color.primary}, #0065FF);
  border-radius: 6px;
  width: ${props => props.width}%;
  transition: width 0.6s ease;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: progress-shimmer 2s infinite;
  }

  @keyframes progress-shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
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
  transition: all 0.2s;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:hover {
    background: ${color.backgroundLightest};
    margin: 0 -12px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 3px;
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

// Chart Legend
export const ChartLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid ${color.borderLightest};
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LegendColor = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: ${props => props.color};
`;

export const LegendLabel = styled.span`
  ${font.size(13)}
  ${font.medium}
  color: ${color.textDark};
`;

export const LegendValue = styled.span`
  ${font.size(13)}
  color: ${color.textMedium};
  margin-left: 4px;
`;

// Velocity Chart
export const VelocityChart = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 200px;
  gap: 12px;
`;

export const VelocityBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 8px;
`;

export const VelocityBar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  height: 160px;
  width: 100%;
`;

export const VelocityBarCommitted = styled.div`
  width: 40%;
  height: ${props => props.height}%;
  background: #0052CC;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 6px;
  color: white;
  ${font.size(11)}
  ${font.medium}
  transition: all 0.3s ease;

  &:hover {
    background: #0065FF;
    transform: translateY(-2px);
  }
`;

export const VelocityBarCompleted = styled.div`
  width: 40%;
  height: ${props => props.height}%;
  background: #00875A;
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 6px;
  color: white;
  ${font.size(11)}
  ${font.medium}
  transition: all 0.3s ease;

  &:hover {
    background: #00A868;
    transform: translateY(-2px);
  }
`;

export const VelocityWeek = styled.div`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textDark};
  text-align: center;
`;

// Burndown Chart
export const BurndownChart = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  padding: 20px 40px 40px 50px;
`;

export const BurndownGrid = styled.div`
  position: absolute;
  top: 20px;
  left: 50px;
  right: 40px;
  bottom: 40px;
  background-image: 
    linear-gradient(to bottom, ${color.borderLightest} 1px, transparent 1px),
    linear-gradient(to right, ${color.borderLightest} 1px, transparent 1px);
  background-size: 100% 25%, 100% 25%;
`;

export const BurndownYAxis = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  bottom: 40px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BurndownXAxis = styled.div`
  position: absolute;
  bottom: 0;
  left: 50px;
  right: 40px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

export const BurndownLabel = styled.div`
  ${font.size(11)}
  color: ${color.textMedium};
  ${props => props.top && `position: absolute; top: ${props.top}; transform: translateY(-50%);`}
`;

export const BurndownLine = styled.polyline`
  position: absolute;
  top: 20px;
  left: 50px;
  width: calc(100% - 90px);
  height: calc(100% - 60px);
  fill: none;
  stroke: #0052CC;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
`;

export const BurndownIdealLine = styled.polyline`
  position: absolute;
  top: 20px;
  left: 50px;
  width: calc(100% - 90px);
  height: calc(100% - 60px);
  fill: none;
  stroke: #DFE1E6;
  stroke-width: 2;
  stroke-dasharray: 4 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
`;

export const BurndownPoint = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
  border: 2px solid #0052CC;
  left: ${props => props.left};
  top: ${props => props.top};
  transform: translate(-50%, -50%);
  transition: all 0.2s;

  &:hover {
    transform: translate(-50%, -50%) scale(1.5);
    box-shadow: 0 2px 8px rgba(0, 82, 204, 0.4);
  }
`;

// Trend Indicator
export const TrendIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  ${font.size(11)}
  color: ${props => (props.positive ? color.success : '#DE350B')};
`;

export const TrendIcon = styled.span`
  ${font.size(12)}
  ${font.bold}
`;

export const TrendValue = styled.span`
  ${font.medium}
`;

// Completion Rate
export const CompletionRate = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CompletionRateLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  ${font.size(13)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const CompletionRateBar = styled.div`
  height: 24px;
  background: ${color.backgroundLight};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

export const CompletionRateFill = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  background: ${props => props.color};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
  color: white;
  ${font.size(11)}
  ${font.bold}
  transition: width 0.5s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2));
  }
`;

// Metric Grid
export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const MetricCard = styled.div`
  padding: 16px;
  background: ${color.backgroundLightest};
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
  transition: all 0.2s;

  &:hover {
    border-color: ${color.borderLight};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  }
`;

export const MetricValue = styled.div`
  ${font.size(28)}
  ${font.bold}
  color: ${color.textDarkest};
  margin-bottom: 4px;
`;

export const MetricLabel = styled.div`
  ${font.size(11)}
  ${font.medium}
  color: ${color.textMedium};
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const MetricChange = styled.div`
  ${font.size(12)}
  color: ${props => (props.positive ? color.success : '#DE350B')};
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Tooltip = styled.div`
  position: absolute;
  background: ${color.textDarkest};
  color: white;
  padding: 6px 10px;
  border-radius: 3px;
  ${font.size(12)}
  white-space: nowrap;
  pointer-events: none;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${color.textDarkest};
  }
`;
