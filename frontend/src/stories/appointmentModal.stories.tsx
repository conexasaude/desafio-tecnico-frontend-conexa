import { Meta } from "@storybook/react";
import { AppointmentModal } from "../components/AppointmentModal";
import { useModal } from "../context/modal";

export default {
  title: "Components/Appointments Modal",
  component: AppointmentModal,
  decorators: [
    (Story) => {
      useModal.setState({ isOpen: true });

      return <Story />;
    },
  ],
} as Meta;

export const Default = {};
