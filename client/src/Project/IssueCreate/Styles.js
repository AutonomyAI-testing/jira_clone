import styled, { keyframes } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const FormElement = styled(Form.Element)`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalHeader = styled.div`
  padding: 30px 40px 20px;
  border-bottom: 1px solid ${color.borderLightest};
  background: ${color.backgroundLightest};
  animation: ${slideIn} 0.4s ease-out;
`;

export const FormHeading = styled.h2`
  margin: 0;
  padding: 0;
  ${font.size(24)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const FormSubheading = styled.p`
  margin: 8px 0 0;
  padding: 0;
  ${font.size(14)}
  color: ${color.textMedium};
`;

export const ModalBody = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 30px 40px;
  overflow-y: auto;
  ${mixin.customScrollbar()}
  animation: ${fadeIn} 0.5s ease-out 0.1s both;
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: ${color.backgroundLightest};
  border-radius: 6px;
  border: 1px solid ${color.borderLightest};
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${color.borderLight};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
`;

export const GroupTitle = styled.h3`
  margin: 0 0 10px;
  padding: 0;
  ${font.size(13)}
  ${font.bold}
  color: ${color.textMedium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  ${props => props.withBottomMargin && `margin-bottom: 5px;`}
`;

export const SelectItemLabel = styled.div`
  padding: 0 3px 0 6px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-top: 1px solid ${color.borderLightest};
  background: ${color.backgroundLightest};
  animation: ${slideIn} 0.4s ease-out;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

export const ActionButton = styled(Button)`
  min-width: 100px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
`;
