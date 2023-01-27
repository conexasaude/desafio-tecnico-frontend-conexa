import { AppointmentProps } from "../../types/appointment";
import { textSlicer } from "../../utils/textSlicer";

export function AppointmentCard({ appointment }: { appointment: AppointmentProps }) {
  const dateTime = new Date(appointment.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex w-full">
      <div className="text-gray-600 flex flex-col justify-center">
        <p className="text-xl font-normal">
          {textSlicer(
            `${appointment.patient.first_name}
            ${appointment.patient.last_name}`,
            25
          )}
        </p>
        <div className="flex space-x-1">{dateTime}</div>
      </div>

      <button className="filled w-20 ml-auto">Atender</button>
    </div>
  );
}
