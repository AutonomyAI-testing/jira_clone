import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 180px);
  background: ${color.backgroundLightest};
  overflow: hidden;
`;

export const ControlsBar = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  pointer-events: none;
`;

export const ZoomControls = styled.div`
  display: flex;
  gap: 8px;
  background: #fff;
  border-radius: 6px;
  padding: 8px;
  ${mixin.boxShadowMedium}
  pointer-events: all;
`;

export const ZoomButton = styled.button`
  ${font.size(14)}
  ${font.medium}
  padding: 8px 16px;
  border-radius: 4px;
  background: ${color.backgroundLight};
  color: ${color.textDark};
  border: none;
  ${mixin.clickable}
  transition: background 0.1s;

  &:hover {
    background: ${color.backgroundMedium};
  }
`;

export const LegendContainer = styled.div`
  display: flex;
  gap: 16px;
  background: #fff;
  border-radius: 6px;
  padding: 12px 16px;
  ${mixin.boxShadowMedium}
  pointer-events: all;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LegendDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

export const LegendLabel = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
`;

export const GraphContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

export const GraphSvg = styled.svg`
  width: 100%;
  height: 100%;
  transform-origin: 0 0;
`;

export const NodeCircle = styled.circle`
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));
  transition: r 0.2s;
  
  &:hover {
    r: 42;
  }
`;

export const NodeLabel = styled.text`
  ${props => font.size(props.fontSize || 13)}
  ${font.medium}
  fill: ${color.textDarkest};
  text-anchor: middle;
  pointer-events: none;
  opacity: ${props => props.opacity || 1};
`;

export const TaskNode = styled.rect`
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.12));
  transition: all 0.2s;
  
  &:hover {
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.2));
  }
`;

export const TaskNodeTitle = styled.div`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TaskNodeMeta = styled.div`
  ${font.size(10)}
  color: ${color.textMedium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EdgeLine = styled.line`
  pointer-events: none;
`;

export const EdgeLabel = styled.text`
  ${font.size(11)}
  ${font.medium}
  fill: ${props => props.color || '#E13C3C'};
  text-anchor: middle;
  pointer-events: none;
  background: #fff;
`;

export const EditPanel = styled.div`
  position: absolute;
  top: 80px;
  right: 20px;
  width: 400px;
  max-height: calc(100vh - 220px);
  background: #fff;
  border-radius: 8px;
  ${mixin.boxShadowDropdown}
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 20;
`;

export const EditPanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid ${color.borderLightest};
  background: ${color.backgroundLightest};
`;

export const EditPanelTitle = styled.div`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const CloseButton = styled.button`
  ${font.size(28)}
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: transparent;
  color: ${color.textMedium};
  border: none;
  ${mixin.clickable}
  transition: background 0.1s, color 0.1s;
  line-height: 1;
  padding: 0;

  &:hover {
    background: ${color.backgroundMedium};
    color: ${color.textDark};
  }
`;

export const EditContent = styled.div`
  padding: 20px;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const EditLabel = styled.div`
  ${font.medium}
  ${font.size(12.5)}
  color: ${color.textMedium};
  margin-bottom: 6px;
`;

export const EditInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  ${font.size(14)}
  border-radius: 3px;
  border: 1px solid ${color.borderLightest};
  color: ${color.textDarkest};
  background: #fff;
  transition: border 0.1s;

  &:focus {
    outline: none;
    border: 1px solid ${color.borderInputFocus};
  }

  &::placeholder {
    color: ${color.textLight};
  }
`;

export const EditActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const SaveButton = styled.button`
  ${font.size(14)}
  ${font.medium}
  padding: 8px 16px;
  border-radius: 3px;
  background: ${color.primary};
  color: #fff;
  border: none;
  ${mixin.clickable}
  transition: background 0.1s;

  &:hover {
    background: ${mixin.darken(color.primary, 0.08)};
  }
`;

export const CancelButton = styled.button`
  ${font.size(14)}
  ${font.medium}
  padding: 8px 16px;
  border-radius: 3px;
  background: ${color.backgroundMedium};
  color: ${color.textDark};
  border: none;
  ${mixin.clickable}
  transition: background 0.1s;

  &:hover {
    background: ${mixin.darken(color.backgroundMedium, 0.05)};
  }
`;
