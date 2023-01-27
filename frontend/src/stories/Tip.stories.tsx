import { Meta } from "@storybook/react";
import { Tooltip } from "../components/ToolTip";

export default {
  title: "Components/Tool Tip",
  component: Tooltip,
} as Meta;

export const Default = ({ text }: { text: string }) => {
  return (
    <Tooltip className="text-black w-[400px]" style={{ visibility: "visible" }}>
      {text}
    </Tooltip>
  );
};

Default.args = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum purus sem, feugiat eu dolor id, dignissim pellentesque diam. Suspendisse scelerisque iaculis euismod",
};
