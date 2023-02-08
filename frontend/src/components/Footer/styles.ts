import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 1rem 0 1rem 0;
  height: 4.563rem;
  position: fixed;
  left: 0;
  bottom: 0rem;
  right: 0;
  background: ${({ theme }) => theme.colors['base-white']};
  box-shadow: 12px 12px 12px 14px rgba(0, 0, 0, 0.05);
`
