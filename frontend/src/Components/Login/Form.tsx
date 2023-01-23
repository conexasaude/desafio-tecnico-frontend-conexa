/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import iconPasswordHide from '../../assets/iconPasswordHide.svg';
import iconPasswordShow from '../../assets/iconPasswordShow.svg';
import infoIcon from '../../assets/infoIcon.svg';

function Form() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = (): void => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (email && password) {
      const isLoggedIn = await auth.login(email, password);
      if (isLoggedIn) navigate('/');
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) navigate('/');
  }, [auth.isAuthenticated]);

  return (
    <div className="control-frame-input">
      <form className="login-form" action="" onSubmit={handleSubmit} method="post">
        <label className="login-label" htmlFor="email">
          <p>E-mail</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailInput}
            placeholder="Digite seu e-mail"
            required
          />
          <hr />
        </label>
        <label className="login-label" htmlFor="password">
          <p>
            Senha{' '}
            <span>
              <img src={infoIcon} alt="Toggle Senha" />
            </span>
          </p>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handlePasswordInput}
            placeholder="Digite sua senha"
            required
          />
          <span onClick={handleTogglePassword}>
            <img src={isPasswordShown ? iconPasswordShow : iconPasswordHide} alt="Ver Senha" />
          </span>
          <hr />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Form;
