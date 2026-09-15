import styled from 'styled-components';
import { color, font, mixin } from 'shared/utils/styles';

// Map toast types to their corresponding color theme
const getToastColor = type => {
  const typeColorMap = {
    success: color.success,
    danger: color.danger,
    warning: color.warning,
    info: color.primary,
  };
  return typeColorMap[type] || color.primary;
};

export const Header = styled.div`
  margin-bottom: 40px;
  padding: 40px 0;
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;

export const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid ${color.primary};
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  margin: 0 0 12px 0;
  ${font.black}
  ${font.size(28)}
  color: red;
`;

export const PageDescription = styled.p`
  margin: 0;
  ${font.regular}
  ${font.size(13)}
  color: ${color.textMedium};
  max-width: 600px;
  line-height: 1.5;
`;

export const Section = styled.div`
  margin-bottom: 50px;
  padding: 0 0 40px 0;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 20px 0;
  ${font.bold}
  ${font.size(20)}
  color: ${color.textDarkest};
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 24px;
    background: ${color.primary};
    border-radius: 2px;
  }
`;

export const ToastVariantsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const ToastVariantCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ToastPreview = styled.div`
  position: relative;
  width: 100%;
  padding: 15px 20px;
  border-radius: 3px;
  color: #fff;
  background: ${props => getToastColor(props.type)};
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;
  border: 2px solid transparent;

  &:hover {
    opacity: 0.9;
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const PreviewCloseIcon = styled.div`
  position: absolute;
  top: 13px;
  right: 14px;
  font-size: 18px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const PreviewTitle = styled.div`
  padding-right: 22px;
  ${font.size(14)}
  ${font.bold}
`;

export const PreviewMessage = styled.div`
  padding: 6px 10px 0 0;
  white-space: pre-wrap;
  ${font.size(13)}
  ${font.regular}
`;

export const TriggerButton = styled.button`
  padding: 8px 16px;
  background: ${color.primary};
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  ${font.size(13)}
  ${font.medium}
  transition: all 0.15s;

  &:hover {
    background: ${props => mixin.darken(color.primary, 0.1)};
  }

  &:active {
    opacity: 0.9;
  }
`;

export const BuilderCard = styled.div`
  background: #fff;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const BuilderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 999px) {
    grid-template-columns: 1fr;
  }
`;

export const BuilderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  ${font.size(13)}
  ${font.medium}
  color: ${color.textDarkest};
  display: block;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  font-size: 13px;
  font-family: 'CircularStdBook', sans-serif;
  transition: border 0.15s;

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    box-shadow: 0 0 0 2px ${mixin.rgba(color.primary, 0.1)};
  }

  &::placeholder {
    color: ${color.textLight};
  }
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  font-size: 13px;
  font-family: 'CircularStdBook', sans-serif;
  background: #fff;
  cursor: pointer;
  transition: border 0.15s;

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    box-shadow: 0 0 0 2px ${mixin.rgba(color.primary, 0.1)};
  }
`;

export const Textarea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  font-size: 13px;
  font-family: 'CircularStdBook', sans-serif;
  resize: vertical;
  min-height: 80px;
  transition: border 0.15s;

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    box-shadow: 0 0 0 2px ${mixin.rgba(color.primary, 0.1)};
  }

  &::placeholder {
    color: ${color.textLight};
  }
`;

export const BuilderActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 999px) {
    grid-template-columns: 1fr;
  }
`;

export const ShowToastButton = styled(TriggerButton)`
  background: ${color.success};
  padding: 10px 20px;
  ${font.size(14)}

  &:hover {
    background: ${props => mixin.darken(color.success, 0.1)};
  }
`;

export const ResetButton = styled.button`
  padding: 10px 20px;
  background: ${color.backgroundMedium};
  color: ${color.textDarkest};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  ${font.size(14)}
  ${font.medium}
  transition: all 0.15s;

  &:hover {
    background: ${props => mixin.darken(color.backgroundMedium, 0.1)};
  }
`;

export const StaticPreviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 999px) {
    grid-template-columns: 1fr;
  }
`;

export const StaticToastBox = styled.div`
  background: #fff;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const ToastTypeLabel = styled.div`
  ${font.size(12)}
  ${font.bold}
  color: ${color.textMedium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => getToastColor(props.type)};
  }
`;

export const StaticToast = styled.div`
  position: relative;
  width: 100%;
  padding: 15px 20px;
  border-radius: 3px;
  color: #fff;
  background: ${props => getToastColor(props.type)};
  ${mixin.clearfix}
`;

export const StaticTitle = styled.div`
  padding-right: 22px;
  ${font.size(15)}
  ${font.medium}
`;

export const StaticMessage = styled.div`
  padding: 8px 10px 0 0;
  white-space: pre-wrap;
  ${font.size(14)}
  ${font.medium}
`;

export const CodeExample = styled.pre`
  background: ${color.backgroundMedium};
  padding: 12px;
  border-radius: 3px;
  overflow-x: auto;
  font-size: 12px;
  margin-top: 12px;
  color: ${color.textDarkest};
  font-family: 'Courier New', monospace;
`;
