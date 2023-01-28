import { Meta } from "@storybook/react";
import { OptionsProps, Select, SelectProps } from "../components/Select";

export default {
  title: "Components/Select",
  component: Select,
} as Meta<SelectProps>;

export const Default = ({ options }: { options: OptionsProps[] }) => {
  return <Select options={options} onChange={() => {}} />;
};

Default.args = {
  options: [
    {
      label: "test",
      value: {},
    },
  ],
};
