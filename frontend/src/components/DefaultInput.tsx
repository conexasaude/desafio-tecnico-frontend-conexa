import {
  FieldErrorsImpl,
  FieldValues,
  UseFormClearErrors,
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
}

export function DefaultInput({
  registerName,
  formRegister,
  errors,
  title,
  ...rest
}: DefaultFieldProps) {
  return (
    <div>
      <p className="text-gray-500">{title}</p>
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
