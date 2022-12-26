import React from 'react';
import * as S from './index.style';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  primaryColor?: string;
  secondaryColor?: string;
  outline?: boolean;
}

const Button = ({
  children,
  primaryColor = '#2E50D4;',
  secondaryColor = 'white',
  outline = false,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      {...props}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      outline={outline}
    >
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
