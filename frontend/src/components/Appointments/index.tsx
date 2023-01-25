import { useEffect } from "react";
import { AppointmentProps } from "../../types/appointment";
import { AppointmentCard } from "./AppointmentCard";

export function Appointments({ appointments }: { appointments: AppointmentProps[] }) {
  return (
    <div className="flex flex-col space-y-5 w-full max-w-[600px] px-5 items-center h-full">
      <p className="text-lg text-gray-800 text-left w-full">
        {appointments?.length} consultas agendadas
      </p>

      <div className="w-full max-w-[600px] space-y-10 overflow-y-auto pb-40">
        {appointments?.map((appointment) => (
          <AppointmentCard appointment={appointment} />
        ))}
      </div>
    </div>
  );
}
