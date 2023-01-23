import { useContext } from 'react';
import AppointmentItem from './AppointmentItem';
import { AppointmentContext } from '../../context/AppointmentContext';

import '../../styles/AppointmentList.css';

function AppointmentList() {
  const appointment = useContext(AppointmentContext);

  return (
    <div className="appointment-box">
      <h2>
        {appointment.appointmentList && appointment.appointmentList.length} consultas agendadas
      </h2>
      <ul className="appointment-list">
        {appointment.appointmentList &&
          appointment.appointmentList.map(item => (
            <AppointmentItem key={item.id} appointment={item} />
          ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
