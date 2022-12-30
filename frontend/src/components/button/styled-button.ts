import styled, { css } from "styled-components";
import { darken } from "polished";
import { ButtonProps } from "./button";

export const ContainerButton = styled.button<ButtonProps>`
  width: ${(props) => (props?.width ? props.width : "100%")};
  text-align: center;
  border: 0;
  height: ${(props) => (props?.height ? props.height : "40px")};

  cursor: pointer;
  font-weight: 700;

  ${(props) =>
    props?.variant === "secondary"
      ? css`
          font-size: 12px;
          border: 2px solid ${(props) => props.theme.primary};
          border-radius: 6px;
          color: ${(props) => props.theme.primary};
          background-color: transparent;

          :hover {
            background-color: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.textColorWhite};
            transition: ease-in-out 150ms;
          }
        `
      : css`
          font-size: 14px;
          border-radius: 8px;
          background-color: ${(props) => props.theme.primary};
          color: ${(props) => props.theme.textColorWhite};

          :hover {
            background-color: ${(props) => darken(0.2, props.theme.primary)};
          }
        `};
`;
