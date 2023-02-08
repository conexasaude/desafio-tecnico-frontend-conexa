import {
  CertificateContainer,
  PageEmptyContainer,
  PlantContainer,
  TitleEmptyContainer,
} from './styles'
import Certificates from '../../../../assets/illustration-certificates.svg'
import Plant from '../../../../assets/illustration-plant.svg'

export function EmptyConsultationsContainer() {
  return (
    <PageEmptyContainer>
      <PlantContainer>
        <img src={Plant} alt="plant" />
      </PlantContainer>
      <TitleEmptyContainer>
        <span>Não há nenhuma consulta agendada</span>
      </TitleEmptyContainer>
      <CertificateContainer>
        <img src={Certificates} alt="plant" />
      </CertificateContainer>
    </PageEmptyContainer>
  )
}
