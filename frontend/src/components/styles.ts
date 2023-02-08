import styled, { css } from 'styled-components'

interface HeaderFooterProps {
  variant: boolean
}

export const HeaderFooterContent = styled.div<HeaderFooterProps>`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;

    ${(props) =>
      props.variant &&
      css`
        justify-content: space-between;
      `}
  }
`
