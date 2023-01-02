import React, { useEffect, useState } from "react";
import Button from "../../components/button/button";
import { Loading } from "../../components/loading/loading";
import { API } from "../../services/api";
import { FlexBox } from "../../styles/global";
import {
  ContainerRegisterScheduling,
  RegisterFooter,
  SucessRegister,
} from "./styled-register";
import { useForm, SubmitHandler } from "react-hook-form";
import { SpanError } from "../login/styled-login";

import { IoCalendarOutline } from "react-icons/io5";
import moment from "moment";

export interface RegisterSchedulingPropsSelect {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface RegisterSchedulingProps {
  patientId: "string" | undefined;
  date: "string" | undefined;
}

const RegisterScheduling: React.FC = () => {
  moment.locale("pt-br");
  const [dataUser, setDataUser] = useState<[RegisterSchedulingPropsSelect]>();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterSchedulingProps>();

  const [errorLogin, setErrorLogin] = useState(false);
  const [sucessRegister, setErroRegister] = useState(false);

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

  function showErrorLogin() {
    setErrorLogin(true);

    setTimeout(() => {
      setErrorLogin(false);
    }, 500);
  }

  const onSubmit: SubmitHandler<RegisterSchedulingProps> = async (
    data: RegisterSchedulingProps
  ) => {
    setLoading(true);

    if (data?.date) {
      var format = "llll Z";

      const dataUser = {
        patientId: data?.patientId,
        date: moment(data?.date).format(format),
      };

      try {
        setLoading(false);
        await API.post("/consultations", dataUser);
        setValue("date", undefined);
        setValue("patientId", undefined);
        setErroRegister(true);
      } catch (e) {
        setLoading(false);

        showErrorLogin();
      }
    }
  };

  return (
    <ContainerRegisterScheduling>
      {loading && <Loading />}

      {sucessRegister ? (
        <SucessRegister>
          <FlexBox
            align="center"
            justify="center"
            direction="column"
            gap="30px"
          >
            Agendamento realizado com Sucesso!
            <IoCalendarOutline />
          </FlexBox>
          <RegisterFooter>
            <Button onClick={() => setErroRegister(false)}>
              Realizar outro Agendamento
            </Button>
          </RegisterFooter>
        </SucessRegister>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FlexBox direction="column" gap="5px">
            <label>Selecione o paciente</label>
            <select {...register("patientId", { required: true })}>
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
            <input
              type="datetime-local"
              {...register("date", { required: true })}
            />
          </FlexBox>

          {errorLogin && (
            <SpanError>
              *Ops, houve um problema! Tente novamente em alguns minutos!
            </SpanError>
          )}

          {errors?.patientId && (
            <SpanError>*É necessário selecionar um paciente</SpanError>
          )}
          {errors?.date && (
            <SpanError>*É necessário escolher uma data</SpanError>
          )}

          <RegisterFooter>
            <Button>Confirmar Agendamento</Button>
          </RegisterFooter>
        </form>
      )}
    </ContainerRegisterScheduling>
  );
};

export default RegisterScheduling;
