import { ConsultationsList } from './components/ConsultationsList'
import { ConsultationsPageContainer } from './styles'

export function ConsultationsPage() {
  return (
    <ConsultationsPageContainer>
      <h1>Consultas</h1>
      <ConsultationsList />
    </ConsultationsPageContainer>
  )
}
