import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import logo from '../assets/logo.svg';
import '../styles/Header.css';

function HeaderAuthenticatedUser() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <div className="container home">
      <Link to="/">
        <img src={logo} alt="conexa" />
      </Link>
      <div className="container" id="authenticated-user">
        <p>Olá, Dr. {auth.user && auth.user.name}</p>
        <button type="button" id="btn-logout" className="secondary-color" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
}

export default HeaderAuthenticatedUser;
