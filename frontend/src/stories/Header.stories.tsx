import { Meta } from "@storybook/react";
import Header, { HeaderProps } from "../components/Header";
import { useAuth } from "../context/auth";

export default {
  title: "layout/header",
  component: Header,
  decorators: [
    (Story) => {
      useAuth.setState({ name: "João da Silva" });

      return <Story />;
    },
  ],
} as Meta<HeaderProps>;

export const Default = {};
