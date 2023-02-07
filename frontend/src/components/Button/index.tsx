import { forwardRef, ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant: 'outline' | 'inline'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, variant, ...props }, ref) => {
    return (
      <ButtonContainer variant={variant} {...props}>
        {text}
      </ButtonContainer>
    )
  },
)

Button.displayName = 'button'
