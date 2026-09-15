import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { InputDebounced, Avatar, Button } from 'shared/components';

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const FilterBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

export const SearchInput = styled(InputDebounced)`
  margin-right: 6px;
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
  margin-left: 0;
`;

export const AdvancedFiltersToggle = styled(Button)`
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

export const AdvancedFiltersContainer = styled.div`
  background-color: ${color.backgroundLightest};
  border: 1px solid ${color.borderLightest};
  border-top: none;
  padding: 16px 0;
`;

export const AdvancedFiltersContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 0 16px;
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FilterLabel = styled.label`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textDark};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const DateRangeContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  > div {
    flex: 1;
  }
`;

export const ClearAdvancedButton = styled.button`
  grid-column: 1 / -1;
  padding: 8px 12px;
  background-color: transparent;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  color: ${color.textDark};
  ${font.size(13)}
  ${mixin.clickable}
  transition: all 0.1s;

  &:hover {
    background-color: ${color.backgroundLight};
    border-color: ${color.borderLight};
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 0 0 0;
  margin-top: 8px;
`;

export const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: ${color.backgroundLight};
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  padding: 4px 8px;
  ${font.size(13)}
  color: ${color.textDark};
`;

export const ChipLabel = styled.span`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ChipClose = styled.button`
  background: none;
  border: none;
  color: ${color.textMedium};
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  display: flex;
  align-items: center;
  line-height: 1;
  ${mixin.clickable}

  &:hover {
    color: ${color.textDark};
  }
`;
