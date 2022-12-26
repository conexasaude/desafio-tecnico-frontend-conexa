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
      color: '#ff8800',
      background: '#ffd29e1c',
    }}
  >
    <div className="fa-3x">
      <i className="fas fa-fan fa-spin"></i>
    </div>
  </div>
);

export default Loader;
