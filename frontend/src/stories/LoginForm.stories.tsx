import { Meta } from "@storybook/react";
import { LoginForm } from "../components/LoginForm";

export default {
  title: "Components/Login Form",
  component: LoginForm,
  decorators: [
    (Story) => {
      return <div className="bg-white p-10 flex justify-center">{Story()}</div>;
    },
  ],
} as Meta;

export const Default = {};
