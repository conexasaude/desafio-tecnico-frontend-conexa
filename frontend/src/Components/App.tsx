import loginIllustration from '../assets/loginIllustration.svg';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <img src={loginIllustration} className="logo" alt="Logo Conexa" />
      <h1>hello</h1>
    </>
  );
}

export default App;
