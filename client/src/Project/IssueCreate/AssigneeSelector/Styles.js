import styled, { css, keyframes } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const SectionHeading = styled.div`
  margin-bottom: 16px;
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12.5)}
  ${font.bold}
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 10px 0;
  ${mixin.customScrollbar({ width: 6 })}
`;

export const UserItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 72px;
  cursor: pointer;
  ${mixin.clickable}
  transition: transform 0.2s ease;
  animation: ${slideUp} 0.4s ease-out backwards;
  animation-delay: ${props => props.index ? props.index * 0.05 : 0}s;

  &:hover {
    transform: translateY(-4px);
  }

  ${props => props.isSelected && css`
    transform: scale(1.05);
  `}
`;

export const AvatarWrapper = styled.div`
  position: relative;
  margin-bottom: 8px;
`;

export const CapacityRing = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => {
    const percentage = props.capacityPercentage;
    if (percentage === 0) {
      return color.backgroundLight;
    }
    if (percentage < 33) {
      return `conic-gradient(${color.success} ${percentage * 3.6}deg, ${color.backgroundLight} 0deg)`;
    }
    if (percentage < 66) {
      return `conic-gradient(${color.warning} ${percentage * 3.6}deg, ${color.backgroundLight} 0deg)`;
    }
    return `conic-gradient(${color.danger} ${percentage * 3.6}deg, ${color.backgroundLight} 0deg)`;
  }};
  padding: 4px;
  transition: all 0.3s ease;

  ${props => props.isSelected && css`
    background: ${color.primary};
    box-shadow: 0 0 0 3px ${mixin.rgba(color.primary, 0.3)};
  `}

  &::before {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fff;
  }
`;

export const UserName = styled.div`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textDark};
  text-align: center;
  max-width: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
`;

export const CapacityLabel = styled.div`
  ${font.size(11)}
  color: ${color.textLight};
  text-align: center;
`;

export const TooltipContent = styled.div`
  padding: 16px;
  ${font.size(13)}
  color: ${color.textDark};
  animation: ${fadeIn} 0.2s ease-out;
`;

export const TooltipTitle = styled.div`
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 8px;
`;

export const TaskList = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style: disc;
`;

export const TaskItem = styled.li`
  color: ${color.textMedium};
  margin-bottom: 4px;
  line-height: 1.4;
  animation: ${slideUp} 0.3s ease-out backwards;
  animation-delay: ${props => props.index ? props.index * 0.05 : 0}s;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const NoTasksMessage = styled.div`
  color: ${color.textLight};
  font-style: italic;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TimeEstimate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  width: 100%;
  animation: ${slideUp} 0.3s ease-out;
`;

export const TimeBar = styled.div`
  flex: 1;
  height: 4px;
  background: ${color.backgroundMedium};
  border-radius: 2px;
  overflow: hidden;
`;

export const TimeBarProgress = styled.div`
  height: 100%;
  background: ${color.primary};
  width: ${props => props.progress}%;
  border-radius: 2px;
  transition: width 0.4s ease;
  animation: ${fadeIn} 0.4s ease-out;
`;

export const TimeInfo = styled.div`
  ${font.size(10)}
  ${font.medium}
  color: ${color.textMedium};
  white-space: nowrap;
  animation: ${fadeIn} 0.3s ease-out;
`;
