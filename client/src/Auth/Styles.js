import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';
import Button from 'shared/components/Button';

export const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
    height: auto;
    min-height: 100vh;
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0d1b2a;
  padding: 48px 40px;
  gap: 28px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(245, 166, 35, 0.12), transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(0, 210, 255, 0.08), transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    flex: none;
    padding: 48px 24px 32px;
    min-height: 340px;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 164px;
  height: 164px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d2ff, #a18dff 50%, #7b5fff);
  padding: 3px;
  box-shadow: 0 0 40px rgba(0, 210, 255, 0.25), 0 8px 32px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
`;

export const AvatarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #1a2a3a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
`;

export const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #f5a623, #e8734a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 52px;
`;

export const BrandingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

export const AppTitle = styled.h1`
  ${font.bold}
  font-size: 32px;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.5px;
`;

export const Tagline = styled.p`
  ${font.regular}
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  letter-spacing: 0.3px;
`;

export const RightPanel = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 48px 56px;

  @media (max-width: 1024px) {
    width: 420px;
    padding: 48px 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 24px 48px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 360px;
`;

export const FormHeader = styled.div`
  margin-bottom: 32px;
`;

export const FormTitle = styled.h2`
  ${font.bold}
  font-size: 26px;
  color: ${color.danger};
  margin: 0 0 6px 0;
  letter-spacing: -0.3px;
`;

export const FormSubtitle = styled.p`
  ${font.regular}
  font-size: 14px;
  color: ${color.textMedium};
  margin: 0;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  height: 44px;
  font-size: 15px;
  ${font.medium}
  justify-content: center;
  border-radius: 6px;
`;

export const DividerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: ${color.borderLightest};
`;

export const DividerLabel = styled.span`
  ${font.regular}
  font-size: 12px;
  color: ${color.textLight};
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

export const GuestButton = styled(Button)`
  width: 100%;
  height: 44px;
  font-size: 14px;
  justify-content: center;
  border-radius: 6px;
  border: 1.5px solid ${color.borderLight};
  background: transparent;
  color: ${color.textDark};

  &:hover {
    background: ${color.backgroundLightest};
  }
`;
