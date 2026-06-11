import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  min-height: 400px;
  width: 25%;
  border-radius: 3px;
  background: ${color.backgroundLightest};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 10px 17px;
`;

export const Title = styled.div`
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12.5)};
  ${mixin.truncateText}
  flex: 1;
`;

export const IssuesCount = styled.span`
  text-transform: lowercase;
  ${font.size(13)};
`;

export const Issues = styled.div`
  height: 100%;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
`;

export const SortDropdown = styled.div`
  position: relative;
  margin-left: 8px;
`;

export const SortButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  ${mixin.clickable}
  cursor: pointer;
  color: ${color.textMedium};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.1s;

  &:hover {
    color: ${color.textDarkest};
  }
`;

export const SortOption = styled.div`
  padding: 8px 12px;
  background: #fff;
  border: 1px solid ${color.borderLightest};
  ${font.size(12)}
  color: ${color.textMedium};
  ${mixin.clickable}
  cursor: pointer;
  white-space: nowrap;
  border-radius: 3px;
  margin-bottom: 4px;

  &:hover {
    background: ${color.backgroundLight};
    color: ${color.textDarkest};
  }

  ${props =>
    props.isActive &&
    `
    background: ${color.primary};
    color: #fff;
    border-color: ${color.primary};
  `}
`;
