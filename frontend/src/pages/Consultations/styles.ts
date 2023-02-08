import styled from 'styled-components'

export const ConsultationsPageContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin-bottom: 50px;

  h1 {
    color: ${({ theme }) => theme.colors['base-blue-dark']};
    font-size: 3rem;
  }
`
