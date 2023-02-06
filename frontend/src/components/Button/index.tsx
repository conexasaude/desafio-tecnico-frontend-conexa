import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant: 'outline' | 'inline'
}

export function Button({ text, variant, ...props }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      {text}
    </ButtonContainer>
  )
}
