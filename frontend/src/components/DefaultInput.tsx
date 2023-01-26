import { createRef, MutableRefObject } from "react";
import { FieldErrorsImpl, FieldValues, UseFormProps, UseFormRegister } from "react-hook-form";
import { Tooltip } from "./ToolTip";

interface DefaultFieldProps extends UseFormProps, React.HTMLAttributes<HTMLInputElement> {
  registerName: string;
  formRegister: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
  reactRef?: MutableRefObject<HTMLInputElement>;
  title?: string;
  icon?: JSX.Element;
  type?: string;
  tooltipText?: string;
}

export function DefaultInput({
  registerName,
  formRegister,
  errors,
  title,
  icon,
  tooltipText,
  type = "text",
  reactRef,
}: DefaultFieldProps) {
  const toolTipRef = createRef<HTMLDivElement>();
  const { ref } = formRegister(registerName);

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

      <input
        type={type}
        className="border-b-2 w-full"
        {...formRegister(registerName)}
        ref={(e) => {
          ref(e);
          if (reactRef) reactRef.current = e;
        }}
      />

      {errors[registerName]?.message && (
        <span className="text-red-400">{errors[registerName]?.message.toString()}</span>
      )}
    </div>
  );
}
