import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { InputDebounced, Avatar, Button } from 'shared/components';

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 12px 16px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(9, 30, 66, 0.1);
  flex-wrap: wrap;
  gap: 12px;
`;

export const SearchInput = styled(InputDebounced)`
  margin-right: 0;
  width: 180px;
  flex-shrink: 0;
`;

export const Avatars = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 2px;
  align-items: center;
  margin: 0;
  padding: 0 8px;
  border-left: 1px solid ${color.borderLightest};
  border-right: 1px solid ${color.borderLightest};
`;

export const AvatarIsActiveBorder = styled.div`
  display: inline-flex;
  border-radius: 50%;
  transition: transform 0.1s;
  ${mixin.clickable};
  ${props => props.isActive && `box-shadow: 0 0 0 3px ${color.primary}`}
  &:hover {
    transform: translateY(-3px);
  }
`;

export const StyledAvatar = styled(Avatar)`
  box-shadow: 0 0 0 2px #fff;
`;

export const StyledButton = styled(Button)`
  padding: 6px 12px;
  ${font.size(13)}
  ${props =>
    props.isActive &&
    `
    background: ${color.backgroundLightPrimary};
    color: ${color.primary};
  `}
`;

export const ClearAll = styled.div`
  height: 32px;
  line-height: 32px;
  padding: 0 8px;
  color: ${color.textDark};
  ${font.size(13)}
  ${mixin.clickable}
  &:hover {
    color: ${color.primary};
    text-decoration: underline;
  }
`;
