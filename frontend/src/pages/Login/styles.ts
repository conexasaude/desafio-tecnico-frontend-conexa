import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0rem 3.125rem;
  margin-top: 60px;

  @media only screen and (max-width: 600px) {
    display: inline-block;
  }
`

export const IllustrationContainer = styled.div`
  width: 100%;
  display: inline-block;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  height: 27.75rem;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 0;
    height: 0;
  }

  h1 {
    font: 700 3.25rem Montserrat, sans-serif;
    color: ${({ theme }) => theme.colors['base-blue-dark']};
    margin-top: 2.5rem;
  }

  img {
    margin-top: 4.188rem;
    display: inline-block;

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`

export const LoginContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 27.75rem;
  justify-content: center;
  padding: 3rem;
`
