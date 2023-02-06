import { Button } from '../../../../components/Button'
import { TableConsultationsContainer, TableConsultations } from './styles'

export function TableConsultationsList() {
  return (
    <TableConsultationsContainer>
      <TableConsultations>
        <tbody>
          <span>3 consultas agendas</span>
          <tr>
            <td>
              <div>Pedro Marinho dos Santo I...</div>
              <div>11/11/11</div>
            </td>
            <td>
              <Button variant="inline" text="Atender" />
            </td>
          </tr>
          <tr>
            <td>
              <div>Pedro Marinho dos Santo I...</div>
              <div>11/11/11</div>
            </td>
            <td>
              <Button variant="inline" text="Atender" />
            </td>
          </tr>
          <tr>
            <td>
              <div>Pedro Marinho dos Santo I...</div>
              <div>11/11/11</div>
            </td>
            <td>
              <Button variant="inline" text="Atender" />
            </td>
          </tr>
        </tbody>
      </TableConsultations>
    </TableConsultationsContainer>
  )
}
