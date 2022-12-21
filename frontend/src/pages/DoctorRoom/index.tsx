import { Link, useLocation } from 'react-router-dom';

const DoctorRoom = () => {
  const location = useLocation();

  return (
    <>
      'doctor room page'
      <Link
        to={'/new-medical-consultation'}
        state={{ backgroundLocation: location }}
      >
        new consultation
      </Link>
    </>
  );
};

export default DoctorRoom;
