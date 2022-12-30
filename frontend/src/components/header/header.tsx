import React from "react";
import { ContainerHeader } from "./styled-header";
import logo from "../../assets/logoconexa.svg";
import Button from "../button/button";

export const Header: React.FC = () => {
  return (
    <ContainerHeader>
      <div>
        <img
          src={logo}
          alt="Icone complementando o nome , uma cruz com um icone do wi-fi a esquerda inferiror"
        />
      </div>

      <div>
        <span>Olá , Dr. Gandalf</span>
        <Button width="57px"> Sair</Button>
      </div>
    </ContainerHeader>
  );
};
