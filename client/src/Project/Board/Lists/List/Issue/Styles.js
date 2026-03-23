import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Avatar } from 'shared/components';

export const IssueLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
`;

export const Issue = styled.div`
  position: relative;
  padding: 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: all 0.2s;
  ${props => !props.isEditing && mixin.clickable}
  @media (max-width: 1100px) {
    padding: 10px 8px;
  }
  &:hover {
    background: ${props => props.isEditing ? '#fff' : color.backgroundLight};
    ${props => props.isEditing && css`
      box-shadow: 0px 2px 8px 0px rgba(9, 30, 66, 0.3);
    `}
  }
  ${props =>
    props.isBeingDragged &&
    css`
      transform: rotate(3deg);
      box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
    `}
  ${props =>
    props.isEditing &&
    css`
      box-shadow: 0px 2px 8px 0px rgba(9, 30, 66, 0.3);
      border: 2px solid ${color.borderInputFocus};
      padding: 8px;
      cursor: default;
    `}
`;

export const Title = styled.p`
  padding-bottom: 11px;
  ${font.size(15)}
  @media (max-width: 1100px) {
    ${font.size(14.5)}
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Assignees = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: 2px;
`;

export const AssigneeAvatar = styled(Avatar)`
  margin-left: -2px;
  box-shadow: 0 0 0 2px #fff;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid ${color.borderInputFocus};
  border-radius: 3px;
  background: #fff;
  ${font.size(15)}
  ${font.regular}
  outline: none;
  &::placeholder {
    color: ${color.textMedium};
  }
`;



export const FieldsRow = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

export const FieldLabel = styled.div`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textMedium};
  margin-bottom: 4px;
  text-transform: uppercase;
`;

export const SelectWrapper = styled.div`
  position: relative;
  min-width: 120px;
  > div {
    font-size: 13px;
  }
  span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
`;

export const AssigneesWrapper = styled.div`
  position: relative;
  margin-top: 4px;
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  justify-content: flex-end;
`;
