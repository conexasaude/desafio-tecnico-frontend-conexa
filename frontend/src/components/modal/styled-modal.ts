import styled from "styled-components";
import { ModalProps } from "./modal";

export const ContainerModalCreate = styled.div<ModalProps>`
  border: 1px solid "#da9117";
  width: 100%;
  height: 95%;
  background-color: #0f1921a8;
  display: ${(props) => (props?.showModal ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  z-index: 9;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${(props) => props.theme.titleColor};
  }
`;

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  width: 800px;
  height: 600px;
  background-color: #fff;
  border-radius: 18px;
  flex-direction: column;

  @media (max-width: 1022px) {
    width: 100%;
    height: 100%;

    border-radius: 0;
  }
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 25px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.primary};
  }
`;
