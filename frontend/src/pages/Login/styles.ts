import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0rem 3.125rem;
  margin-top: 60px;
`

export const IllustrationContainer = styled.div`
  width: 100%;
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  height: 27.75rem;
  text-align: center;

  h1 {
    font: 700 3.25rem Montserrat, sans-serif;
    color: ${({ theme }) => theme.colors['base-blue-dark']};
  }

  img {
    margin-top: 4.188rem;
  }
`

export const LoginContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 27.75rem;
  justify-content: center;
  padding: 3rem;
`
