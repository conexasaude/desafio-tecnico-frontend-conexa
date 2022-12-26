import { FaCircleNotch } from 'react-icons/fa';

const Loader = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#2E50D4',
      background: '#ffd29e1c',
    }}
  >
    <div className="fa-3x">
      <FaCircleNotch />
    </div>
  </div>
);

export default Loader;
