import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.backgroundLightest};
  padding: 40px 24px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 520px;
  width: 100%;
`;

export const MascotWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-bottom: 32px;
`;

export const MascotImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const Heading = styled.h1`
  ${font.black}
  font-size: 42px;
  line-height: 1.1;
  color: ${color.danger};
  margin: 0 0 16px;
`;

export const Subtitle = styled.p`
  ${font.regular}
  font-size: 17px;
  line-height: 1.6;
  color: ${color.textMedium};
  margin: 0 0 32px;
  max-width: 400px;
`;

export const StyledButton = styled(Button)`
  height: 40px;
  padding: 0 28px;
  font-size: 15px;
`;
