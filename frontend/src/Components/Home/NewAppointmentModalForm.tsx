import { FormEvent, useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { AppointmentContext } from '../../context/AppointmentContext';

import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/NewAppointmentModalForm.css';

function NewAppointmentModalForm({
  setIsHidden,
}: {
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const appointment = useContext(AppointmentContext);
  const [date, setDate] = useState(new Date());

  const formatDoubleDigit = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const availableHours = Array.from({ length: 24 }, (_, i) => formatDoubleDigit(i));
  const availableMinutes = Array.from({ length: 60 }, (_, i) => formatDoubleDigit(i));

  const initialHour = {
    value: availableHours[0],
    label: availableHours[0],
  };
  const initialMinute = {
    value: availableMinutes[0],
    label: availableMinutes[0],
  };

  const [patientSelected, setPatientSelected] = useState(null);
  const [hourSelected, setHourSelected] = useState(initialHour);
  const [minutesSelected, setMinutesSelected] = useState(initialMinute);

  const fullNameFormat = (first_name: string, last_name: string) => {
    return `${first_name} ${last_name}`;
  };

  const handleCloseNewAppointmentModal = () => {
    setIsHidden(true);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!patientSelected) return;
    date.setHours(Number(hourSelected.value), Number(minutesSelected.value));

    await appointment.postNewAppointment({
      patientId: patientSelected.value,
      date: date.toString(),
    });
    handleCloseNewAppointmentModal();
  };

  const selectStyles = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: (base: any) => ({
      ...base,
      border: 0,
      boxShadow: 'none',
    }),
  };

  return (
    <form action="" id="form-modal" onSubmit={handleSubmit}>
      <div className="form-modal-label" id="datepicker-label">
        <p>Dia</p>
        <DatePicker
          selected={date}
          onChange={(newDate: Date) => setDate(newDate)}
          timeFormat="HH:mm"
          dateFormat="dd/MM/yyyy"
        />
        <hr />
      </div>
      <div className="form-modal-label">
        <p>Horário</p>
        <div className="time">
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            defaultValue={initialHour}
            onChange={setHourSelected}
            options={availableHours.map(selectedHour => ({
              value: selectedHour,
              label: selectedHour,
            }))}
            styles={selectStyles}
          />
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            defaultValue={minutesSelected}
            onChange={setMinutesSelected}
            options={availableMinutes.map(selectedMinutes => ({
              value: selectedMinutes,
              label: selectedMinutes,
            }))}
            styles={selectStyles}
          />
        </div>
        <hr />
      </div>
      <div className="form-modal-label">
        <p>Paciente *</p>
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Selecione um paciente"
          onChange={setPatientSelected}
          isClearable
          required
          defaultValue={null}
          options={
            appointment.patientList &&
            appointment.patientList.map(patient => ({
              value: patient.id,
              label: fullNameFormat(patient.first_name, patient.last_name),
            }))
          }
          styles={selectStyles}
        />
        <hr />
      </div>
      <div id="btn-container-modal">
        <button type="submit" className="primary-color">
          Agendar
        </button>
        <button type="button" className="secondary-color" onClick={handleCloseNewAppointmentModal}>
          Fechar
        </button>
      </div>
    </form>
  );
}

export default NewAppointmentModalForm;
