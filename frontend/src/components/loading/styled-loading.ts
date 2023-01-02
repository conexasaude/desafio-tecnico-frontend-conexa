import styled from "styled-components";

import { loadingProps } from "./loading";

export const ContainerLoading = styled.div<loadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 999;
  background-color: ${(props) =>
    props?.background ? props.background : "#00000042"};
  svg path,
  svg rect {
    fill: ${(props) => (props?.color ? props?.color : props?.theme?.primary)};
  }

  position: absolute;
  z-index: 999;

  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;
