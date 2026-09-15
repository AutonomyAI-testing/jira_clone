import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import Button from 'shared/components/Button';

// Layout constants
const CONTAINER_PADDING = '24px';
const GRID_COLUMNS = 4;
const GRID_COLUMNS_TABLET = 3;
const GRID_COLUMNS_MOBILE = 2;
const GRID_GAP = '12px';
const GRID_MARGIN_BOTTOM = '20px';

// Typography constants
const TITLE_FONT_SIZE = 20;
const PREVIEW_NAME_SIZE = 16;
const PREVIEW_DESC_SIZE = 13;

// Spacing constants
const ITEM_SPACING = '16px';
const PREVIEW_AVATAR_SIZE = 80;
const GRID_ITEM_BORDER_RADIUS = '8px';
const GRID_ITEM_BORDER_WIDTH = 2;
const GRID_ITEM_HOVER_SCALE = 1.05;
const GRID_ITEM_TRANSITION = '0.15s';
const PREVIEW_PADDING = '16px';
const PREVIEW_MARGIN_TOP = '20px';
const PREVIEW_MARGIN_BOTTOM = '20px';
const ACTIONS_GAP = '8px';
const ACTIONS_MARGIN_TOP = '20px';
const SELECTED_BOX_SHADOW_SIZE = 3;

export const Container = styled.div`
  padding: ${CONTAINER_PADDING};
`;

export const Title = styled.div`
  ${font.bold}
  ${font.size(TITLE_FONT_SIZE)}
  color: ${color.danger};
  margin-bottom: ${CONTAINER_PADDING};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${GRID_COLUMNS}, 1fr);
  gap: ${GRID_GAP};
  margin-bottom: ${GRID_MARGIN_BOTTOM};

  @media (max-width: 1100px) {
    grid-template-columns: repeat(${GRID_COLUMNS_TABLET}, 1fr);
  }

  @media (max-width: 999px) {
    grid-template-columns: repeat(${GRID_COLUMNS_TABLET}, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(${GRID_COLUMNS_MOBILE}, 1fr);
  }
`;

export const GridItem = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border: ${GRID_ITEM_BORDER_WIDTH}px solid transparent;
  border-radius: ${GRID_ITEM_BORDER_RADIUS};
  overflow: hidden;
  cursor: pointer;
  transition: all ${GRID_ITEM_TRANSITION};

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border-color: ${color.primary};
    transform: scale(${GRID_ITEM_HOVER_SCALE});
  }

  ${props =>
    props.isSelected &&
    `
    border-color: ${color.primary};
    box-shadow: 0 0 0 ${SELECTED_BOX_SHADOW_SIZE}px ${color.backgroundLightPrimary};
  `}
`;

export const PreviewPanel = styled.div`
  display: flex;
  align-items: center;
  gap: ${ITEM_SPACING};
  background: ${color.backgroundLightest};
  border-radius: ${GRID_ITEM_BORDER_RADIUS};
  padding: ${PREVIEW_PADDING};
  margin-top: ${PREVIEW_MARGIN_TOP};
  margin-bottom: ${PREVIEW_MARGIN_BOTTOM};
`;

export const PreviewAvatarWrapper = styled.div`
  width: ${PREVIEW_AVATAR_SIZE}px;
  height: ${PREVIEW_AVATAR_SIZE}px;
  border-radius: ${GRID_ITEM_BORDER_RADIUS};
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PreviewInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const PreviewName = styled.div`
  ${font.bold}
  ${font.size(PREVIEW_NAME_SIZE)}
  color: ${color.textDarkest};
  margin-bottom: 4px;
`;

export const PreviewDescription = styled.div`
  ${font.regular}
  ${font.size(PREVIEW_DESC_SIZE)}
  color: ${color.textMedium};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${ACTIONS_GAP};
  margin-top: ${ACTIONS_MARGIN_TOP};
`;

export const ActionButton = styled(Button)`
  margin-left: 0;
`;
