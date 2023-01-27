import { Meta } from "@storybook/react";
import { Appointments } from "../components/Appointments";
import { AppointmentCard } from "../components/Appointments/AppointmentCard";

export default {
  title: "Components/appointmentCard",
  component: Appointments,
} as Meta;

export const Default = () => {
  const appointment = {
    id: 1,
    patientId: 1,
    date: "Fri Feb 05 2021 10:20:00 GMT-0300 (Brasilia Standard Time)",
    patient: {
      id: 1,
      first_name: "Frodo",
      last_name: "Baggins",
      email: "frodo.baggins@mail.com",
    },
  };

  return (
    <div className="bg-secondary">
      <AppointmentCard appointment={appointment} />;
    </div>
  );
};
