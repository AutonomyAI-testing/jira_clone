import styled from 'styled-components';
import { color, font, mixin } from 'shared/utils/styles';
import { Input } from 'shared/components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const PageTitle = styled.h1`
  ${font.size(24)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 8px;
`;

export const PageSubtitle = styled.p`
  ${font.size(14)}
  color: ${color.textMedium};
  margin-bottom: 30px;
`;

export const Section = styled.div`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  ${font.size(18)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 20px;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 8px;
  display: block;
`;

export const FormInput = styled(Input)`
  width: 100%;
`;

export const FormSelect = styled.select`
  padding: 8px 12px;
  ${font.size(14)}
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  background-color: white;
  color: ${color.textDarkest};
  cursor: pointer;
  transition: border-color 0.1s;

  &:hover {
    border-color: ${color.borderLight};
  }

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    box-shadow: 0 0 0 2px ${color.backgroundLightPrimary};
  }
`;

export const FormTextarea = styled.textarea`
  padding: 8px 12px;
  ${font.size(14)}
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  transition: border-color 0.1s;

  &:hover {
    border-color: ${color.borderLight};
  }

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    box-shadow: 0 0 0 2px ${color.backgroundLightPrimary};
  }
`;

export const FormButton = styled.button`
  align-self: flex-start;
`;

export const ReferenceCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ReferenceCard = styled.div`
  width: 300px;
  padding: 16px;
  border-radius: 4px;
  position: relative;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CardClose = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  ${font.size(16)}
  opacity: 0.6;
  transition: opacity 0.1s;

  &:hover {
    opacity: 1;
  }
`;

export const CardTitle = styled.h3`
  ${font.size(16)}
  ${font.bold}
  margin: 0 0 8px 0;
  margin-top: 8px;
`;

export const CardMessage = styled.p`
  ${font.size(14)}
  margin: 0;
  opacity: 0.9;
`;
