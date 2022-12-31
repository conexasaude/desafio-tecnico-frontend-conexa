import styled from "styled-components";

import { InputProps } from "./input";

export const ContainerInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;

  label {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.textColor};
    padding-right: 8px;
  }

  input {
    border: 0;
    border-bottom: 2px solid #dad2d0;
    padding-right: 30px;
    width: 100%;
    padding-bottom: 5px;
  }
  article {
    display: flex;
    gap: 16px;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.colorIcon};
    }

    div {
      width: auto;
    }
  }
  div {
    position: relative;
    display: flex;
    width: 100%;

    svg {
      position: absolute;
      right: 0;
      cursor: pointer;
      color: ${(props) => props.theme.colorIcon};
    }
  }
`;
