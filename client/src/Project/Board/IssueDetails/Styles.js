import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Content = styled.div`
  display: flex;
  padding: 0 30px 60px;
`;

export const Left = styled.div`
  width: 65%;
  padding-right: 50px;
`;

export const Right = styled.div`
  width: 35%;
  padding-top: 5px;
`;

export const TopActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 21px 18px 0;
`;

export const TopActionsRight = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 4px;
  }
`;

export const SectionTitle = styled.div`
  margin: 24px 0 5px;
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12.5)}
  ${font.bold}
`;

export const TabSwitcher = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const Tab = styled.button`
  padding: 6px 12px;
  border-radius: 3px;
  border: 1px solid ${props => (props.active ? color.borderLightest : 'transparent')};
  background: ${props => (props.active ? color.backgroundLightest : 'transparent')};
  color: ${props => (props.active ? color.textDarkest : color.textMedium)};
  ${font.size(13)}
  ${font.medium}
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background: ${color.backgroundLightest};
    color: ${color.textDarkest};
  }
`;
