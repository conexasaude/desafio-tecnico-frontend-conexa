import { forwardRef, RefObject } from "react";
import {
  FieldErrorsImpl,
  FieldValues,
  UseFormProps,
  UseFormRegister,
} from "react-hook-form";

interface DefaultFieldProps
  extends UseFormProps,
    React.HTMLAttributes<HTMLInputElement> {
  registerName: string;
  formRegister: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
  title?: string;
  icon?: JSX.Element;
  type?: string;
}

const DefaultInputWrapper = (
  {
    registerName,
    formRegister,
    errors,
    title,
    icon,
    type = "text",
  }: DefaultFieldProps,
  ref
) => {
  return (
    <div>
      <div className="flex space-x-2 items-center mb-2">
        <p className="text-gray-500">{title}</p>
        {icon}
      </div>
      <input
        type={type}
        className="border-b-2 w-full"
        {...formRegister(registerName)}
        ref={ref}
      />
      {errors.name && errors.name.type === "required" && (
        <span>E-mail Ncessário</span>
      )}
    </div>
  );
};

export const DefaultInput = forwardRef<HTMLInputElement, DefaultFieldProps>(
  DefaultInputWrapper
);
