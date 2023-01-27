import { AppointmentProps } from "../../types/appointment";
import { textSlicer } from "../../utils/textSlicer";

export function AppointmentCard({ appointment }: { appointment: AppointmentProps }) {
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
        <div className="flex space-x-1"></div>
      </div>

      <button className="filled w-20 ml-auto">Atender</button>
    </div>
  );
}
