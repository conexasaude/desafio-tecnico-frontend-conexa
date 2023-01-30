import { createRef, MutableRefObject } from "react";
import { Tooltip } from "./ToolTip";

interface DefaultFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  title: string;
  icon?: JSX.Element;
  type?: string;
  tooltipText?: string;
  value: string;
  onChange: () => void;
}

export function DefaultInput({
  title,
  icon,
  tooltipText,
  type = "text",
  onChange,
}: DefaultFieldProps) {
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

      <input type={type} className="border-b-2 w-full" onChange={onChange} />
    </div>
  );
}
