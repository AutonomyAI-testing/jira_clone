import styled, { css } from 'styled-components';

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
