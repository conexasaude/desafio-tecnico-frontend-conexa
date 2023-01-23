import '../../styles/NewAppointmentModal.css';
import NewAppointmentModalForm from './NewAppointmentModalForm';

function NewAppointmentModal({
  isHidden,
  setIsHidden,
}: {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div id="new-appointment-modal" className={isHidden ? 'hidden' : 'show'}>
      <div className="container modal">
        <h2>Agendar Consulta</h2>
        <NewAppointmentModalForm setIsHidden={setIsHidden} />
      </div>
    </div>
  );
}

export default NewAppointmentModal;
