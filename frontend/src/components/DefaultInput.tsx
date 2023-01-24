import { createRef, forwardRef, RefObject } from "react";
import { FieldErrorsImpl, FieldValues, UseFormProps, UseFormRegister } from "react-hook-form";
import { Tooltip } from "./ToolTip";

interface DefaultFieldProps extends UseFormProps, React.HTMLAttributes<HTMLInputElement> {
  registerName: string;
  formRegister: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
  title?: string;
  icon?: JSX.Element;
  type?: string;
  tooltipText?: string;
}

const DefaultInputWrapper = (
  {
    registerName,
    formRegister,
    errors,
    title,
    icon,
    tooltipText,
    type = "text",
  }: DefaultFieldProps,
  ref
) => {
  const toolTipRef = createRef<HTMLDivElement>();

  return (
    <div>
      <div className="flex space-x-2 items-center mb-2 relative">
        <p className="text-gray-500">{title}</p>
        <div
          onMouseEnter={() => (toolTipRef.current.style.visibility = "visible")}
          onMouseLeave={() => (toolTipRef.current.style.visibility = "hidden")}
        >
          {tooltipText && (
            <Tooltip ref={toolTipRef} className="-top-20">
              {tooltipText}
            </Tooltip>
          )}
          {icon}
        </div>
      </div>

      <input type={type} className="border-b-2 w-full" {...formRegister(registerName)} ref={ref} />

      {errors.name && errors.name.type === "required" && <span>E-mail Ncessário</span>}
    </div>
  );
};

export const DefaultInput = forwardRef<HTMLInputElement, DefaultFieldProps>(DefaultInputWrapper);
