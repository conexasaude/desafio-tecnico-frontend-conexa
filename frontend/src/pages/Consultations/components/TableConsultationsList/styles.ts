import styled from 'styled-components'

export const TableConsultationsContainer = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin: 200px;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors['base-gray-300']};
  }
`

export const TableConsultations = styled.table`
  width: 100%;

  td {
    padding: 0.55rem 0rem;
  }
`
