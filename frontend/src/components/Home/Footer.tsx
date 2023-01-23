import { useState } from 'react';
import NewAppointmentModal from './NewAppointmentModal';

import '../../styles/Footer.css';

function Footer() {
  const [isHidden, setIsHidden] = useState(true);

  const handleOpenNewAppointmentModal = (): void => {
    setIsHidden(false);
  };

  return (
    <>
      <footer>
        <hr />
        <div className="container footer">
          <button type="button" id="btn-help" className="secondary-color">
            Ajuda
          </button>
          <button
            type="button"
            id="btn-new-appointment"
            className="primary-color"
            onClick={handleOpenNewAppointmentModal}
          >
            Agendar consulta
          </button>
        </div>
      </footer>
      <NewAppointmentModal isHidden={isHidden} setIsHidden={setIsHidden} />
    </>
  );
}

export default Footer;
