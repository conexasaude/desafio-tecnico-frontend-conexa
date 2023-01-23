import '../../styles/BlankState.css';
import plantIllustration from '../../assets/plantIllustration.svg';
import certificatesIllustration from '../../assets/certificatesIllustration.svg';

function BlankState() {
  return (
    <div className="blank-state">
      <div className="top">
        <img src={certificatesIllustration} alt="certificates" id="certificates" />
      </div>
      <div className="mid">
        <h2>Não há nenhuma consulta agendada</h2>
      </div>
      <div className="bottom">
        <img src={plantIllustration} alt="plant" id="plant" />
      </div>
    </div>
  );
}

export default BlankState;
