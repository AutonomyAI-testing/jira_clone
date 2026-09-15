import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const ShortcutsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  background: transparent;
  border: none;
  color: ${color.textMedium};
  ${font.size(18)}
  ${mixin.clickable}
  border-radius: 3px;
  transition: all 0.1s;
  
  &:hover {
    background: ${color.backgroundMedium};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(9, 30, 66, 0.54);
`;

export const ShortcutsModal = styled.div`
  position: relative;
  max-width: 500px;
  width: 90%;
  background: white;
  border-radius: 3px;
  box-shadow: 0 20px 32px -8px rgba(9, 30, 66, 0.25);
  padding: 24px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  h3 {
    ${font.size(20)}
    ${font.medium}
    color: ${color.textDark};
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${color.textMedium};
  ${font.size(28)}
  line-height: 1;
  ${mixin.clickable}
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  
  &:hover {
    background: ${color.backgroundMedium};
    color: ${color.textDark};
  }
`;

export const ShortcutsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ShortcutItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: ${color.backgroundLight};
  border-radius: 3px;
`;

export const ShortcutKey = styled.kbd`
  display: inline-block;
  padding: 4px 8px;
  background: white;
  border: 1px solid ${color.borderLight};
  border-radius: 3px;
  ${font.size(13)}
  ${font.medium}
  color: ${color.textDark};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  text-align: center;
`;

export const ShortcutDescription = styled.span`
  ${font.size(14)}
  color: ${color.textMedium};
  flex: 1;
  margin-left: 16px;
`;
