import React from "react";

import { ContainerModalCreate, ModalClose, ModalContent } from "./styled-modal";
import { MdOutlineClose } from "react-icons/md";
import { FlexBox } from "../../styles/global";

export interface ModalProps {
  children?: React.ReactNode;
  showModal?: boolean;
  setShowModal?: any;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ ...props }: ModalProps) => {
  function handleClickModal() {
    props.setShowModal(false);
  }

  return (
    <ContainerModalCreate showModal={props?.showModal}>
      <ModalContent>
        <FlexBox>
          <FlexBox margin="23px">
            <h2>{props?.title}</h2>
          </FlexBox>
          <ModalClose onClick={handleClickModal}>
            <MdOutlineClose />
          </ModalClose>
        </FlexBox>
        {props?.children}
      </ModalContent>
    </ContainerModalCreate>
  );
};

export default Modal;
