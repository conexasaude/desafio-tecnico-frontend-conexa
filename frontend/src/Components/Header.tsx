import { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import logo from '../assets/logo.svg';
import '../styles/Header.css';
import HeaderAuthenticatedUser from './HeaderAuthenticatedUser';

function Header() {
  const auth = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isAtHomePage = location.pathname === '/';

  useEffect(() => {
    if (auth.isAuthenticated) navigate('/');
  }, [auth.isAuthenticated]);

  return (
    <header>
      {!isAtHomePage && !auth.isAuthenticated ? (
        <div className="container">
          <Link to="/">
            <img src={logo} alt="conexa" />
          </Link>
        </div>
      ) : (
        <HeaderAuthenticatedUser />
      )}
    </header>
  );
}

export default Header;
