import React, { useState } from 'react';
import { FaRegQuestionCircle, FaEyeSlash, FaEye } from 'react-icons/fa';
import * as S from './index.style';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  labelText: React.ReactNode;
  errorMessage?: string;
  toolTip?: React.ReactNode;
}

const Input = ({
  name,
  id,
  labelText,
  type = 'text',
  toolTip,
  errorMessage = 'campo com erro',
  ...props
}: InputProps) => {
  const idComputed = id || `id_inp_${name}`;
  const [computedType, setComputedType] = useState(type);

  const renderPasswordToggleVisibilityButton = () =>
    computedType === 'password' ? <FaEyeSlash /> : <FaEye />;

  const toggleVisibilityHandler = () => {
    setComputedType((old) => (old === 'password' ? 'text' : 'password'));
  };

  return (
    <S.InputWrapper>
      {type === 'password' && (
        <span
          onClick={toggleVisibilityHandler}
          className="toggle-visibility-container"
          role="button"
        >
          {renderPasswordToggleVisibilityButton()}
        </span>
      )}
      <input type={computedType} id={idComputed} name={name} {...props} />
      <label htmlFor={idComputed}>
        {labelText}
        {toolTip && (
          <span className="more-info-icon">
            <span
              className="icon-container"
              onMouseOver={() => console.log('>>>>>>>>')}
              onMouseLeave={() => console.log('<<<<<<<')}
              role="button"
            >
              <FaRegQuestionCircle />
            </span>
            <span className="tool-tip-text">{toolTip}</span>
          </span>
        )}
      </label>
      <span className="warning-message">{errorMessage}</span>
    </S.InputWrapper>
  );
};

export default Input;
