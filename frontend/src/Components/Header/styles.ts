import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 2rem;
  background-color: #ffffff;
  color: black;
  box-shadow: 0 2px 15px 2px rgba(9, 9, 9, 0.23);
`
export const HeaderContent = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  transition: 0.3s ease padding;
  padding: 0 5px;
  div:nth-child(1) {
    width: 20%;
  }
  div:nth-child(2) {
    width: 80%;
    text-align: right;
  }
  @media ${'768px'} {
      padding: 0 20px;
  }
  > div {
      flex: 1;
  }
`
export const Logo = styled.img`
  margin-right: ${props => props.theme.spaces};
  width: 141px;
`
export const Button = styled.button`
  border: 1px solid ${props=>props.theme.colors.primary};
  background: transparent;
  padding: 0.3rem 0.9rem;
  border-radius: 0.7rem;
  margin: 0 1rem;
  cursor: pointer;
  &:hover{
    background: ${props=>props.theme.colors.primary};
    color:${props=>props.theme.colors.background};
  }
`

export const User = styled.span`
  font-size:1.4rem

`