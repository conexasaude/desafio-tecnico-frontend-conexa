import logo from '../assets/logo.svg';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <a href="#home">
          <img src={logo} alt="conexa" />
        </a>
      </div>
    </header>
  );
}

export default Header;
