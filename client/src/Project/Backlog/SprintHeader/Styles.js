import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CollapseIcon = styled.div`
  ${mixin.clickable}
  display: flex;
  align-items: center;
  transition: transform 0.1s;
  
  ${props =>
    props.isCollapsed &&
    `
    transform: rotate(-90deg);
  `}
`;

export const SprintInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SprintName = styled.div`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const StatusBadge = styled.div`
  padding: 2px 8px;
  border-radius: 3px;
  background: ${props => props.color};
  color: white;
  ${font.size(11)}
  ${font.bold}
  text-transform: uppercase;
`;

export const IssueCount = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MenuButton = styled.button`
  ${mixin.clickable}
  border: none;
  background: none;
  padding: 4px 8px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  
  &:hover {
    background: ${color.backgroundMedium};
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 4px;
  background: white;
  border-radius: 4px;
  ${mixin.boxShadowDropdown}
  min-width: 180px;
  z-index: 100;
`;

export const DropdownItem = styled.div`
  padding: 10px 16px;
  ${font.size(14)}
  color: ${color.textDark};
  ${mixin.clickable}
  
  &:hover {
    background: ${color.backgroundLight};
  }

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  &:last-child {
    border-radius: 0 0 4px 4px;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  height: 6px;
  margin: 12px 20px 8px;
  border-radius: 3px;
  overflow: hidden;
`;

export const ProgressBarSegment = styled.div`
  width: ${props => props.width}%;
  background: ${props => props.color};
  transition: width 0.3s;
`;

export const ProgressLabel = styled.div`
  padding: 0 20px 12px;
  ${font.size(12)}
  color: ${color.textMedium};
`;
