import React, { useEffect, useState } from "react";
import Button from "../../components/button/button";
import { API } from "../../services/api";
import { FlexBox } from "../../styles/global";
import {
  ContainerHome,
  HomeMainContent,
  HomeFooter,
  HomeMainDivContainer,
  HomeDivOverflow,
  HomeMainNotConsult,
} from "./styled-login";

import Modal from "../../components/modal/modal";

import portrait from "../../assets/portraitilustration.svg";
import flower from "../../assets/floweilustration.svg";

import Moment from "react-moment";
import RegisterScheduling from "../registerScheduling/register";

interface HomeProps {
  date?: string;
  id?: number;
  patient?: {
    email?: string;
    first_name?: string;
    id?: number;
    last_name?: string;
  };
  patientId?: number;
}

const Home: React.FC = () => {
  const [dataUser, setDataUser] = useState<[HomeProps]>();

  useEffect(() => {
    (async function () {
      try {
        const data = await API.get("/consultations?_expand=patient");
        const response = await data;
        setDataUser(response?.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  function handleFormatDate(item: string | undefined) {
    if (item) {
      return (
        <>
          <Moment format="DD/MM/YYYY  ">{item}</Moment>
          às&nbsp;
          <Moment format="HH:mm  ">{item}</Moment>
        </>
      );
    }
  }

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={openModal}
        title="Agendamento de Consulta"
      >
        <RegisterScheduling />
      </Modal>
      <ContainerHome>
        <h1>Consultas</h1>
        {dataUser ? (
          <HomeMainContent>
            <HomeMainDivContainer>
              {dataUser?.length && dataUser?.length > 1 ? (
                <h2>{dataUser?.length} consultas agendadas</h2>
              ) : (
                <h2> {dataUser?.length} consulta agendada</h2>
              )}

              {dataUser && (
                <HomeDivOverflow>
                  {dataUser.map((item) => {
                    return (
                      <FlexBox
                        key={item?.id}
                        justify="space-between"
                        margin="0 0 24px 0"
                      >
                        <FlexBox direction="column" gap="5px">
                          <p>
                            {item?.patient?.first_name}
                            {item?.patient?.last_name}
                          </p>

                          <span>{handleFormatDate(item?.date)}</span>
                        </FlexBox>
                        <FlexBox justify="flex-end">
                          <Button>Atender</Button>
                        </FlexBox>
                      </FlexBox>
                    );
                  })}
                </HomeDivOverflow>
              )}
            </HomeMainDivContainer>
          </HomeMainContent>
        ) : (
          <HomeMainNotConsult>
            <FlexBox
              direction="column"
              justify="center"
              align="center"
              width="520px"
              gap="30px"
            >
              <FlexBox justify="flex-end">
                <img src={portrait} alt="Ilustracao de um dois retratos" />
              </FlexBox>
              <h2>Não há nenhuma consulta agendada</h2>
              <FlexBox>
                <img
                  src={flower}
                  alt="Ilustracao de uma planta com as folhas azuis e uma base meio salmão"
                />
              </FlexBox>
            </FlexBox>
          </HomeMainNotConsult>
        )}

        <HomeFooter>
          <Button variant="secondary">Ajuda</Button>
          <Button onClick={() => setShowModal(!showModal)}>
            Agendar Consulta
          </Button>
        </HomeFooter>
      </ContainerHome>
    </>
  );
};

export default Home;
