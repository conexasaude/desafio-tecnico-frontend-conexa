import Button from 'components/Button';
import ConsultationDisplayer from 'components/ConsultationDisplayer';
import { GenericLayoutContext } from 'containers/GenericLayout';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useOutletContext } from 'react-router-dom';
import { AppDispatch, RootState } from 'store';
import { clearError, ConsultationsState, fetch } from 'store/consultations';
import { pagesPathsEnum } from 'utils/constants';
import * as S from './index.style';

const DoctorRoom = () => {
  const [
    bottomOffsetToCalculeMaxDiplayerHeight,
    setBottomOffsetToCalculeMaxDiplayerHeight,
  ] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { handlerModal, handlerLoader } =
    useOutletContext<GenericLayoutContext>();
  const storeConsultations = useSelector<RootState, ConsultationsState>(
    (store) => store.consultations
  );
  const bottomSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(fetch()).unwrap();
      } catch (e) {
        handlerModal(<p>Não possivel obter lista de consultas</p>, true);
      }
    })();
  }, []);

  useEffect(() => {
    if (bottomSectionRef.current) {
      const { height } = bottomSectionRef.current.getBoundingClientRect();
      setBottomOffsetToCalculeMaxDiplayerHeight(height);
    }
  }, []);

  useEffect(() => {
    if (storeConsultations.loading) {
      handlerLoader(true);
    } else {
      handlerLoader(false);
    }
    if (storeConsultations.createError) {
      handlerModal(<p>Não possivel criar uma nova consulta</p>, true);
      dispatch(clearError());
    }
  }, [storeConsultations, handlerLoader, handlerModal, dispatch]);

  return (
    <S.PageWrapper>
      <section>
        <S.ContainerBase>
          <h1>Consultas</h1>
        </S.ContainerBase>
      </section>
      <section className="consultation-list">
        <S.ContainerBase>
          {storeConsultations.consultationList.length ? (
            <ConsultationDisplayer
              consultationList={storeConsultations.consultationList}
              callToActionList={[
                {
                  label: 'Atender',
                  fn: (consultationInfo) => null,
                },
              ]}
              bottomOffsetToCalculeMaxDiplayerHeight={
                bottomOffsetToCalculeMaxDiplayerHeight
              }
            />
          ) : (
            <div className="without-consultation-message">
              <p>
                Não há nenhuma
                <br />
                consulta agendada
              </p>
            </div>
          )}
        </S.ContainerBase>
      </section>
      <section ref={bottomSectionRef} className="consultation-options">
        <S.ContainerBase>
          <Button outline>
            <Link to={pagesPathsEnum.doctorRoom}>Ajuda</Link>
          </Button>
          <Button>
            <Link
              to={pagesPathsEnum.newConsultation}
              state={{ backgroundLocation: location }}
            >
              Agendar consulta
            </Link>
          </Button>
        </S.ContainerBase>
      </section>
    </S.PageWrapper>
  );
};

export default DoctorRoom;
