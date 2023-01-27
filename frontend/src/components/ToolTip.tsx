import { forwardRef, HTMLAttributes } from "react";

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | string;
  className?: string;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, className, ...rest }: TooltipProps, ref) => (
    <div
      style={{ visibility: "hidden" }}
      className={`p-5 absolute bg-white border-solid border-2 rounded-lg w-50 z-10 ${className}`}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
