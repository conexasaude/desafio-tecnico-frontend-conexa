import React, { useState } from "react";
import { ContainerInput } from "./styled-input";

import { IoEyeOff, IoEye } from "react-icons/io5";

export interface InputProps {
  width?: string;
  height?: string;
  type?: "email" | "password" | "text";
  onClick?: () => void;
  children?: React.ReactNode;
  label?: string;
  placeholder?: string;
  formUser?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
}

const Input: React.FC<InputProps> = ({ ...props }: InputProps) => {
  const [passwordSelect, setPasswordSelect] = useState<boolean>(true);

  return (
    <ContainerInput>
      {props?.label && <label>{props?.label}</label>}
      {props?.type === "password" ? (
        <div>
          <input
            type={passwordSelect ? "password" : "text"}
            placeholder={props?.placeholder}
            required
          />

          {passwordSelect ? (
            <IoEyeOff onClick={() => setPasswordSelect(!passwordSelect)} />
          ) : (
            <IoEye onClick={() => setPasswordSelect(!passwordSelect)} />
          )}
        </div>
      ) : (
        <input
          required
          type={props.type ? props.type : "text"}
          {...props.formUser}
          placeholder={props?.placeholder}
          onChange={props.onChange}
          value={props?.value}
        />
      )}
    </ContainerInput>
  );
};

export default Input;
