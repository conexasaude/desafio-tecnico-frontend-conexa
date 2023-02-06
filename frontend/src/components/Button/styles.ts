import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'outline' | 'inline'
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.438rem 1rem;
  background: ${({ theme }) => theme.colors['base-blue']};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors['base-blue']};
  border-radius: 6px;
  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors['base-blue-dark']};
  }

  ${({ variant }) =>
    variant === 'outline' &&
    css`
      color: ${({ theme }) => theme.colors['base-blue']};
      background: ${({ theme }) => theme.colors['base-white']};

      &:hover {
        background: ${({ theme }) => theme.colors['base-blue-dark']};
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`
