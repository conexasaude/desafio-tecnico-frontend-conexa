import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-self: flex-end;
  padding: ${props => props.theme.spaces};
`

export const Button = styled.button`
  border: 2px solid ${props=>props.theme.colors.primary};
  color:${props=>props.theme.colors.primary};
  font-weight: bold;
  background: transparent;
  padding: 1rem 2rem;
  border-radius: 0.7rem;
  margin: 0 1rem;
  cursor: pointer;
  &:hover{
    background: ${props=>props.theme.colors.primary};
    color:${props=>props.theme.colors.background};
  }
  &.inverse{
    border-color: ${props=>props.theme.colors.primary};
    color:${props=>props.theme.colors.background};
    background-color: ${props=>props.theme.colors.primary};;
    &:hover{
      background: ${props=>props.theme.colors.background};
      color:${props=>props.theme.colors.primary};
    }
  }
`