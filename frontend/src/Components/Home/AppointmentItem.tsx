import { Appointment } from '../../types/Appointment';

import '../../styles/AppointmentItem.css';

function AppointmentItem({ appointment }: { appointment: Appointment }) {
  const isSingleDigit = (num: number): boolean => num < 10;

  const formatDoubleDigit = (num: number): string => {
    return isSingleDigit(num) ? `0${num}` : `${num}`;
  };

  const formatAppointmentTime = (strDate: string): string => {
    const date = new Date(strDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hour = date.getHours();
    const minutes = date.getMinutes();

    const fullDay = `${formatDoubleDigit(day)}/${formatDoubleDigit(month)}/${year}`;
    const fullTime = `${formatDoubleDigit(hour)}:${formatDoubleDigit(minutes)}`;

    return `${fullDay} às ${fullTime}`;
  };

  return (
    <li className="appointment-item">
      <div className="patient">
        <h3 className="full-name">
          {appointment.patient &&
            `${appointment.patient.first_name} ${appointment.patient.last_name}`}
        </h3>
        <p className="datetime">{formatAppointmentTime(appointment.date)}</p>
      </div>
      <button type="button" className="btn-finish primary-color">
        Atender
      </button>
    </li>
  );
}

export default AppointmentItem;
