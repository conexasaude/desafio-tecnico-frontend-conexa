import { Meta } from "@storybook/react";
import { DefaultInput } from "../components/DefaultInput";

interface DefaultInputProps {
  title: string;
  type: string;
}

const argsDisabled = {
  icon: {
    table: {
      disable: true,
    },
  },
  value: {
    table: {
      disable: true,
    },
  },
  onChange: {
    table: {
      disable: true,
    },
  },
};

export default {
  title: "Components/Default Input",
  component: DefaultInput,
  argTypes: argsDisabled,
} as Meta;

export const Default = ({ title, type }: DefaultInputProps) => {
  return <DefaultInput title={title} type={type} onChange={() => {}} value="" />;
};

Default.args = {
  title: "Test",
  type: "text",
};
