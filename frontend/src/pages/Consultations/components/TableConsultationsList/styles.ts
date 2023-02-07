import styled from 'styled-components'

export const TableConsultationsContainer = styled.div`
  width: 50%;
  padding: 0 1.5rem;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin: 100px;

  @media only screen and (max-width: 900px) {
    margin: 0;
    margin-top: 30px;
    width: 100%;
    span {
      font-size: 30px;
    }
  }

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors['base-gray-300']};
  }
`

export const TableConsultations = styled.table`
  width: 100%;

  td {
    padding: 0.55rem 0rem;

    @media only screen and (max-width: 900px) {
      font-size: 20px;

      button {
        font-size: 20px;
      }
    }
  }
`
