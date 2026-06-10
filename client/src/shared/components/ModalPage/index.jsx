import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  StyledModalPage,
  ImageSection,
  ContentSection,
  Title,
  Description,
  ChildrenWrapper,
  ActionsContainer,
  StyledButton,
} from './Styles';

const propTypes = {
  className: PropTypes.string,
  testid: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['info', 'success', 'warning', 'empty', 'custom']),
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  imageUrl: PropTypes.string,
  width: PropTypes.number,
  primaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
  }),
  secondaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  tertiaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  children: PropTypes.node,
};

const defaultProps = {
  className: undefined,
  testid: 'modal:page',
  isOpen: false,
  onClose: () => {},
  variant: 'info',
  title: undefined,
  description: undefined,
  imageUrl: undefined,
  width: 500,
  primaryAction: undefined,
  secondaryAction: undefined,
  tertiaryAction: undefined,
  children: undefined,
};

const ModalPage = ({
  className,
  testid,
  isOpen,
  onClose,
  variant,
  title,
  description,
  imageUrl,
  width,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  children,
}) => {
  // Only show actions container if at least one action is provided
  const hasActions = primaryAction || secondaryAction || tertiaryAction;

  return (
    <StyledModalPage
      className={className}
      testid={testid}
      isOpen={isOpen}
      onClose={onClose}
      variant="center"
      width={width}
      withCloseIcon
      renderContent={modal => (
        <Fragment>
          {imageUrl && (
            <ImageSection>
              <img src={imageUrl} alt="" />
            </ImageSection>
          )}
          <ContentSection>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
            {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
            {hasActions && (
              <ActionsContainer>
                {tertiaryAction && (
                  <StyledButton variant="empty" onClick={tertiaryAction.onClick}>
                    {tertiaryAction.label}
                  </StyledButton>
                )}
                {secondaryAction && (
                  <StyledButton variant="secondary" onClick={secondaryAction.onClick}>
                    {secondaryAction.label}
                  </StyledButton>
                )}
                {primaryAction && (
                  <StyledButton
                    variant="primary"
                    onClick={primaryAction.onClick}
                    isWorking={primaryAction.isLoading}
                  >
                    {primaryAction.label}
                  </StyledButton>
                )}
              </ActionsContainer>
            )}
          </ContentSection>
        </Fragment>
      )}
    />
  );
};

ModalPage.propTypes = propTypes;
ModalPage.defaultProps = defaultProps;

export default ModalPage;
