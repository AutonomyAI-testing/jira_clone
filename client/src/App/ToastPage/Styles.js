import styled from 'styled-components';
import { color, font, mixin } from 'shared/utils/styles';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${color.backgroundLightest};
  padding: 40px 60px;
  overflow-y: auto;
`;

export const Header = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  ${font.size(32)}
  ${font.bold}
  color: ${color.textDarkest};
  margin: 0 0 12px 0;
`;

export const Description = styled.p`
  ${font.size(16)}
  color: ${color.textMedium};
  margin: 0;
`;

export const DemoSection = styled.div`
  margin-bottom: 50px;
`;

export const SectionTitle = styled.h2`
  ${font.size(20)}
  ${font.medium}
  color: ${color.textDarkest};
  margin: 0 0 24px 0;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

export const ToastTypeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
  transition: all 0.15s;
  ${mixin.hardwareAccelerate}

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const CardTitle = styled.div`
  ${font.size(15)}
  ${font.medium}
  color: ${color.textDarkest};
`;

export const CardDescription = styled.div`
  ${font.size(13)}
  color: ${color.textLight};
`;
