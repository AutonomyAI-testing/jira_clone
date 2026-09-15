import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
  padding: 16px;
  background: ${color.backgroundLightest};
  border-radius: 4px;
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 80px;
  padding: 8px 12px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(9, 30, 66, 0.1);
`;

export const StatLabel = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
  ${font.regular}
  text-transform: uppercase;
`;

export const StatValue = styled.div`
  ${font.size(20)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  max-width: 300px;
`;

export const ProgressBar = styled.div`
  flex: 1;
  height: 6px;
  background: ${color.backgroundMedium};
  border-radius: 3px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.completionPercent}%;
    background: ${color.success};
    border-radius: 3px;
    transition: width 0.3s ease;
  }
`;
