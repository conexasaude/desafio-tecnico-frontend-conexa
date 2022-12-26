import styled from '@emotion/styled';
import { ButtonProps } from '.';

export const ButtonWrapper = styled.button<ButtonProps>`
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  min-height: 40px;
  ${({ primaryColor, secondaryColor, outline }) =>
    outline
      ? `
  padding: 0 16px;
  border: 2px solid ${primaryColor};
  color: ${primaryColor};
  background: ${secondaryColor};
  `
      : `
  padding: 0 8px;
    border: 2px solid ${primaryColor};
    color: ${secondaryColor};
    background: ${primaryColor};
  `}

  &:hover {
    opacity: 0.85;
  }
  &:active {
    opacity: 0.65;
  }
  &:disabled {
    opacity: 0.4;
  }
`;
