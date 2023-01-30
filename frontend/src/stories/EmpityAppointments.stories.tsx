import { Meta } from "@storybook/react";
import { Appointments } from "../components/Appointments";
import { AppointmentCard } from "../components/Appointments/AppointmentCard";
import { EmpityAppointments } from "../components/EmpityAppointments";

export default {
  title: "Components/Empity Appointment",
  component: Appointments,
} as Meta;

export const Default = () => {
  return (
    <div className="bg-secondary">
      <EmpityAppointments />;
    </div>
  );
};
