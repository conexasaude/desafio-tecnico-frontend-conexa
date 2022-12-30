import React from "react";
import { ContainerButton } from "./styled-button";

export interface ButtonProps {
  width?: string;
  height?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => {
  return (
    <ContainerButton {...props} variant={props?.variant}>
      {props?.children}
    </ContainerButton>
  );
};

export default Button;
