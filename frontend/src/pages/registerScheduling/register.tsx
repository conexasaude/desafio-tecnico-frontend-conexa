import React, { useEffect, useState } from "react";
import Button from "../../components/button/button";
import { API } from "../../services/api";
import { FlexBox } from "../../styles/global";
import {
  ContainerRegisterScheduling,
  ContentMainRegisterScheduling,
  RegisterFooter,
} from "./styled-register";

export interface RegisterSchedulingProps {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const RegisterScheduling: React.FC = () => {
  const [dataUser, setDataUser] = useState<[RegisterSchedulingProps]>();

  useEffect(() => {
    (async function () {
      try {
        const data = await API.get("/patients?");
        const response = await data;
        setDataUser(response?.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  function handleSelect(item: any) {
    console.log("deu bom", item?.target?.value);
  }

  function handleDate(item: any) {
    console.log("deu bom", item?.target?.value);
  }

  return (
    <ContainerRegisterScheduling>
      <ContentMainRegisterScheduling>
        <FlexBox direction="column" gap="5px">
          <label>Selecione o paciente</label>
          <select onChange={handleSelect}>
            {dataUser && (
              <>
                {dataUser.map((item) => {
                  return (
                    <option key={item?.id} value={item?.id}>
                      {item?.first_name}
                    </option>
                  );
                })}
              </>
            )}
          </select>
        </FlexBox>
        <FlexBox direction="column" gap="5px">
          <label>Selecione uma data</label>
          <input type="datetime-local" onChange={handleDate} />
        </FlexBox>
      </ContentMainRegisterScheduling>

      <RegisterFooter>
        <Button variant="secondary">Sair</Button>
        <Button>Confirmar Agendamento</Button>
      </RegisterFooter>
    </ContainerRegisterScheduling>
  );
};

export default RegisterScheduling;
