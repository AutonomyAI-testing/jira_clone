import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

// Full-screen container with decorative gradient background
export const PageError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 32px;
  background: linear-gradient(135deg, #F5EDD6 0%, #EDE3C8 100%);
`;

// Content wrapper with max-width constraint for large screens
export const ErrorPageInner = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
`;

// Card container centered with icon, title, message, and action button
export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 480px;
  padding: 48px 32px;
  border-radius: 3px;
  border: 1px solid ${color.borderLight};
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.85);
  text-align: center;

  @media (max-width: 999px) {
    padding: 40px 24px;
  }

  @media (max-width: 680px) {
    padding: 32px 20px;
  }
`;

// Wizard illustration container with responsive sizing
export const StyledWizard = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 999px) {
    margin-bottom: 28px;

    svg {
      width: 260px;
    }
  }

  @media (max-width: 680px) {
    margin-bottom: 24px;

    svg {
      width: 220px;
    }
  }
`;

// Error code and message heading
export const Title = styled.h1`
  margin: 0 0 16px 0;
  ${font.size(40)}
  ${font.bold}
  color: ${color.danger};
  line-height: 1.2;

  @media (max-width: 999px) {
    ${font.size(32)}
  }

  @media (max-width: 680px) {
    ${font.size(28)}
    margin-bottom: 12px;
  }
`;

// Descriptive subtitle explaining the error
export const Subtitle = styled.p`
  margin: 0 0 32px 0;
  ${font.size(16)}
  ${font.regular}
  color: ${color.textMedium};
  line-height: 1.6;
  letter-spacing: 0.3px;

  @media (max-width: 999px) {
    ${font.size(15)}
    margin-bottom: 28px;
  }

  @media (max-width: 680px) {
    ${font.size(14)}
    margin-bottom: 24px;
    line-height: 1.5;
  }
`;

// Button wrapper to ensure consistent sizing and alignment
export const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    min-height: 44px;
    padding: 12px 32px;
    
    @media (max-width: 680px) {
      padding: 10px 24px;
      font-size: 14px;
    }
  }
`;
