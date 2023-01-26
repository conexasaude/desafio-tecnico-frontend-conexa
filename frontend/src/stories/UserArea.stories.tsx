import { Meta } from "@storybook/react";
import { UserArea, UserAreaProps } from "../components/Header/UserArea";

export default {
  title: "Components/Header/User Area",
  component: UserArea,
  argTypes: {
    control: { type: "input" },
  },
} as Meta<UserAreaProps>;

export const Default = ({ name }: { name: string }) => {
  return (
    <div className="text-white">
      <UserArea name={name} />
    </div>
  );
};

Default.args = {
  name: "",
};
