import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.backgroundLightest};
  padding: 20px;
`;

export const Title = styled.h1`
  ${font.size(32)}
  ${font.medium}
  color: ${color.textDarkest};
  margin: 0 0 16px;
  text-align: center;
`;

export const Description = styled.p`
  ${font.size(16)}
  ${font.regular}
  color: ${color.textMedium};
  margin: 0 0 32px;
  text-align: center;
  max-width: 400px;
  line-height: 1.5;
`;

export const LoginButton = styled(Button)`
  min-width: 200px;
  height: 40px;
  ${font.size(15)}
`;
