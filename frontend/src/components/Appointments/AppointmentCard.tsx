import { AppointmentProps } from "../../types/appointment";
import { formatTime } from "../../utils/formatTime";
import { textSlicer } from "../../utils/textSlicer";

export function AppointmentCard({ appointment }: { appointment: AppointmentProps }) {
  const patientName = `${appointment.patient.first_name} ${appointment.patient.last_name}`;

  return (
    <div className="flex w-full">
      <div className="text-gray-600 flex flex-col justify-center">
        <p className="text-xl font-normal">{textSlicer(patientName, 25)}</p>

        <div className="flex space-x-1">{formatTime(appointment.date)}</div>
      </div>

      <button className="filled w-20 ml-auto">Atender</button>
    </div>
  );
}
