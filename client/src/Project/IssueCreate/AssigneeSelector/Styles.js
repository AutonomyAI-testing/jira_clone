import styled, { css, keyframes } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Avatar } from 'shared/components';

export const Container = styled.div`
  margin-top: 24px;
`;

export const SectionLabel = styled.div`
  margin-bottom: 12px;
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12.5)}
  ${font.bold}
`;

export const AvatarsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 4px 0;
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  position: relative;
  animation: ${scaleIn} 0.3s ease-out;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  ${props => props.isSelected && css`
    &::before {
      content: '';
      position: absolute;
      top: -4px;
      left: 50%;
      transform: translateX(-50%);
      width: 10px;
      height: 10px;
      background: ${color.primary};
      border-radius: 50%;
      border: 2px solid white;
      z-index: 10;
    }
  `}
`;

export const CircularProgress = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.backgroundLight};
  padding: 4px;
  
  ${props => {
    const { workloadPercentage, workloadStatus } = props;
    
    if (workloadPercentage === 0) {
      return '';
    }
    
    // Define color based on workload status
    let strokeColor = color.success; // free/light - green
    if (workloadStatus === 'moderate') {
      strokeColor = color.warning; // moderate - orange
    } else if (workloadStatus === 'busy') {
      strokeColor = color.danger; // busy - red
    }
    
    const angle = (workloadPercentage / 100) * 360;
    
    return css`
      background: conic-gradient(
        ${strokeColor} 0deg,
        ${strokeColor} ${angle}deg,
        ${color.backgroundLight} ${angle}deg
      );
    `;
  }}
`;

export const Circle = styled.div`
  position: absolute;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  border-radius: 50%;
  background: white;
`;

export const StyledAvatar = styled(Avatar)`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
`;

export const UserName = styled.div`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textDark};
  text-align: center;
  max-width: 70px;
  ${mixin.truncateText}
`;

export const WorkloadBadge = styled.div`
  position: absolute;
  bottom: 35px;
  background: ${color.success};
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  ${font.size(10)}
  ${font.bold}
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

export const TooltipContent = styled.div`
  padding: 12px;
  ${font.size(13)}
  color: ${color.textDarkest};
  line-height: 1.5;
  
  strong {
    ${font.bold}
    color: ${color.textDarkest};
  }
`;
