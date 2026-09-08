import styled, { css } from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const FaqCont = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 32px 60px;
  overflow-y: auto;
  height: 100%;
`;

export const FaqContent = styled.div`
  width: 100%;
  max-width: 720px;
`;

export const FaqHeading = styled.h1`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
`;

export const FaqIntro = styled.p`
  color: ${color.textMedium};
  ${font.size(15)}
  padding-bottom: 10px;
`;

export const CategorySection = styled.section`
  margin-top: 30px;
`;

export const CategoryTitle = styled.h2`
  color: ${color.textMedium};
  ${font.size(13)}
  ${font.medium}
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding-bottom: 10px;
`;

export const FaqItem = styled.div`
  background: #fff;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  margin-bottom: 8px;
  transition: background 0.1s;

  &:hover {
    background: ${color.backgroundLightest};
  }
`;

export const QuestionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: ${color.textDark};
  ${font.size(15)}
  ${font.medium}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${color.borderInputFocus};
    border-radius: 3px;
  }
`;

export const QuestionIcon = styled.span`
  display: inline-flex;
  margin-left: 12px;
  color: ${color.textMedium};
  transition: transform 0.2s;
  ${props =>
    props.isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const Answer = styled.div`
  padding: 0 16px 14px;
  color: ${color.textMedium};
  ${font.size(14.5)}
  line-height: 1.6;
`;
