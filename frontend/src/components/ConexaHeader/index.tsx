import { Link } from 'react-router-dom';
import GenericHeader from '../GenericHeader';
import Logo from '../../assets/brands/conexaLogo.svg';
import * as S from './index.style';
import Button from 'components/Button';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { clearDoctor, DoctorState } from 'store/doctor';
import { useDispatch } from 'react-redux';
import { clear } from 'console';

const ConexaHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const storeDoctor = useSelector<RootState, DoctorState>(
    (store) => store.doctor
  );
  const salutationText = `Olá, ${storeDoctor.name}`;

  const handleLogout = () => {
    dispatch(clearDoctor());
  };

  return (
    <GenericHeader>
      <>
        <S.LogoWrapper>
          <Link to="/">
            <img className="logo" src={Logo} alt="conexa logo" />
          </Link>
        </S.LogoWrapper>
        {storeDoctor.token && (
          <S.RightContent>
            <span className="salutation">{salutationText}</span>
            <Button outline onClick={handleLogout}>
              Sair
            </Button>
          </S.RightContent>
        )}
      </>
    </GenericHeader>
  );
};

export default ConexaHeader;
