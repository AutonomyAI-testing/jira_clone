import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 20px;
  padding: 25px 32px 50px;
`;

export const UserCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  ${mixin.boxShadowMedium}
  border: 1px solid ${color.borderLightest};
`;

export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

export const UserInfo = styled.div`
  flex: 1;
`;

export const UserName = styled.div`
  ${font.medium}
  ${font.size(16)}
  color: ${color.textDarkest};
  margin-bottom: 4px;
`;

export const UserEmail = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
`;

export const WorkloadBar = styled.div`
  height: 8px;
  background: ${color.backgroundMedium};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const WorkloadFill = styled.div`
  height: 100%;
  width: ${props => props.percentage}%;
  background: ${props => (props.isOverloaded ? '#E13C3C' : '#0B875B')};
  transition: width 0.3s ease, background 0.3s ease;
`;

export const WorkloadStats = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
  margin-bottom: 20px;
  text-align: right;
`;

export const TasksSection = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const SectionTitle = styled.div`
  ${font.medium}
  ${font.size(13)}
  color: ${color.textMedium};
  text-transform: uppercase;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
`;

export const TaskItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${color.backgroundMedium};
  ${mixin.clickable}
  transition: background 0.1s;
  cursor: pointer;
  border-radius: 3px;
  margin: 0 -4px;
  padding: 10px 4px;
  
  &:hover {
    background: ${color.backgroundLight};
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

export const TaskTitle = styled.div`
  ${font.size(14)}
  color: ${color.textDarkest};
  margin-bottom: 6px;
  line-height: 1.4;
`;

export const TaskMeta = styled.div`
  ${font.size(12)}
  color: ${color.textMedium};
`;

export const InteractionsSection = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const InteractionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
`;

export const InteractionUser = styled.div`
  flex: 1;
  ${font.size(13)}
  color: ${color.textDarkest};
`;

export const InteractionBadge = styled.div`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textMedium};
  background: ${color.backgroundMedium};
  padding: 4px 8px;
  border-radius: 4px;
`;

export const BlockersSection = styled.div`
  margin-bottom: 0;
`;

export const BlockerItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${color.backgroundMedium};
  
  &:last-child {
    border-bottom: none;
  }
`;

export const BlockerTitle = styled.div`
  ${font.size(13)}
  color: ${color.textDarkest};
  margin-bottom: 6px;
`;

export const BlockerDependency = styled.div`
  ${font.size(12)}
  color: #E13C3C;
  font-style: italic;
`;

export const EditTaskItem = styled.div`
  padding: 16px;
  background: ${color.backgroundLightest};
  border: 2px solid ${color.borderLightest};
  border-radius: 4px;
  margin-bottom: 10px;
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
  margin-top: 4px;
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
