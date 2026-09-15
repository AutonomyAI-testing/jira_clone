import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { InputDebounced, Avatar, Button } from 'shared/components';

export const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const SearchInput = styled(InputDebounced)`
  margin-right: 18px;
  width: 160px;
`;

export const Avatars = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 12px 0 2px;
`;

export const AvatarIsActiveBorder = styled.div`
  display: inline-flex;
  margin-left: -2px;
  border-radius: 50%;
  transition: transform 0.1s;
  ${mixin.clickable};
  ${props => props.isActive && `box-shadow: 0 0 0 4px ${color.primary}`}
  &:hover {
    transform: translateY(-5px);
  }
`;

export const StyledAvatar = styled(Avatar)`
  box-shadow: 0 0 0 2px #fff;
`;

export const StyledButton = styled(Button)`
  margin-left: 6px;
`;

export const ClearAll = styled.div`
  height: 32px;
  line-height: 32px;
  margin-left: 15px;
  padding-left: 12px;
  border-left: 1px solid ${color.borderLightest};
  color: ${color.textDark};
  ${font.size(14.5)}
  ${mixin.clickable}
  &:hover {
    color: ${color.textMedium};
  }
`;

export const ColumnVisibilityContainer = styled.div`
  position: relative;
  margin-left: 6px;
`;

export const ColumnVisibilityPopup = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: #fff;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  ${mixin.boxShadowDropdown}
  z-index: 10;
  min-width: 200px;
  padding: 8px 12px;
`;

export const ColumnLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 4px;
  ${font.size(13)}
  color: ${color.textDark};
  ${mixin.clickable}
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${color.backgroundLightest};
    border-radius: 2px;
  }
`;

export const ColumnCheckbox = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

export const SavedFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
  padding: 0 10px;
`;

export const SavedFilterChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: ${color.backgroundLight};
  border: 1px solid ${color.borderLightest};
  border-radius: 12px;
  ${font.size(12)}
  color: ${color.textMedium};

  span {
    ${mixin.clickable}
    &:hover {
      color: ${color.textDarkest};
    }
  }

  i {
    ${mixin.clickable}
    &:hover {
      color: ${color.danger};
    }
  }
`;

export const SaveFilterButton = styled(Button)`
  margin-left: 6px;
`;
