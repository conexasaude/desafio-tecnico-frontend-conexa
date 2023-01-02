import React from "react";
import { TooltipCard, TooltipText, TooltipBox } from "./styled-tooltip";

export interface TooltipProps {
  children?: React.ReactNode;
  textTooltip?: any;
}

const Tooltip: React.FC<TooltipProps> = ({ ...props }: TooltipProps) => {
  return (
    <TooltipCard>
      <TooltipText>{props?.children}</TooltipText>
      <TooltipBox>{props?.textTooltip}</TooltipBox>
    </TooltipCard>
  );
};

export default Tooltip;
