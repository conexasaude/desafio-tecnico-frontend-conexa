import { useContext, useEffect, useState } from 'react';
import Footer from '../components/Home/Footer';
import BlankState from '../components/Home/BlankState';
import AppointmentList from '../components/Home/AppointmentList';
import { AppointmentContext } from '../context/AppointmentContext';

import '../styles/Home.css';

function Home() {
  const appointment = useContext(AppointmentContext);
  const [isAppointmentListEmpty, setIsAppointmentListEmpty] = useState(true);

  useEffect(() => {
    if (appointment.isAppointmentRetrievalSuccessful) {
      setIsAppointmentListEmpty(false);
    }
  }, [appointment.isAppointmentRetrievalSuccessful]);

  return (
    <section className="container home">
      <h1>Consultas</h1>
      <div className="container">
        {isAppointmentListEmpty ? <BlankState /> : <AppointmentList />}
      </div>
      <Footer />
    </section>
  );
}

export default Home;
