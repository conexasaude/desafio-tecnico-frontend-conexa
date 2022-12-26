import * as S from './index.style';
import IllustrationDesktopAndForm from 'assets/illustration/desktopAndForm.svg';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DoctorState, login } from 'store/doctor';
import { AppDispatch, RootState } from 'store';
import { useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { pagesPathsEnum } from 'utils/constants';
import { GenericLayoutContext } from 'containers/GenericLayout';
import Input from 'components/Input';
import Button from 'components/Button';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const storeDoctor = useSelector<RootState, DoctorState>(
    (store) => store.doctor
  );
  const navigate = useNavigate();
  const { handlerModal, handlerLoader } =
    useOutletContext<GenericLayoutContext>();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();
    } catch (e) {
      handlerModal(<p>Não foi possivel efetuar login</p>, true);
    }
  };

  useEffect(() => {
    if (storeDoctor.token) {
      navigate(pagesPathsEnum.doctorRoom);
    }
    if (storeDoctor.loading) {
      handlerLoader(true);
    } else {
      handlerLoader(false);
    }
  }, [storeDoctor, navigate, handlerLoader]);

  return (
    <S.PageWrapper>
      <S.ContainerBase>
        <section className="introduction">
          <h1>Faça Login</h1>
          <img
            className="illustration"
            src={IllustrationDesktopAndForm}
            alt="ilustração de um computador e um formulario"
          />
        </section>
        <section>
          <form onSubmit={handleSubmit}>
            <Input
              labelText="E-mail"
              name="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
              type="email"
              required
            />
            <Input
              labelText="Senha"
              name="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) =>
                setPassword((e.target as HTMLInputElement).value)
              }
              type="password"
              toolTip="loren ipsun loren..."
              required
            />

            <Button type="submit">Entrar</Button>
          </form>
        </section>
      </S.ContainerBase>
    </S.PageWrapper>
  );
};

export default Login;
