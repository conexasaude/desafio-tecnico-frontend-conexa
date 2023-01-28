import { Meta } from "@storybook/react";
import { OptionsProps, Select, SelectProps } from "../components/Select";

export default {
  title: "Components/Select",
  component: Select,
} as Meta<SelectProps>;

export const Default = (args) => {
  return <Select {...args} />;
};

Default.args = {
  options: [
    {
      label: "test",
      value: {},
    },
  ],
};
