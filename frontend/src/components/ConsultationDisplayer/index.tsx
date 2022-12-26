import Button from 'components/Button';
import { Consultation } from 'infrastructure/conexaApi';
import React, { useLayoutEffect, useRef, useState } from 'react';
import * as S from './index.style';

export interface ConsultationDisplayerProps {
  consultationList: Consultation[];
  callToActionList: Array<{
    label: string;
    fn: (consultationInfo: Consultation) => null;
  }>;
  localeCode?: string;
  truncateLength?: number;
  bottomOffsetToCalculeMaxDiplayerHeight?: number;
}

const ConsultationDisplayer = ({
  consultationList,
  callToActionList,
  localeCode = 'pt-BR',
  truncateLength = 25,
  bottomOffsetToCalculeMaxDiplayerHeight,
}: ConsultationDisplayerProps) => {
  const displayerRef = useRef<HTMLDivElement>(null);
  const [maxDisplayerHeight, setMaxDisplayerHeight] = useState(0);

  const truncateText = (text: string) => {
    const trucatedText = text.substring(0, truncateLength).trim();
    return trucatedText.length < text.length ? `${trucatedText}...` : text;
  };

  useLayoutEffect(() => {
    if (displayerRef.current && bottomOffsetToCalculeMaxDiplayerHeight) {
      const { y } = displayerRef.current.getBoundingClientRect();
      setMaxDisplayerHeight(
        window.innerHeight - y - bottomOffsetToCalculeMaxDiplayerHeight
      );
    }
  }, []);

  return (
    <S.ConsultationDisplayerWrapper maxDisplayerHeight={maxDisplayerHeight}>
      <div className="total">
        {consultationList.length
          ? `${consultationList.length} consultas agendadas`
          : '0 consulta agendada'}
      </div>
      <div ref={displayerRef} className="displayer">
        {consultationList.map((consultation) => {
          const { patient, date, id } = consultation;
          const dateAsObj = new Date(date);
          return (
            <S.DiplayerItem key={id}>
              <div className="content">
                <div className="title">
                  {truncateText(`${patient.firstName} ${patient.lastName}`)}
                </div>
                <div className="sub-title">{`${dateAsObj.toLocaleDateString(
                  localeCode
                )} às ${dateAsObj.toLocaleTimeString(localeCode)}`}</div>
              </div>
              <div className="call-to-action">
                {callToActionList.map(({ label, fn }) => (
                  <Button key={label} onClick={() => fn(consultation)}>
                    {label}
                  </Button>
                ))}
              </div>
            </S.DiplayerItem>
          );
        })}
      </div>
    </S.ConsultationDisplayerWrapper>
  );
};

export default ConsultationDisplayer;
