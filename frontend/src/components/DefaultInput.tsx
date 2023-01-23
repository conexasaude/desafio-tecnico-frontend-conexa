import {
  FieldErrorsImpl,
  FieldValues,
  UseFormProps,
  UseFormRegister,
} from "react-hook-form";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IconBase, IconType } from "react-icons";

interface DefaultFieldProps
  extends UseFormProps,
    React.HTMLAttributes<HTMLInputElement> {
  registerName: string;
  formRegister: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
  title?: string;
  icon?: JSX.Element;
}

export function DefaultInput({
  registerName,
  formRegister,
  errors,
  title,
  icon,
  ...rest
}: DefaultFieldProps) {
  return (
    <div>
      <div className="flex space-x-2 items-center mb-2">
        <p className="text-gray-500">{title}</p>
        {icon}
      </div>
      <input
        className="border-b-2 w-full"
        {...formRegister(registerName)}
        {...rest}
      />
      {errors.name && errors.name.type === "required" && (
        <span>E-mail Ncessário</span>
      )}
    </div>
  );
}
