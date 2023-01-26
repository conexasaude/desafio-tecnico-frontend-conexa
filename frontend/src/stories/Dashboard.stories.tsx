import { Meta } from "@storybook/react";
import { useAuth } from "../context/auth";
import { Dashboard } from "../pages/Dashboard";

export default {
  title: "Dashboard",
  component: Dashboard,
  decorators: [
    (Story) => {
      useAuth.setState({ name: "João da Silva" });

      return <Story />;
    },
  ],
} as Meta;

export const Default = ({ token }) => {
  const mockAppointments = [
    {
      id: 1,
      patientId: 1,
      date: "Fri Feb 05 2021 10:20:00 GMT-0300 (Brasilia Standard Time)",
      patient: {
        id: 1,
        first_name: "Frodo",
        last_name: "Baggins",
        email: "frodo.baggins@mail.com",
      },
    },
    {
      id: 1,
      patientId: 1,
      date: "Fri Feb 05 2021 10:20:00 GMT-0300 (Brasilia Standard Time)",
      patient: {
        id: 1,
        first_name: "Frodo",
        last_name: "Baggins",
        email: "frodo.baggins@mail.com",
      },
    },
  ];

  return (
    <div className="bg-secondary">
      <Dashboard mockAppointments={mockAppointments} />;
    </div>
  );
};
