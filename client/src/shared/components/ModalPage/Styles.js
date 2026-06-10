import styled, { css } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import Modal from 'shared/components/Modal';
import Button from 'shared/components/Button';

export const StyledModalPage = styled(Modal)`
  border-left: 4px solid ${props => getVariantColor(props.variant)};
`;

// Maps modal variants to their corresponding border colors
// This creates visual distinction between different modal types
// (informational, success, warning, empty, or custom)
const getVariantColor = variant => {
  const variantColors = {
    info: color.primary,
    success: color.success,
    warning: color.warning,
    empty: color.textLight,
    custom: 'transparent',
  };
  return variantColors[variant] || color.primary;
};

export const ImageSection = styled.div`
  width: 100%;
  max-height: 240px;
  background: ${color.backgroundLightest};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-bottom: 1px solid ${color.borderLightest};

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 999px) {
    max-height: 200px;
    padding: 20px;
  }

  @media (max-height: 680px) {
    max-height: 150px;
    padding: 16px;
  }
`;

export const ContentSection = styled.div`
  padding: 32px 40px 40px;

  @media (max-width: 999px) {
    padding: 24px 32px 32px;
  }

  @media (max-width: 680px) {
    padding: 20px 24px 24px;
  }
`;

export const Title = styled.h2`
  ${font.bold}
  ${font.size(20)}
  color: ${color.success};
  margin: 0 0 12px 0;
  line-height: 1.4;

  @media (max-width: 680px) {
    ${font.size(18)}
  }
`;

export const Description = styled.p`
  ${font.regular}
  ${font.size(14)}
  color: ${color.textDark};
  margin: 0 0 20px 0;
  line-height: 1.5;

  @media (max-width: 680px) {
    ${font.size(13)}
    margin: 0 0 16px 0;
  }
`;

export const ChildrenWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid ${color.borderLightest};

  @media (max-width: 680px) {
    flex-direction: column-reverse;
    gap: 8px;

    button {
      width: 100%;
    }
  }
`;

export const StyledButton = styled(Button)`
  &:not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 680px) {
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;
