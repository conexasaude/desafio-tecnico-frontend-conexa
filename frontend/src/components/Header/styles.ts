import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 1rem 1rem 0;
  height: 4.563rem;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
  background: ${({ theme }) => theme.colors['base-white']};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
`

export const LoginNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
