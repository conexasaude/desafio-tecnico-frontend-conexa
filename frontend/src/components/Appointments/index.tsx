import { AppointmentProps } from "../../types/appointment";
import { AppointmentCard } from "./AppointmentCard";

export function Appointments({ appointments }: { appointments: AppointmentProps[] }) {
  return (
    <div className="flex flex-col space-y-5 w-full items-center">
      <p className="text-lg text-gray-800">{appointments.length} consultas agendadas</p>

      <div className="w-full max-w-[600px] space-y-10 overflow-y-auto max-h-[400px]">
        {appointments.map((appointment) => (
          <AppointmentCard appointment={appointment} />
        ))}
      </div>
    </div>
  );
}
