import styled from 'styled-components';
import { color, font, mixin } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const Container = styled.div`
  background: ${color.backgroundLightest};
  padding: 40px 48px;
  min-height: 100vh;
`;

export const Header = styled.div`
  margin-bottom: 48px;
  text-align: center;
`;

export const HeaderTitle = styled.h1`
  margin: 0 0 12px 0;
  ${font.size(32)}
  ${font.bold}
  color: #E13C3C;
`;

export const HeaderSubtitle = styled.p`
  margin: 0;
  ${font.size(16)}
  ${font.regular}
  color: ${color.textMedium};
`;

export const VariantsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  border: 1px solid ${color.borderLight};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

export const ColorBadge = styled.div`
  display: inline-block;
  background: ${props => props.color};
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  ${font.size(12)}
  ${font.medium}
  margin-bottom: 16px;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  ${font.size(18)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const CardDescription = styled.p`
  margin: 0 0 16px 0;
  ${font.size(13)}
  ${font.regular}
  color: ${color.textMedium};
  line-height: 1.5;
`;

export const ExampleBox = styled.div`
  background: ${props => props.color}11;
  border: 1px solid ${props => props.color}33;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ExampleText = styled.p`
  margin: 0;
  ${font.size(13)}
  ${font.regular}
  color: ${color.textDark};
  line-height: 1.4;

  strong {
    ${font.bold}
  }
`;

export const TriggerButton = styled(Button)`
  width: 100%;
`;

export const CustomSection = styled.div`
  background: white;
  border: 1px solid ${color.borderLight};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const CustomSectionTitle = styled.h2`
  margin: 0 0 20px 0;
  ${font.size(20)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-end;
`;

export const FormGroup = styled.div`
  flex: 1;
  min-width: 180px;
`;

export const SelectInput = styled.select`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  background: white;
  color: ${color.textDark};
  ${font.size(14)}
  ${font.regular}
  cursor: pointer;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${color.borderLight};
  }

  &:focus {
    outline: none;
    border-color: ${color.primary};
    box-shadow: 0 0 0 2px ${color.primary}1a;
  }
`;

export const FormActions = styled.div`
  flex-shrink: 0;
  min-width: 140px;
`;
