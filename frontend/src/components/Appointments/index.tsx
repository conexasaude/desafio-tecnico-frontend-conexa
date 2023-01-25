import { AppointmentProps } from "../../types/appointment";
import { AnimateNumber } from "../../utils/animateNumber";
import { FadeEnterMotion } from "../FadeEnterMotion";
import { AppointmentCard } from "./AppointmentCard";

export function Appointments({ appointments }: { appointments: AppointmentProps[] }) {
  return (
    <div className="flex flex-col space-y-5 w-full max-w-[600px] px-5 items-center h-full">
      <p className="text-lg text-gray-800 text-left w-full">
        <div className="flex space-x-2">
          <AnimateNumber from={0} to={appointments?.length} />
          <p>consultas agendadas</p>
        </div>
      </p>

      <div className="w-full max-w-[600px] space-y-10 overflow-y-auto pb-40">
        {appointments?.map((appointment, index) => (
          <FadeEnterMotion delay={index / 10}>
            <AppointmentCard appointment={appointment} />
          </FadeEnterMotion>
        ))}
      </div>
    </div>
  );
}
