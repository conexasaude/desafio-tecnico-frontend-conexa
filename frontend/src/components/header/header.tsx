import React, { useContext } from "react";
import { ContainerHeader } from "./styled-header";
import logo from "../../assets/logoconexa.svg";
import Button from "../button/button";
import { AuthContext } from "../../auth/context/authContext";

export interface headerPorps {
  authenticated?: boolean;
}

export const Header: React.FC<headerPorps> = ({ ...props }: headerPorps) => {
  const { authenticated, userName, handleLogout } = useContext(AuthContext);

  return (
    <ContainerHeader authenticated={authenticated}>
      <div>
        <img
          src={logo}
          alt="Icone complementando o nome , uma cruz com um icone do wi-fi a esquerda inferiror"
        />
      </div>
      {authenticated && (
        <div>
          <span>Olá , Dr. {userName}</span>
          <Button width="57px" variant="secondary" onClick={handleLogout}>
            Sair
          </Button>
        </div>
      )}
    </ContainerHeader>
  );
};
