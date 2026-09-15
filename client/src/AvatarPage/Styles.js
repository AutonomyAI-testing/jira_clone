import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #f4f5f7;
  padding: 48px 24px;
`;

export const ContentArea = styled.div`
  width: 100%;
  max-width: 820px;
`;

export const PageTitle = styled.h1`
  ${font.size(28)}
  ${font.bold}
  color: #27ae60;
  margin: 0 0 6px 0;
`;

export const PageSubtitle = styled.p`
  ${font.size(15)}
  color: #27ae60;
  margin: 0 0 40px 0;
`;

export const Section = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 28px 32px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export const SectionTitle = styled.h2`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDark};
  margin: 0 0 4px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const SectionDescription = styled.p`
  ${font.size(13)}
  color: ${color.textMedium};
  margin: 8px 0 16px 0;
`;

export const AvatarRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 28px;
  padding: 12px 0 4px;
`;

export const AvatarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const AvatarLabel = styled.span`
  ${font.size(11)}
  color: ${color.textLight};
  text-align: center;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${color.borderLightest};
  margin: 20px 0;
`;

export const SizeTag = styled.span`
  ${font.size(10)}
  color: ${color.textLight};
  background: #f0f1f3;
  border-radius: 3px;
  padding: 2px 5px;
`;
