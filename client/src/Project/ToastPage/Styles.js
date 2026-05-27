import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const PageTitle = styled.h1`
  ${font.size(24)}
  ${font.bold}
  color: #E13C3C;
  margin: 15px 0 5px;
`;

export const PageSubtitle = styled.p`
  ${font.size(15)}
  color: ${color.textMedium};
  margin-bottom: 30px;
`;

export const ContentGrid = styled.div`
  display: flex;
  gap: 60px;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const MascotSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
`;

export const MascotLabel = styled.div`
  margin-top: 16px;
  ${font.size(13)}
  ${font.medium}
  color: ${color.textMedium};
  text-align: center;
`;

export const ToastGrid = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ToastCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  border-radius: 6px;
  background: ${color.backgroundLightest};
  border: 1px solid ${color.borderLightest};
  ${mixin.boxShadowMedium}
`;

export const ToastCardInfo = styled.div`
  flex: 1;
`;

export const ToastCardTitle = styled.div`
  ${font.size(15)}
  ${font.bold}
  color: ${color.textDarkest};
  margin-bottom: 4px;
`;

export const ToastCardDesc = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
`;

export const ToastCardButton = styled.div`
  margin-left: 20px;
`;
