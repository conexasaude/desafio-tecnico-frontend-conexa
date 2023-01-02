import React, { useState } from "react";
import { ContainerInput } from "./styled-input";

import { IoEyeOff, IoEye } from "react-icons/io5";
import Tooltip from "../tooltip/tooltip";

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
  tooltipContent?: any;
  tooltipText?: any;
  name?: string;
  error?: boolean;
  require?: boolean;
  disable?: boolean;
}

const Input: React.FC<InputProps> = ({ ...props }: InputProps) => {
  const [passwordSelect, setPasswordSelect] = useState<boolean>(true);

  return (
    <ContainerInput error={props.error}>
      {props?.label && (
        <article>
          <label>{props?.label}</label>

          {props?.tooltipContent && (
            <Tooltip textTooltip={props?.tooltipText}>
              {props?.tooltipContent}
            </Tooltip>
          )}
        </article>
      )}
      {props?.type === "password" ? (
        <div>
          <input
            type={passwordSelect ? "password" : "text"}
            {...props.formUser}
            disabled={props.disable}
            placeholder={props?.placeholder}
            onChange={props.onChange}
            value={props?.value}
          />

          {passwordSelect ? (
            <IoEyeOff onClick={() => setPasswordSelect(!passwordSelect)} />
          ) : (
            <IoEye onClick={() => setPasswordSelect(!passwordSelect)} />
          )}
        </div>
      ) : (
        <input
          type={props.type ? props.type : "text"}
          {...props.formUser}
          disabled={props.disable}
          placeholder={props?.placeholder}
          onChange={props.onChange}
          value={props?.value}
        />
      )}
    </ContainerInput>
  );
};

export default Input;
