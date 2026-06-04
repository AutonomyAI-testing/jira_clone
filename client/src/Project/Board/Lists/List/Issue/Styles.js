import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font, mixin, issueTypeColors } from 'shared/utils/styles';
import { Avatar } from 'shared/components';

export const IssueLink = styled(Link)`
  display: block;
  margin-bottom: 8px;
  text-decoration: none;
`;

export const Issue = styled.div`
  padding: 12px;
  border-radius: 4px;
  background: #fff;
  border-top: 3px solid
    ${props => {
      const typeColorMap = {
        task: issueTypeColors.task,
        bug: issueTypeColors.bug,
        story: issueTypeColors.story,
      };
      return typeColorMap[props.issueType] || color.borderLightest;
    }};
  box-shadow: 0 1px 2px rgba(9, 30, 66, 0.13);
  transition: all 0.15s;
  ${mixin.clickable}

  &:hover {
    box-shadow: 0 4px 12px rgba(9, 30, 66, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 1100px) {
    padding: 10px 8px;
  }

  ${props =>
    props.isBeingDragged &&
    css`
      transform: rotate(3deg) scale(1.02);
      box-shadow: 5px 10px 30px rgba(9, 30, 66, 0.25);
      opacity: 0.95;
    `}
`;

export const Title = styled.p`
  padding-bottom: 10px;
  margin: 0;
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
  line-height: 1.4;

  @media (max-width: 1100px) {
    ${font.size(13.5)}
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  > div:first-child {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const Assignees = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: -2px;
`;

export const AssigneeAvatar = styled(Avatar)`
  margin-left: -8px;
  box-shadow: 0 0 0 2px #fff;
  transition: transform 0.1s;

  &:hover {
    transform: translateY(-2px);
    z-index: 1;
  }
`;
