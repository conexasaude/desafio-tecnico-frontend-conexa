import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 280px);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex:1;
  width: 100%;
`;

export const Login = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 35px 15px;
	margin: 0 auto;
	display: flex;
  border-radius: 10px;
  flex-direction: column;
  background-color: #fff;
`;

export const Input = styled.input`
  flex: 1;
	margin: 15px 5px;
	text-align: left;
	font-size: 1.5em;
  padding: 18px;
  border-radius: 0px;
  border:none;
  border-bottom: 1px solid #ccc;

`

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  border-radius: 10px;
  padding: ${props => props.theme.spaces}
    calc(${props => props.theme.spaces} * 3);
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  margin-top: calc(${props => props.theme.spaces} * 2);
  color: ${props => props.theme.colors.background};
  transition: background 150ms linear;
  &.disabled {
    background: ${props => props.theme.colors.disabled};
    color: ${props => props.theme.colors.background};
  }
  &:hover {
    background:  ${props => props.theme.colors.secundary};

  }
`