import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const StatisticsContainer = styled.div`
  background-color: ${color.backgroundLightest};
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const StatisticsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${color.borderLightest};
  background-color: #fff;
`;

export const StatisticsTitle = styled.h3`
  margin: 0;
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const StatisticsToggle = styled.button`
  background: none;
  border: none;
  color: ${color.textMedium};
  ${font.size(18)}
  ${mixin.clickable}
  padding: 0;
  line-height: 1;
  cursor: pointer;

  &:hover {
    color: ${color.textDark};
  }
`;

export const StatisticsContent = styled.div`
  padding: 16px;
  display: ${props => (props.isExpanded ? 'grid' : 'none')};
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const MetricsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MetricsSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: #fff;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  min-height: 60px;
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: ${props => props.color || color.backgroundLight};
  color: ${props => {
    switch (props.color) {
      case color.success:
        return '#fff';
      case color.primary:
        return '#fff';
      default:
        return color.textMedium;
    }
  }};
  flex-shrink: 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const CardLabel = styled.div`
  ${font.size(11)}
  color: ${color.textMedium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CardValue = styled.div`
  ${font.size(18)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const ChartsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const ChartContainer = styled.div`
  padding: 0;
`;

export const ChartTitle = styled.h4`
  margin: 0 0 12px 0;
  ${font.size(13)}
  ${font.medium}
  color: ${color.textDark};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const BarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  min-height: 30px;
`;

export const BarLabel = styled.div`
  min-width: 120px;
  ${font.size(12)}
  color: ${color.textDark};
`;

export const BarTrack = styled.div`
  flex: 1;
  height: 20px;
  background-color: ${color.backgroundLight};
  border-radius: 3px;
  overflow: hidden;
  min-width: 100px;
`;

export const BarFill = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  background-color: ${props => props.backgroundColor};
  transition: width 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 4px;
`;

export const BarValue = styled.div`
  min-width: 70px;
  text-align: right;
  ${font.size(12)}
  color: ${color.textMedium};
`;
