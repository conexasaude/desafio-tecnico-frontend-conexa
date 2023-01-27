import { AppointmentProps } from "../../types/appointment";
import { AnimateNumber } from "../../utils/animateNumber";
import { FadeEnterMotion } from "../FadeEnterMotion";
import { AppointmentCard } from "./AppointmentCard";
import { motion } from "framer-motion";

interface AppointmentsProps {
  appointments: AppointmentProps[];
}

export function Appointments({ appointments }: AppointmentsProps) {
  return (
    <div className="flex flex-col space-y-5 w-full max-w-[600px] px-5 items-center h-full">
      <p className="text-lg text-gray-800 text-left w-full">
        <div className="flex space-x-2">
          <AnimateNumber from={0} to={appointments?.length} />
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <p>consultas agendadas</p>
          </motion.div>
        </div>
      </p>

      <div className="w-full max-w-[600px] space-y-10 overflow-y-auto pb-40">
        {appointments?.map((appointment, index) => {
          return (
            <FadeEnterMotion delay={index / 10 / 2} key={appointment.id}>
              <AppointmentCard appointment={appointment} />
            </FadeEnterMotion>
          );
        })}
      </div>
    </div>
  );
}
